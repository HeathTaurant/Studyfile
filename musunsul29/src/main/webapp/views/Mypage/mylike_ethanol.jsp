<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
       <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>

ul{
border: 1px solid black;
width: 300px;

}
</style>

</head>

<body>

<h1>내가 좋아요 한 술</h1><hr>

<c:forEach var="et_item" items="${et_list}">

	<ul class="mylike_et" id="mylike_et"> 
	
	<li class="et_img"><img src="${et_item.et_image}">${et_item.et_image} </li>
	<li class="et_text" id="et_name"> ${et_item.et_name} </li>
	<li class="et_text" id="et_country"> ${et_item.et_country} </li>
	<li class="et_text" id="et_count "> ${et_item.et_count} </li>
	
	
	
	
	</ul>



</c:forEach>




</body>
</html>