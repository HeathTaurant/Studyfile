 package com.musunsul29.db;
 
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.musunsul29.DTOReview;

/*@Repository("com.musunsul29.db.MapperReview")*/

@Mapper
public interface MapperReview {
	
	
	
	
	
	//평가 개수
		public int reviewCount(int et_pk);
		
		//평가 목록
		public List<DTOReview> reviewList(int et_pk);
		
		//평가 작성
		public int insertReview(DTOReview review);
		
		//평가 수정
		public int updateReview(DTOReview review);
		
		//평가 삭제
		public int deleteReview(int re_pk);

		public List<DTOReview> selectReviewList(String mem_id);
		
	
	
	
	
	
 
 }
