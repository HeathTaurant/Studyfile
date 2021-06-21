 package com.musunsul29.db;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.musunsul29.DTOEthanol;

@Mapper
 public interface MapperEthanol {

	List<DTOEthanol> myetList(int et_pk);

	List<DTOEthanol> selectEthanol(String et_name);

	List<DTOEthanol> searchEthanol(String et_name);
	
	DTOEthanol getEthanol(int et_pk);
	 
 
 }
