<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
<link rel="stylesheet" href="css/DetailPage/DetailPage.css">
<title>머선 술이고</title>
</head>
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=592b029c4b398b457e9ba2a82e002254&libraries=services">                                                                                                                                                                                                                                                 
</script>
<script>                                                                                                                                                                    
window.onload = function () {                                                                                                                                               
                                                                                                                                                                            
  var container = document.getElementById('map');                                                                                                                           
  var options = {                                                                                                                                                           
    center: new kakao.maps.LatLng(35.98349, 128.99872),                                                                                                                     
    level: 3                                                                                                                                                                
  };                                                                                                                                                                        
                                                                                                                                                                            
  var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴                                                                                                         
  //주소->좌표 변환 객체 생성                                                                                                                                                         
  var geocoder = new kakao.maps.services.Geocoder();                                                                                                                        
  //좌표 검색                                                                                                                                                                   
  geocoder.addressSearch('경북 영천시 고경면 고도리 494-3', function (result, status) {                                                                                                
    if (status == daum.maps.services.Status.OK) {                                                                                                                           
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);                                                                                                         
                                                                                                                                                                            
      map.setCenter(coords);                                                                                                                                                
                                                                                                                                                                            
                                                                                                                                                                            
      //커스텀 오버레이                                                                                                                                                            
      var content1 = "<div class='customoverlay' id='info'><a href='https://map.kakao.com/link/to/곰표밀맥주," +                                                                 
        result[0].y + "," + result[0].x +                                                                                                                                   
        "' target='_blank'><span class='title'>곰표 밀맥주<br>길찾기</span></a></div>";                                                                                             
      console.log(content1);                                                                                                                                                
      var customOverlay = new kakao.maps.CustomOverlay({                                                                                                                    
        position: coords,                                                                                                                                                   
        content: content1,                                                                                                                                                  
        yAnchor: 0.3                                                                                                                                                        
      });                                                                                                                                                                   
      customOverlay.setMap(map);                                                                                                                                            
    }                                                                                                                                                                       
  });                                                                                                                                                                       
};                                                                                                                                                                          
	function check() {                                                                                                                                                      
		if (fr.reviewText.value == "") {                                                                                                                                    
			alert("값을 입력해 주세요.");                                                                                                                                           
			fr.reviewText.focus();                                                                                                                                          
			return false;                                                                                                                                                   
		} else                                                                                                                                                              
			return true;                                                                                                                                                    
	}                                                                                                                                                                       
</script>
<body>
	<div class="contents_wrapper">
		<div class="main_container">
			<div class="wrapper">
				<div class="name">
					<p class="brand_name">${list.et_kind}</p>
					<p class="brand_name_line"></p>
				</div>
				<div class="wineitem_wrapper">
					<div class="leftitem">
						<div class="wine_img">
							<img src="/img/wine.png" />
						</div>
					</div>
					<div class="rightitem">
						<div class="wine_name">${list.et_name}</div>
						<div class="wineline2"></div>
						<div class="type">
							생 산 지: <span class="type1">${list.et_country}</span>
						</div>
						</br>
						<div class="type">
							당 도: <span class="type1">${list.et_sweet}</span>
						</div>
						</br>
						<div class="type">
							바디감: <span class="type3">${list.et_body}</span>
						</div>
						</br>
						<div class="type">
							탄 산: <span class="type3">${list.et_co2}</span>
						</div>
						</br>
						<div class="type">
							도 수 : <span class="type3">${list.et_alcohol_proof}</span>
						</div>
						</br>
						<div class="description">${list.et_tmi}</div>
						<div class="description_line"></div>
						<div class="our_review">
							<div class="our_review_title">
								<b>운영자의 느낌</b>
							</div>
							<p class="ourreview">${list.et_jmt}</p>
						</div>
					</div>
				</div>
		
				<!-- 지도 -->
				<div id="popup" title="카카오맵" align="center">
					<div id="map"></div>
					<div class="address">
						<div class="address1">찾아 오시는길</div>
						<div class="type">
							주 소: <span class="type3">경북 영천시 고경면 고도길 38</span>
						</div>
						<div class="type">
							번 호 : <span>054-335-3174</span>
						</div>
					</div>
				</div>
				<!-- 지도 end -->			
		
				<!-- review -->
				<div>
					<div class="div1">
						<c:if test="${login == true}">
							<div class="div2" style="margin-top: 50px;">
								<form action="/DetailPage" method="post" name="fr"
									onsubmit="return check()">
									<div class="div3">
										<select name="re_star">
											<option value="1">⭐</option>
											<option value="2">⭐⭐</option>
											<option value="3">⭐⭐⭐</option>
											<option value="4">⭐⭐⭐⭐</option>
											<option value="5">⭐⭐⭐⭐⭐</option>
										</select>
			
										<div class="textarea-div">
											<textarea rows="6" cols="" style="width: 100%; margin-top: 3px;"
												name="re_tmi" placeholder="리뷰를 입력해보세요!"></textarea>
										</div>
										
										<input type="hidden" name="et_pk" value="${et_pk}"/>
										<input type="hidden" name="mem_id" value="${mem_id}"/>
										<input type="hidden" name="mem_nickname" value="${mem_nickname}"/>
			
										<input class="btn btn-default btn-primary" type="submit"
											value="리뷰등록" style="width: 100%; margin-top: 10px;"> <input
											type="hidden" name="Beer" value="Beer">
									</div>
								</form>
							</div>
						</c:if>
						<c:if test="${login == false}">
							<h3>
								리뷰 작성을 원하시면 <a href='/member/login'>로그인</a>을 해주세요.
							</h3>
						</c:if>
						<div class="tablecontainer" style="margin-top: 50px;">
							<table class="table1">
								<thead>
									<tr style="margin-top: 20px;">
										<td width="200">rating</td>
										<td width="200">user</td>
										<td width="200">review</td>
										<td width="200">date</td>
									</tr>
								</thead>
								<tbody>
									<c:forEach var="item" items="${reviewListAll}">
										<tr style="margin-top: 10px;">
											<c:choose>
												<c:when test="${item.re_star <= 1}">
													<td
														style="color: red; text-align: left; padding-left: 15px; width: 100px;">⭐</td>
												</c:when>
												<c:when test="${item.re_star <= 2}">
													<td
														style="color: red; text-align: left; padding-left: 15px; width: 100px;">⭐⭐</td>
												</c:when>
												<c:when test="${item.re_star <= 3}">
													<td
														style="color: red; text-align: left; padding-left: 15px; width: 100px;">⭐⭐⭐</td>
												</c:when>
												<c:when test="${item.re_star <= 4}">
													<td
														style="color: red; text-align: left; padding-left: 15px; width: 100px;">⭐⭐⭐⭐</td>
												</c:when>
												<c:when test="${item.re_star <= 5}">
													<td
														style="color: red; text-align: left; padding-left: 15px; width: 100px;">⭐⭐⭐⭐⭐</td>
												</c:when>
											</c:choose>
											<td>${item.mem_id}</td>
											<td style="width: 460px; text-align: left;">${item.re_tmi}</td>
											<%-- <td><fmt:formatDate value="${item.re_date}"
													pattern="yyyy.MM.dd" /></td> --%>
													<td>${item.re_date}</td>
										</tr>
								</tbody>
								</c:forEach>
							</table>
						</div>
					</div>
				</div>
				<!-- review end -->		
			</div>
		</div>
	</div>
</body>
</html>
