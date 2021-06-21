package com.musunsul29;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.musunsul29.db.MapperMember;


@Service
public class ServiceMember {
	
	private MapperMember mapper;
	
	public ServiceMember(MapperMember mapper) {
		
		this.mapper = mapper;
	}
	
	public int insertMember(DTOMember member) {
		return mapper.insertMember(member);
	}
	
	public List<DTOMember> selectMember(DTOMember member){
		return mapper.selectMember(member);
		
	}
	
	
	public DTOMember login(String mem_id, String mem_pw) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("mem_id", mem_id);
		map.put("mem_pw", mem_pw);
		return mapper.login(map);
	}
	
	public int updateMember(DTOMember member) {
		return mapper.updateMember(member);
	}
	
	public int deleteMember(String mem_id,String mem_pw) {
		return mapper.deleteMember(mem_id,mem_pw);
	}
	
	public int idCheck(String mem_id)  {
		return mapper.idCheck(mem_id);
	}

}
