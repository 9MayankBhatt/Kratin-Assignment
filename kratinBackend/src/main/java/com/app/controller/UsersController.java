package com.app.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HealthDetailsDto;
import com.app.dto.UserDto;
import com.app.pojos.Categories;
import com.app.pojos.CategoryName;
import com.app.pojos.CategoryUser;
import com.app.pojos.Doctors;
import com.app.pojos.HealthDetails;
import com.app.pojos.Role;
import com.app.pojos.Users;
import com.app.service.ICategoriesService;
import com.app.service.ICategoryUserService;
import com.app.service.IDoctorService;
import com.app.service.IHealthDetailsService;
import com.app.service.IUsersService;
import com.app.service.MailStrucure;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UsersController {
	
	// Dependency injection of service layer
	@Autowired
	IUsersService uService;
	
	@Autowired
	IHealthDetailsService hdService;
	
	@Autowired
	ICategoryUserService cuService;
	
	@Autowired
	ICategoriesService cService;
	
	@Autowired
	IDoctorService dService;
	
	@Autowired
	MailStrucure mService;
	
	// User Login API
	@PostMapping("/login")
	public UserDto loginUser(@RequestBody UserDto user)
	{
		Users lUser =  uService.findUserByEmail(user.getEmail());
		if(lUser != null)
		{
			if(lUser.getPassword().equals(user.getPassword()))
			{
				return new UserDto(lUser.getFirstName(), lUser.getLastName(), 
						lUser.getEmail(), lUser.getPassword(), lUser.getRole(), 
						lUser.getDob(), lUser.getGender());
			}
		}
		return null;
	}
	
	// User registration API
	@PostMapping("/register")
	public String registerUser(@RequestBody Users newUser)
	{
		newUser.setRole(Role.ROLE_USER);
		String mesg = uService.addUser(newUser);
		return mesg;
	}
	
	// List health details
	@PostMapping("/details")
	public List<HealthDetailsDto> listHealthDetails(@RequestBody UserDto u)
	{
		Users lUser =  uService.findUserByEmail(u.getEmail());
		
		List<HealthDetails> hdList =  hdService.hdListByUser(lUser);
		List<HealthDetailsDto> hdListDto = hdList.stream().map(hd-> 
						new HealthDetailsDto(hd.getBpSys(), hd.getBpDia(), 
								hd.getHeartRate(), hd.getCholestrolLevel(), 
								hd.getHeight(), hd.getWeight())).collect(Collectors.toList());
		return hdListDto;
	}
	
	// Add health details 
	@PostMapping("/addHealthDetails/{email}")
	public String addHealthDetails(@RequestBody HealthDetails newHealthDetails,
			@PathVariable String email)
	{
		Users lUser =  uService.findUserByEmail(email);
		newHealthDetails.setUserHealthDetails(lUser);
		return hdService.addHd(newHealthDetails);
	}
	
	// Check the health details and find user falls in which category
	@PostMapping("/checkCategory")
	public String checkHealth(@RequestBody UserDto user)
	{
		String mesg = null;
		Users lUser =  uService.findUserByEmail(user.getEmail());
		List<HealthDetails> hdList =  hdService.hdListByUser(lUser);
		
		for(int i = 0; i < hdList.size(); i++)
		{
			CategoryUser cu = new CategoryUser();
			Categories categ1 = cService.getCategoryByCat(CategoryName.RHEUMATOLOGIST);
			cu.setCategory(categ1);
			cu.setUser(lUser);
			cuService.addCategoryUser(cu);
			if((hdList.get(i).getBpDia() < 60 || hdList.get(i).getBpDia() >= 80 ) 
					|| (hdList.get(i).getBpSys() < 90 || hdList.get(i).getBpSys() >= 130))
			{
				Categories categ = cService.getCategoryByCat(CategoryName.CARDIOLOGIST);
				cu.setCategory(categ);
				cu.setUser(lUser);
				cuService.addCategoryUser(cu);
				mesg = "Your blood pressure is not normal";
			}else
			
			if(hdList.get(i).getHeartRate() < 78 || hdList.get(i).getHeartRate() > 132)
			{
				Categories categ = cService.getCategoryByCat(CategoryName.CARDIOLOGIST);
				cu.setCategory(categ);
				cu.setUser(lUser);
				cuService.addCategoryUser(cu);
				mesg = "Your heart rate is not normal";
			}else
			
			if(hdList.get(i).getCholestrolLevel() >= 240)
			{
				Categories categ = cService.getCategoryByCat(CategoryName.CARDIOLOGIST);
				cu.setCategory(categ);
				cu.setUser(lUser);
				cuService.addCategoryUser(cu);
				mesg = "Your Cholesterol level is not normal";
			}else
			
			if((hdList.get(i).getWeight()/(hdList.get(i).getHeight()*hdList.get(i).getHeight())) > 25
					||(hdList.get(i).getWeight()/(hdList.get(i).getHeight()*hdList.get(i).getHeight())) < 18)
			{
				Categories categ = cService.getCategoryByCat(CategoryName.PHYSICIAN);
				cu.setCategory(categ);
				cu.setUser(lUser);
				cuService.addCategoryUser(cu);
				mesg = "Your BMI is not normal";
			}else
			{
				Categories categ = cService.getCategoryByCat(CategoryName.NORMAL);
				cu.setCategory(categ);
				cu.setUser(lUser);
				cuService.addCategoryUser(cu);
				mesg = "Your report is Good";
			}
		}
		return mesg;
	}
	
	// Appoint a doctor
	@PostMapping("/appointments")
	public String appointDoctor(@RequestBody UserDto user)
	{
		Users lUser =  uService.findUserByEmail(user.getEmail());
		System.out.println("here");
		List<CategoryUser> categoryUsers = cuService.getCategoryUsers(lUser);
		List<Categories> categoryList = new ArrayList<Categories>();
		for(int i = 0; i < categoryUsers.size(); i++)
		{
			categoryList.add(categoryUsers.get(i).getCategory());
		}
		System.out.println("here2");
		List<Doctors> docList = new ArrayList<Doctors>();
		for(int i = 0; i< categoryList.size(); i++)
		{
			Doctors doctor = dService.findByCategory(categoryList.get(i));
			docList.add(doctor);
			String sub = "Appointment Booked at "+doctor.getName();
			String mesg = "Dear "+lUser.getFirstName()+" "+lUser.getLastName()+",\n"
					+ "You have an appointment at "+doctor.getName()+" after two days "
							+ "i.e. on "+LocalDate.now().plusDays(2)+ " \n\n\nRemember to show up 15 minutes early.\r\n"
									+ "Remember to bring follow-up reports."
									+ "\n\n\nContact details of the clinic"
									+"\nAddress:\t"+doctor.getAddress()
									+"\nContact number:\t"+doctor.getMobile();
					;
			mService.sendThisMail(lUser.getEmail(), sub, mesg);
		}
		return "mail Sent";
		
	}
}
