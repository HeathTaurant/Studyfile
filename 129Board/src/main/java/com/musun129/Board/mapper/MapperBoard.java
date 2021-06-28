package com.musun129.Board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.musun129.Board.DTOBoard;

@Mapper
public interface MapperBoard {

	public int countBoard(DTOBoard dtoBoard);

	public DTOBoard detailBoard(int bo_pk);
	
	public int insertBoard(DTOBoard board);

	public int updateBoard(DTOBoard board);

	public int deleteBoard(int bo_pk);

	public List<DTOBoard> listBoard();



}
