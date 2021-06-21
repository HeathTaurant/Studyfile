package com.musunsul29;

import java.util.List;

import org.springframework.stereotype.Service;

import com.musunsul29.db.MapperEthanol;

@Service
public class ServiceEthanol {
	
	private MapperEthanol mapper;
	
	public ServiceEthanol(MapperEthanol mapper) {
		this.mapper =mapper;
	}

	public List<DTOEthanol> myetList(int et_pk) {
		
		return mapper.myetList(et_pk);
	}

	public List<DTOEthanol> selectEthanol(String et_name) {
		
		return mapper.selectEthanol(et_name);
	}

	public List<DTOEthanol> searchEthanol(String et_name) {
		
		return mapper.searchEthanol(et_name);
	}
	
public DTOEthanol getEthanol(int et_pk) {
		return mapper.getEthanol(et_pk);
	}
     
}
