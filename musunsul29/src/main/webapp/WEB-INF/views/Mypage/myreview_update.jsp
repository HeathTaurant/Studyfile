<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
	
	//ajax 버튼 쿨릭 시 동작이 되게 
	$("#btn_search").click(function(){
		  $.ajax({
				url:"/myreview.do",
				
				dataType:"json",
				success:function(r){
			      let list = $("#review");
				 console.log(r)
			      
			      if(r.code == 200){
					 r.message;
					 let arr = r.result;
					 console.log(arr);
				     for(let i = 0; i < arr.length; i++){
				    	
				         
				    }
					}else{
						r.message;
					}
				}
			});
	});
});





</script>

<style type="text/css">

ul{
border: 1px solid black;
width: 300px;

}

.review_img{
	width:300px;
	height:150px;
	
}

</style>


</head>
<body>

<h1>내 리뷰 관리</h1><hr>




 
 <c:forEach var="item" items="${list}" >
 <ul class="review" id="review"> 
        <li class="review_img"><img src=" ${item.re_image }"/>  </li><br>
        <li class="re_text" id="mem_nickname" >닉네임:${item.mem_nickname }</li>  
         <li class="re_text" id="re_date" >작성일: ${item.re_date }</li> 
         <li class="re_text2" id="re_star">별점: ${item.re_star}점</li>
        <li class="re_text3" id="re">리뷰 내용:
        <div class="re_tmi" id="re_tmi"> ${item.re_tmi}</div>
           </li>
        </ul>
 </c:forEach>









</body>
</html>