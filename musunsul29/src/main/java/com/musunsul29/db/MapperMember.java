package com.musunsul29.db;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.musunsul29.DTOMember;


@Mapper
public interface MapperMember {

	int insertMember(DTOMember member);

	List<DTOMember> selectMember(DTOMember member);

	DTOMember login(HashMap<String, Object> map);

	int updateMember(DTOMember member);

	int deleteMember(String mem_id, String mem_pw);
	
	public int idCheck(String mem_id);
}