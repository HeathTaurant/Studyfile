package com.musun129.Board;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JspTest {
	

	
@RequestMapping("/test")
private String jspTest() throws Exception {

	return "Main";
}
}
