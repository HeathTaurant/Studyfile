package com.musun129.Board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.musun129.Board.DTOBoard;
import com.musun129.Board.ServiceBoard;

@Controller
public class ControllerBoard {
	
	private ServiceBoard serviceBoard;
	
	public ControllerBoard(ServiceBoard serviceBoard) {
		this.serviceBoard = serviceBoard;
	}
	
	@RequestMapping("/list")
	private String listBoard(Model model) throws Exception{
		List<DTOBoard> list = serviceBoard.listBoard();
		model.addAttribute("list", list);
		return "list";
	}
	
	@RequestMapping("/insert")
	private String insertBoard() {

		return "insert";
	}
	@RequestMapping("/insertdo")
	private String insertProcBoard(HttpServletRequest request) throws Exception {
		DTOBoard board = new DTOBoard();
		board.setBo_name(request.getParameter("bo_name"));
		board.setBo_main(request.getParameter("bo_main"));

		serviceBoard.insertBoard(board);

		return "redirect:/list";
	}

	@RequestMapping("/detail/{bo_pk}")
	private String detailBoard(@PathVariable int bo_pk, Model model) throws Exception {
		model.addAttribute("detail", serviceBoard.detailBoard(bo_pk));

		return "detail";
	}
	
	@RequestMapping(value = "/board/**/boardList")
    public String boardList(HttpServletRequest req, ModelMap modelMap, @ModelAttribute("DTOBoard") DTOBoard dtoBoard) {
    
		String jspPath =req.getRequestURI();
        
    ///////paging : S//////////////////////////////
     
    int pageSize = dtoBoard.getPageSize();// 한페이지에 나오는 게시물 개수
    int pageIndex = dtoBoard.getPageIndex(); //현재 선택한 페이지 number
    int pageGroupSize = dtoBoard.getPageGroupSize(); // 페이지 번호가 몇개 나오느냐 개수
    int startRow = (pageIndex - 1) * pageSize + 1;// 한 페이지의 시작글 번호
    int endRow = pageIndex * pageSize;// 한 페이지의 마지막 글번호
 
    dtoBoard.setStartRow(startRow);
    dtoBoard.setEndRow(endRow);
    int count = serviceBoard.countBoard(dtoBoard); //게시물 총 개수
 
    int pageGroupCount = count / (pageSize * pageGroupSize) + (count % (pageSize * pageGroupSize) == 0 ? 0 : 1);
    int nowPageGroup = (int) Math.ceil((double) pageIndex / pageGroupSize);
     
    List<DTOBoard> listBoard = serviceBoard.listBoard(dtoBoard);
     
    modelMap.put("pageIndex", pageIndex);
    modelMap.put("pageSize", pageSize);
    modelMap.put("count", count);
    modelMap.put("pageGroupSize", pageGroupSize);
    modelMap.put("nowPageGroup", nowPageGroup);
    modelMap.put("pageGroupCount", pageGroupCount);
    modelMap.put("articleList", listBoard);
    modelMap.put("boardSearchVO", dtoBoard);
     
        return jspPath;
    }

	
	

}
