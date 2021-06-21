<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	
	
</script>


</head>
<body>

<h1 class="member_change">회원 정보 수정</h1> <hr>

<form class="data_frm" action="updatemember.do">
			<input type="hidden" name="mem_id" value="${sessionScope.mem_id}">
			이메일: <input type="text" name="mem_email" placeholder="이메일" value="${sessionScope.mem_email }" ><br>
			비밀번호: <input type="password" name="mem_pw" placeholder="비밀번호" value="${sessionScope.mem_pw }"><br>
			전화번호: <input type="text" name="mem_phone" placeholder="전화번호" value="${sessionScope.mem_phonnumber }"><br>
			닉네임: <input type="text" name="mem_nickname" placeholder="닉네임" value="${sessionScope.mem_nickname}"><br>
			
			<input type="submit" value="회원정보수정">
			
			
		</form>

</body>
</html>