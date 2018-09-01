package com.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.User;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	@RequestMapping(value="/login", method=RequestMethod.POST)
	public ResponseEntity<String> userLogin(@RequestBody User user){
		System.out.println(user.getEmail()+"   "+user.getPassword());
		if(!user.getEmail().isEmpty() && !user.getPassword().isEmpty()){
			return new ResponseEntity<String>("Login Success...!", HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<String>("Login Failure...!", HttpStatus.BAD_REQUEST);
	} 
	
}
