package com.musunsul29;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;




@Controller
public class MemberController {
	
	
	
private ServiceMember memberService;
 private ServiceReview reviewService; 
 private ServiceEthanol ethanolService;
	
	public MemberController(ServiceMember memberService,ServiceReview reviewService,ServiceEthanol ethanolService) {
		this.memberService = memberService;
		 this.reviewService =reviewService; 
		 this.ethanolService = ethanolService;
	}
	
	
	 
	
	
	//처음에 register에 들어갈때 주는 멥핑 
	@RequestMapping("/member.do")
	public String memberrMain(HttpServletRequest request) {
		return "member/register";
	}
	
	
	
		// 아이디 중복확인 ajax 
		@RequestMapping(value = "member/idCheck", method = RequestMethod.GET)
		@ResponseBody
		public int idCheck(HttpServletRequest request) {
			String mem_id = request.getParameter("mem_id");
			System.out.println(mem_id+"입력");
			return memberService.idCheck(mem_id);
		}
		
	
	//회원 등록하는 맵핑
	
	  @RequestMapping("/registermember.do")
	  public String register(HttpServletRequest request) { 
		  String mem_id =request.getParameter("mem_id"); 
		  String mem_email =request.getParameter("mem_email"); 
		  String mem_name =request.getParameter("mem_name");
		  String mem_pw =request.getParameter("mem_pw");
		  String mem_phone =request.getParameter("mem_phone"); 
		  String mem_nickname =request.getParameter("mem_nickname"); 
		  String mem_sex =request.getParameter("mem_sex"); 
		  String mem_birthday =request.getParameter("mem_birthday");		  
		  String img =request.getParameter("mem_img");
		  int age =Integer.parseInt(request.getParameter("mem_age")); 
	  
	  int count = memberService.insertMember(new
	  DTOMember(mem_id,mem_email,mem_pw,mem_phone,
	  mem_nickname,mem_name,mem_sex,mem_birthday,age,img));
	  
	  
	  System.out.println(count + "건 등록완료"); 
	  return memberrMain(request);
	  }
	  
	  
	  
