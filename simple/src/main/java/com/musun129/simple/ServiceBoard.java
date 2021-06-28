package com.musun129.simple;

import java.util.List;

import org.springframework.stereotype.Service;

import com.musun129.simple.db.MapperBoard;

@Service
public class ServiceBoard {

	private MapperBoard mapperboard;
	
	public ServiceBoard(MapperBoard mapperboard) {
		this.mapperboard = mapperboard;
	}
	
	public List<DTOBoard> listBoard(int bo_pk){
		return mapperboard.listBoard(bo_pk);
	}
	
	public int insertBoard(DTOBoard board) {
		return mapperboard.insertBoard(board);
	}
	
	public int updateBoard(DTOBoard board) {
		return mapperboard.updateBoard(board);
	}
	
	public int deleteBoard(int bo_pk) {
		return mapperboard.deleteBoard(bo_pk);
				
	}
}
