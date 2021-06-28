<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
 
<h2> 게시글 목록 </h2>
 
<button class="btn btn-primary" onclick="location.href='/insert'">글쓰기</button>
 
<div class="container">
    <table class="table table-hover">
        <tr>
            <th>No</th>
            <th>Subject</th>
            <th>Date</th>
        </tr>
          <c:forEach var="l" items="${list}">
              <tr onclick="location.href='/detail/${l.bo_pk}'">
                  <td>${l.bo_pk}</td>
                  <td>${l.bo_name}</td>
                  <td>${l.bo_time}</td>
              </tr>
          </c:forEach>
          
    </table>
</div>
 
 
<%@ include file="bootstrap.jsp" %>
</body>
</html>
