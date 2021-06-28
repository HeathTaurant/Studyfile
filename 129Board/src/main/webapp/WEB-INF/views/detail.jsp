<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h2>게시글 상세</h2>

	<div class="container">
		<form action="/list" method="post">
			<div class="form-group">
				<label>제목</label>
				<p>${detail.bo_name}</p>
			</div>
			<div class="form-group">
				<label>작성날짜</label>
				<p>${detail.bo_time}</p>
			</div>
			<div class="form-group">
				<label>내용</label>
				<p>${detail.bo_main}</p>
			</div>
			<button type="submit" class="btn btn-primary">목록</button>
		</form>
	</div>


	<%@ include file="bootstrap.jsp"%>
</body>
</html>
