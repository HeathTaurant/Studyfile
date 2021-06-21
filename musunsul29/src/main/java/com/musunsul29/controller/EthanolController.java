package com.musunsul29.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.musunsul29.DTOEthanol;
import com.musunsul29.DTOReview;
import com.musunsul29.ServiceEthanol;
import com.musunsul29.ServiceReview;

@Controller
public class EthanolController {
	
	private ServiceEthanol service;
	private ServiceReview reviewService;
	
	public EthanolController(ServiceEthanol service, ServiceReview reviewService) {
		this.service=service;
		this.reviewService=reviewService;
	}

	@RequestMapping("/DetailPage")	
	public String showDetailPage(Model model, HttpServletRequest request, HttpServletResponse response, HttpSession session) {
		
		DTOEthanol item= service.getEthanol(1);
		model.addAttribute("list",item);
		
		if (session.getAttribute("login") == null || (boolean)session.getAttribute("login") == false) {
			model.addAttribute("login", false);
		} else {
			model.addAttribute("login", true);
			model.addAttribute("nickname", (String)session.getAttribute("mem_nickname"));
		}
		
		model.addAttribute("et_pk", 1);
		model.addAttribute("mem_id", (String)session.getAttribute("mem_id"));
		model.addAttribute("mem_nickname", (String)session.getAttribute("mem_nickname"));
		
		List<DTOReview> listReview = reviewService.reviewList(1);
		model.addAttribute("reviewListAll", listReview);
		
		return "DetailPage/DetailPage";
	}
	
	@RequestMapping(value = "/DetailPage", method = RequestMethod.POST)
	public String showmitReview(DTOReview review, Model model, HttpServletRequest request, HttpServletResponse response, HttpSession session) {
		
		reviewService.insertReview(review);
		
		DTOEthanol item= service.getEthanol(1);
		model.addAttribute("list",item);
		model.addAttribute("et_pk", 1);
		model.addAttribute("mem_id", (String)session.getAttribute("mem_id"));
		model.addAttribute("mem_nickname", (String)session.getAttribute("mem_nickname"));
		
		List<DTOReview> listReview = reviewService.reviewList(1);
		model.addAttribute("reviewListAll", listReview);
		
		return "DetailPage/DetailPage";
	}
	
}