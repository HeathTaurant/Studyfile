<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link rel="stylesheet" type="text/css" href='../css/Member/register.css'>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>




<script type="text/javascript">
    $(function() {
      $('#member_password').keyup(function () {
        if (($('#member_password_chk').val() == '') && ($('#member_password').val() == '')) {
          $('#samechk').html('');
        } else {
          if ($('#member_password').val() != $('#member_password_chk').val()) {
            $('#samechk').html('비밀번호 일치하지 않음');
            $('#samechk').attr('color', 'red');
          } else {
            $('#samechk').html('비밀번호 일치함');
            $('#samechk').attr('color', 'black');
          }
        }
        var pw = $('#member_password').val();
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        if (pw.length < 8 || pw.length > 16) {
          $('#chkpw').html(' 8자리 ~ 16자리 이내로 입력해주세요.');
          $('#chkpw').attr('color', 'red');
        } else if (pw.search(/\s/) != -1) {
          $('#chkpw').html(' 비밀번호는 공백 없이 입력해주세요.');
          $('#chkpw').attr('color', 'red');
        } else if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
          $('#chkpw').html(' 영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.');
        } else {
          $('#chkpw').html('');
        }
      });

      $('#member_password_chk').keyup(function () {
        if (($('#member_password_chk').val() == '') && ($('#member_password').val() == '')) {
          $('#samechk').html('');
        }
        if ($('#member_password').val() != $('#member_password_chk').val()) {
          $('#samechk').html('비밀번호 일치하지 않음');
          $('#samechk').attr('color', 'red');
        } else {
          $('#samechk').html('비밀번호 일치함');
          $('#samechk').attr('color', 'black');
        }
      });

      $('#member_email').keyup(function () {
        var member_email = $('#member_email').val();
        var regExp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

        if ($('#member_email').val() == '') {
          $('#emailchk').html('');
        }
        if (member_email.match(regExp) != null) {
          $('#emailchk').html('');
        } else {
          $('#emailchk').html(' 올바른 형식이 아닙니다.');
          $('#emailchk').attr('color', 'red');
        }
      });
    
 // 아이디 유효성 검사(1 = 중복 / 0 != 중복)
	$("#mem_id").blur(function() {
		
		// id = "id_reg" / name = "userId"
		
		var mem_id = $('#mem_id').val();
		var data = {
			mem_id : mem_id
		};
		
		console.log(mem_id);
		$.ajax({
			url :"member/idCheck",
			data: data,
			type : 'get',
			success : function(data) {
				console.log("1 = 중복o / 0 = 중복x : "+ data);							
				
				if (data == 1) {
						// 1 : 아이디가 중복되는 문구
						$("#id_check").text("사용중인 아이디입니다");
						$("#id_check").css("color", "red");
						
				} else {
					console.log(mem_id.length);
						if(mem_id == ""){
							
							$('#id_check').text('아이디를 입력해주세요 :)');
							$('#id_check').css('color', 'blue');
						} else if(mem_id.length < 4 || mem_id.length > 12 ) {
							$('#id_check').text("아이디는 소문자와 숫자 4~12자리만 가능합니다 :) :)");
							$('#id_check').css('color', 'red');
						}else if(data == 0 ){
							// 0 : 아이디 길이 / 문자열 검사
							$("#id_check").text("사용 가능한 아이디");
							$("#id_check").css("color", "blue");
						}
				}
				}, error : function() {
						console.log("실패");
				}
			});
		});
    });
    
    
  </script>



<script>



function joinForm_check(){
    var member_id = document.getElementById("member_id");
    var member_password = document.getElementById("member_password");
    var member_password_chk = document.getElementById("member_password_chk");
    var member_name = document.getElementById("member_name");
   
    var member_birthday = document.getElementById("member_birthday");
    
    var member_nickname =document.getElementById("member_nickname");
    var member_age =document.getElementById("member_age");
    var member_num2 = document.getElementById("member_num2");
    var member_num3 = document.getElementById("member_num3");
    var member_email = document.getElementById("member_email");
   
    
    
    
    if(!member_id.value){
        alert("아이디를 입력하세요");
        member_id.focus();
        return false;
    }

    if(!member_password.value){
        alert("비밀번호를 입력하세요");
        member_password.focus();
        return false;
    }

    if(!member_password_chk.value){
        alert("비밀번호확인을 입력하세요");
        member_password_chk.focus();
        return false;
    }

    if(member_password.value != member_password_chk.value){
        alert("비밀번호가 일치하지 않습니다");
        member_password_chk.focus();
        return false;
    }
    
    if(!member_name.value){
        alert("이름을 입력하세요");
        member_name.focus();
        return false;
    }

    if(!member_age.value){
        alert("나이을 입력하세요");
        member_age.focus();
        return false;
    }

    if(!member_nickname.value){
        alert("닉네임을 입력하세요");
        member_nickname.focus();
        return false;
    }
    
    if(!member_birthday.value ){
        alert("생일을 입력하세요");
        memberBirth_year.focus();
        return false;
    }
    
    
    
    
   
    
    if(!member_num2.value || !member_num3.value){
        alert("핸드폰번호를 입력하세요");
        member_num2.focus();
        return false;
    }
    if(!member_email.value){
        alert("이메일을 입력하세요");
        member_email.focus();
        return false;
    }

   

        
    var pw = member_password.value;
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(pw.length < 8 || pw.length > 16){
    alert("8자리 ~ 16자리 이내로 입력해주세요.");
    member_password.focus();
    return false;
    }else if(pw.search(/\s/) != -1){
    alert("비밀번호는 공백 없이 입력해주세요.");
    member_password.focus();
    return false;
    }else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
    alert("영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
    member_password.focus();
    return false;
    }else {
        console.log("통과");	 
    }
    
    
    window.onload = function(){
  	   document.getElementById('btn').onclick =function(){
  		   document.getElementById('register').submit();
  	    return false;
  	   };
  };

   
}





