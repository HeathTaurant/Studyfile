package com.musunsul29;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	@RequestMapping(value = "/main.do")
	public String Main(HttpServletRequest request) {
		return "Mainlayout/Mainlayout";
	}
	
	
	
	@RequestMapping("/test.do")
	public String Main2(HttpServletRequest request) {
		return "Survey/test";
	}
	
	
	
	
	@RequestMapping("/question.do")
	public String question(HttpServletRequest request) {
		return "Survey/question";
	}
	
	
	
	
	
	
	
}
