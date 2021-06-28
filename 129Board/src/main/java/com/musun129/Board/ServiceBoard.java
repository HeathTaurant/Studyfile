package com.musun129.Board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.musun129.Board.mapper.MapperBoard;

@Service
public class ServiceBoard {

	private MapperBoard mapperboard;
	
	public ServiceBoard(MapperBoard mapperboard) {
		this.mapperboard = mapperboard;
	}
	
	public List<DTOBoard> listBoard() throws Exception{
		
		return mapperboard.listBoard();
	}
	
	public DTOBoard detailBoard(int bo_pk) throws Exception{
		return mapperboard.detailBoard(bo_pk);
	}
	
	public int insertBoard(DTOBoard board) {
		return mapperboard.insertBoard(board);
	}
	
	public int updateBoard(DTOBoard board) {
		return mapperboard.updateBoard(board);
	}

	public int countBoard(DTOBoard dtoBoard) {
		return mapperboard.countBoard(dtoBoard);
	}

	public List<DTOBoard> listBoard(DTOBoard dtoBoard) {
		return mapperboard.listBoard();
	}


	
	
}
