package com.musunsul29;

import java.util.List;

import org.springframework.stereotype.Service;

import com.musunsul29.db.MapperReview;

@Service
public class ServiceReview {

	private MapperReview reviewmapper;
	
	public ServiceReview(MapperReview mapper) {
		this.reviewmapper=mapper;
	}
	
	public List<DTOReview> selectReviewList(String mem_id) {
		
		return reviewmapper.selectReviewList(mem_id);
	}
	public int reviewCount(int et_pk) {
		return reviewmapper.reviewCount(et_pk);
	}	
	public List<DTOReview> reviewList(int et_pk) {
		return reviewmapper.reviewList(et_pk);
	}	
	public int insertReview(DTOReview dtoR) {
		return reviewmapper.insertReview(dtoR);
	}
	public int updateReview(DTOReview dtoR) {
		return reviewmapper.updateReview(dtoR);
	}
	public int deleteReview(int re_pk) {
		return reviewmapper.deleteReview(re_pk);
	}

}
