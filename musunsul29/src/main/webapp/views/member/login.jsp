<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<title>로그인</title>
	
	
	<style>
   form{
       text-align: center;
       margin:0 auto;
   }

   div.login{
       margin:0 auto;
       width:500px;
       height:500px;
       border:1px solid #000;
       border-radius: 10%;
   }

   img{
   		width:200px;
   		height:200px;
       margin-top:20px;
       margin-bottom:80px;
   }

   input{
       width:300px;
   }
	</style>
	
	<script type="text/javascript">
	function logout() {
        alert("로그아웃이 되었습니다 다시 로그인 해주세요");
			 history.back();
        }
	</script>
	</head>
	<body>
    	
        	<div class="login">
            	<h1>로그인</h1>
            	<img src ="/images/sul.jpg"><br>
            	
              
        	
    
    	<c:if test="${sessionScope.login != null && sessionScope.login == true}">
			${sessionScope.mem_id } 님이 로그인 하셨습니다.<br>
		<a href="/logout.do" id="logout" onclick="logout();" >로그아웃</a>  | <a href="/member_change">정보수정</a>
	</c:if> 
	
	
	<c:if test="${sessionScope.login == null || sessionScope.login == false}">
	
		<form method="post" action="/login.do">
			<label for="mem_id">아이디 : </label><input type="text"  name="mem_id" id="mem_id" placeholder="아이디를 입력해주세요."><br>
			<label for="mem_pw">암호 : </label><input type="password" name="mem_pw" id="mem_pw"><br> 
			<p>
			<button type="submit">로그인</button>
			<a href="/member.do">회원가입</a>
			</p>
		</form>
	</c:if>
	</div>
	</body>
</html>