	  @RequestMapping("member/login")
	  public String login(HttpServletRequest request) {
		  return "/member/login";
	  }
	  
		
	  @RequestMapping("/login.do")
		public String login(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
			String mem_id = request.getParameter("mem_id");
			String mem_pw = request.getParameter("mem_pw");
			DTOMember dto = memberService.login(mem_id, mem_pw);
			// HttpSession session = request.getSession();
			if (dto != null) {
				session.setAttribute("login", true);
				session.setAttribute("mem_id", dto.getMem_id());
				session.setAttribute("mem_name", dto.getMem_name());
				session.setAttribute("mem_nickname", dto.getMem_nickname());
				session.setAttribute("mem_phonnumber", dto.getMem_phonnumber());
				session.setAttribute("mem_pw", dto.getMem_pw());
				session.setAttribute("mem_email", dto.getMem_email());
				
				session.setMaxInactiveInterval(10 * 60);
				System.out.println("로그인 성공");
				return login(request);
			} else {
				try {
					response.setContentType("text/html;charset=utf-8");
					response.getWriter().write("<script>alert('아이디 비번을 확인하세요');history.back();</script>");
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

			return null;
		}
	  
	  
	  @RequestMapping("/logout.do")
		public String logout(HttpServletRequest request, HttpSession session, HttpServletResponse response) {
			session.invalidate();
			return login(request);
		}
	  
	  
	  @RequestMapping("/mypage")
	  public String mypage(Model model,HttpServletRequest request,HttpServletResponse response) {
		  int et_pk = 1;
		  System.out.println();
		  List<DTOEthanol> et_list = ethanolService.myetList(et_pk);
		  model.addAttribute("et_list", et_list);
		  
		  String mem_id = (String)request.getSession().getAttribute("mem_id");
		 
		  List<DTOReview> list = reviewService.selectReviewList(mem_id);
		  model.addAttribute("list", list);
		  
		  
		  
		  
		  return "Mypage/mypage";
	  }
	  
	  
	  
	  @RequestMapping("/profile_update")
	  public String memberprofile() {
		  return "Mypage/profile_update";
	  }
	  
		
		
 
	  
		
	  @RequestMapping("/member_change")
	  public String memberchange() {
		  return "Mypage/member_change";
	  }
	  
	  //회원 정보 수정
	  @RequestMapping("updatemember.do")
	  public String updatemember(HttpServletRequest request,HttpSession session) {
		  
			String mem_id = request.getParameter("mem_id"); 
			
				String mem_email =request.getParameter("mem_email");
				String mem_pw =request.getParameter("mem_pw");
				String mem_phone =request.getParameter("mem_phone"); 
				String mem_nickname =request.getParameter("mem_nickname");
				/* String mem_name =request.getParameter("mem_name"); */
				
				//수정
				int count = memberService.updateMember(new DTOMember(mem_id,mem_email,mem_pw,mem_phone,mem_nickname));
				System.out.println("수정 : " + count);
				
				
			
			return "/member/login";
			
	  }
	  
	  
	  @RequestMapping("/member_delete")
	  public String member_delete() {
		  return "Mypage/member_delete";
	  }
	  
	  @RequestMapping("memberDelete.do")
	  public String memberDelete(HttpServletRequest request) {
		  String mem_id = request.getParameter("mem_id");
		  String mem_pw = request.getParameter("mem_pw");
		  
		 int count =  memberService.deleteMember(mem_id, mem_pw);
		 System.out.println("삭제 : " + count);
		 
		 return "member/register";
		  
	  }
	  
	  
	  
	  @RequestMapping("/myreview_update") 
	  public String myreviewupdate(Model model, HttpServletRequest request,HttpServletResponse response) {
		  String mem_id = (String)request.getSession().getAttribute("mem_id");
		  System.out.println(mem_id);
		  List<DTOReview> list = reviewService.selectReviewList(mem_id);
		  model.addAttribute("list", list);
		  
		  
	
		  
		  return "Mypage/myreview_update"; 
	  }
	  
	  
	  @RequestMapping("/mylike_ethanol") 
	  public String mylike_ethanol(Model model, HttpServletRequest request,HttpServletResponse response) {
		  int et_pk = 1;
		  System.out.println();
		  List<DTOEthanol> et_list = ethanolService.myetList(et_pk);
		  model.addAttribute("et_list", et_list);
		  
		  
	
		  
		  return "Mypage/mylike_ethanol"; 
	  }
	  
	  
	  
	  //ajax로 리뷰에 있는 값 가지고 오는거 사용 x 
	  @RequestMapping("/myreview.do")
	  public String myreview(HttpServletRequest request,HttpServletResponse response) {
		  String mem_id = (String)request.getSession().getAttribute("mem_id");
		  System.out.println(mem_id);
		  List<DTOReview> list = reviewService.selectReviewList(mem_id);
		  
		  
		  JSONObject obj = new JSONObject();
			if(list.size() == 0) {
				obj.put("code", 500);
				obj.put("message", "전송 실패.");
				obj.put("result", "None");
			}else {
				obj.put("code", 200);
				obj.put("message", "전송성공.");
				obj.put("result", new JSONArray(list));
			}
			try {
				response.setContentType("text/html;charset=utf-8");
				response.getWriter().write(obj.toString());
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			
		
			return null; 
		  
	  }
	  
	  
	  
	  
	  
	  @RequestMapping("/search")
		  public String search() {
			  return "Search/search";
		  }
	  
		
	  
	  @RequestMapping("search.do") 
	  public String searchDo(HttpServletRequest request,HttpServletResponse response) {
		  String et_name = request.getParameter("search_et");
		  System.out.println(et_name);
		 List<DTOEthanol> list = ethanolService.searchEthanol(et_name);
		 System.out.println(list.size());
		  JSONObject obj = new JSONObject();
			if(list.size() == 0 || et_name.equals("")) {
				System.out.println(500);
				obj.put("code", 500);
				obj.put("message", "전송 실패.");
				obj.put("result", "None");
			}else {
				System.out.println(200);
				obj.put("code", 200);
				obj.put("message", "전송성공.");
				obj.put("result", new JSONArray(list));
			}
			try {
				response.setContentType("text/html;charset=utf-8");
				response.getWriter().write(obj.toString());
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			
		
			return null; 
		  
	  }
	  
	  
	  
	  
	  @RequestMapping("/searchMain")
	  public String searchMain(Model model, HttpServletRequest request) {
		  String et_name = request.getParameter("search");
		  System.out.println(et_name);
		  List<DTOEthanol> et_list = ethanolService.selectEthanol(et_name);
		  model.addAttribute("et_list", et_list);
		  return "Search/searchMain";
	  }
	  
	  
	  
	  
	  
	 

}