</script>






<style type="text/css"></style>
</head>


        
        <body>
            <div id="con">
                <div id="login">
                <div id="login_form"><!--로그인 폼-->
                    <form name="register" id="register" action="registermember.do" method="post">
                    
                        <h3 class="login" style="letter-spacing:-1px;">Sign up to Web</h3>
            
                    
            
                    <hr>
            
                    <!-- <span>ID</span> -->
                    
                      <label>
                    <p style="text-align: left; font-size:12px; color:#666">userid</p>
                    <input type="text" placeholder="아이디" name="mem_id" id="mem_id" class="size">
                       
                    </label><!--아이디-->
                    
                    
                    <div class="" id="id_check"></div>
                    
                    
                    
                    <label>
                    <!-- <span>PW</span> -->
                    <p style="text-align: left; font-size:12px; color:#666">Password </p>
                    <input type="password" placeholder="비밀번호" name="mem_pw" id="member_password" class="size"><span id="txt">(영문 대소문자/숫자/특수문자 중 2가지
                    이상 조합, 8자~16자)</span>
                     <font id="chkpw"></font>
                    </label><!--비밀번호-->
            
            
            
                    <label>
                       
                        <p style="text-align: left; font-size:12px; color:#666"> </p>
                        <input type="password" name="mem_pw_check" placeholder="비밀번호 확인" id="member_password_chk" class="size">
                    	 <font id="samechk"></font>
                    </label> 
        
        
            
                    <label>
                        <!-- <span>phone</span> -->
                    <p style="text-align: left; font-size:12px; color:#666">Mobile Phone</p>
                         <select class="size num1">
                            <option value="1" selected>SKT</option>
                            <option value="2" selected>KT</option>
                            <option value="3" selected>LG</option>
                        </select>
                        <select class="size num1" name="phone_num1">
                            <option value="010" selected>010</option>
                    
                        </select>
                         
                        <input placeholder="전회번호" name="phone_num2" id="member_num2"  class="size num2" maxlength="4" >
                         <input placeholder="전회번호" name="phone_num3" id="member_num3" class="size num2" maxlength="4" >
                        
                     </label> <!--전화번호-->
            
            
                     <label>
                            <!-- <span>email</span> -->
                        <p style="text-align: left; font-size:12px; color:#666">E-mail</p>
                            <input type="text" placeholder="이메일" id="member_email" name="mem_email" class="size">
                    		<font id="emailchk"></font>
                    </label> <!--이메일-->  
        
                    <label>
                            <!-- <span>name</span> -->
                        <p style="text-align: left; font-size:12px; color:#666">username</p>
                            <input type="text" name="mem_name" id="member_name" placeholder="이름" class="size">
                    </label> <!--이름--> 
        
        
        
            <label>
                <!-- <span>PW</span> -->
            <p style="text-align: left; font-size:12px; color:#666">nickname</p>
                <input type="text" name="mem_nickname" id="member_nickname" placeholder="닉네임" class="size">
            </label> <!--닉네임--> 
        
        
            <label>
               
            <p style="text-align: left; font-size:12px; color:#666">성별</p>
               
                <select class="size" name="mem_sex">
                            <option value="남자" selected>남</option>
                            <option value="여자" selected>여</option>
                        </select>
            </label> <!--성별--> 
        
        
            <label>
                
            <p style="text-align: left; font-size:12px; color:#666">나이</p>
                <input type="text" name="mem_age" id="member_age" placeholder="나이" class="size">
            </label> <!--나이--> 
        
        
            <label>
               
            <p style="text-align: left; font-size:12px; color:#666">생년월일</p>
                <input type="date" id="" class="size" id="member_birthday" name="mem_birthday" placeholder="생년월일">
            </label> <!--생일--> 
        
              
            
                <br>
                    <p>
                        <!-- <input type="submit" value="Create Acoout" class="btn"> -->
                        <input type="submit" class="btn" value="회원가입" onclick="joinForm_check();" />
                    </p>
                </form>
               
            
                <hr>
                <p class="find">
                    <span><a href="member/login" >로그인 페이지로 이동</a></span>
                </p>
                </div>
                <div>
                </div>
    </body>

    

</html>