<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
 
<h2> 게시글 작성 </h2>
 
<div class="container">
    <form action="/insertdo" method="post">
      <div class="form-group">
        <label for="subject">제목</label>
        <input type="text" class="form-control" id="bo_name" name="bo_name" placeholder="제목을 입력하세요.">
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea class="form-control" id="bo_main" name="bo_main" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">작성</button>
    </form>
</div>
<%@ include file="bootstrap.jsp" %>
</body>

</html>