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