package com.musun129.Board;

import java.sql.Timestamp;

public class DTOBoard extends DTOListPaging {
	
	private int bo_pk;
	private String bo_name;
	private String bo_main;
	private Timestamp bo_time;
	private int bo_hit;
	private int bo_view;
	
	public DTOBoard() {
		super();
	}
	public DTOBoard(int bo_pk) {
		this.bo_pk = bo_pk;
	}
	public int getBo_pk() {
		return bo_pk;
	}
	public void setBo_pk(int bo_pk) {
		this.bo_pk = bo_pk;
	}
	public String getBo_name() {
		return bo_name;
	}
	public void setBo_name(String bo_name) {
		this.bo_name = bo_name;
	}
	public String getBo_main() {
		return bo_main;
	}
	public void setBo_main(String bo_main) {
		this.bo_main = bo_main;
	}
	public Timestamp getBo_time() {
		return bo_time;
	}
	public void setBo_time(Timestamp bo_time) {
		this.bo_time = bo_time;
	}
	public int getBo_hit() {
		return bo_hit;
	}
	public void setBo_hit(int bo_hit) {
		this.bo_hit = bo_hit;
	}
	public int getBo_view() {
		return bo_view;
	}
	public void setBo_view(int bo_view) {
		this.bo_view = bo_view;
	}
	


}
