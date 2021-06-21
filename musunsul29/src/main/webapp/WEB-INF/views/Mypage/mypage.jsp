<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style>
        * {
            margin: 0;
            padding: 0;
        }

        


        ul {
            list-style-type: none;
        }

        a:link,
        a:visited {
            padding: 10px 0px;
            width: 150px;
            font-size: 20px;
            line-height: 20px;
            
            
            display: inline-block;
            text-decoration: none;
            color: black;
        }
      



        section{
            width: 1200px;
            border: 1px solid black;
            margin: 0 auto;
            
            padding:20px 0px;
        }
        article{
           
            margin: 20px auto;
            width:700px;
            height: 200px;
            border:1px solid red;
            display: inline-block;
            box-sizing: border-box;
      
        }


        aside{
            float: left;
            width: 200px;
            height: 500px;
            border: 1px solid black;
            flex: 1;
            background: white;
            padding: 24px;
            border-radius: 0 16px 16px 0;
            
        }
        
        
      /*   .img{
			width:300px;
			height:150px;
	
		}
 */

    
        
    </style>


</head>
<body>
 <section class="mypage">
        <h1>mypage</h1><hr><br><br>
        <aside>
            <ul>
                <li><a href="/member_change">내 정보 수정</a></li><br><br>
                <li><a href="/profile_update">프로필 관리</a></li><br><br>
                <li><a href="/myreview_update">내 리뷰 관리</a></li><br><br>
                <li><a href="/mylike_ethanol">내가 좋아요 한 술</a></li><br><br>
                <li><a href="/member_delete">회원 탈퇴</a></li><br>
            </ul>
        </aside>
        <article><h2>내 프로필 정보</h2><br>
            프로필: <img src=""><br>
            아이디: ${sessionScope.mem_id}<br>                                           
            이름:   ${sessionScope.mem_name}<br> 
            닉네임:  ${sessionScope.mem_nickname}<br> 
            이메일:  ${sessionScope.mem_email}<br> 
        </article>
        
        
        
        <c:forEach var="et_item" items="${et_list}">
        <article><h2>내가 좋아요 한 술</h2><br>

	<ul class="mylike_et" id="mylike_et"> 
	
	<li class="img"><img src="${mylike_et.et_image}">${et_item.et_image} </li>
	<li class="et_text" id="et_name"> ${et_item.et_name} </li>
	<li class="et_text" id="et_country"> ${et_item.et_country} </li>
	<li class="et_text" id="et_count "> ${et_item.et_count} </li>
	
		
	</ul>


        </article>

     </c:forEach>
     
     
     
     <c:forEach var="item" items="${list}" >
        <article><h2>내가 쓴 리뷰</h2><br>
 		<ul class="review" id="review"> 
        <li class="img"><img src=" ${item.re_image }"/>  </li><br>
        <li class="re_text" id="mem_nickname" >닉네임:${item.mem_nickname }</li>  
         <li class="re_text" id="re_date" >작성일: ${item.re_date }</li> 
         <li class="re_text2" id="re_star">별점: ${item.re_star}점</li>
        <li class="re_text3" id="re">리뷰 내용:
        <div class="re_tmi" id="re_tmi"> ${item.re_tmi}</div>
           </li>
        </ul>
        </article>
 	</c:forEach>
     
        
        
        
     
    
    
    </section>



</body>
</html>