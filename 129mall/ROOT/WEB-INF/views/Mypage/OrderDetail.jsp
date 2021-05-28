<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="../../../resources/Css/Mypage/mypage.css"/>
<link rel="stylesheet" type="text/css" href="../../../resources/Css/Main/Side/Main.css">
</head>
<body>

  <div class="Main container">
   		<div>
  		<jsp:include page="../Main/Header_empty.jsp" flush="false" />
		</div>


		<div class="Leftaside">
			<jsp:include page="../Main/Leftaside.jsp" flush="false" />

		</div>
   <div class="Section">
    <h1>주문내역</h1>
	
	<table>
      <tbody align="center" >
      <tr>
        <td>
          <form method="post" action="">
            <input type="submit" value="1주일">
          </form>
        </td>
        
        <td>
          <form method="post" action="">
            <input type="submit" value="1개월">
          </form>
        </td>
        
        <td>
          <form method="post" action="">
            <input type="submit" value="3개월">
          </form>
        </td>
        
        <td><input type="date">--<input type="date"></td>
        <td>
          <form method="post" action="">
            <input type="submit" value="조회">
          </form>
        </td>
        
      </tr>
      </tbody>
     </table>


	<table border="">
		<tbody align=center>
			<tr>
			     <td>주문번호 </td>
			
				<td colspan=2 class="fixed">주문상품명</td>
				<td>수량</td>
				<td>옵션</td>
				<td>주문금액</td>
				<td>배송비</td>
				<td>예상적립금</td>
				<td>주문금액합계</td>
				<td>배송상태</td>
			</tr>
			<tr>
			     <td>${orderDetail.it_id }</td>
			    
				<td colspan=2 class="fixed">${orderDetail.it_name}</td>
				<td>${orderDetail.it_sellcount }</td>
				<td>${orderDetail.it_size}<br>${orderDetail.it_color}<br> </td>
				<td>${orderDetail.it_price}</td>
				<td>배송비</td>
				<td>${orderDetail.it_point}</td>
				<td>${orderDetail.it_price+2500}</td>
				<td>배송중</td>
			</tr>
			
			
		</tbody>
	</table>
	<hr><br><br>
	<h3>배송지 정보</h3>
    ${orderDetail.order_name}<br>
     ${orderDetail.order_phone}<br>
      ${orderDetail.zipcode}<br>
       ${orderDetail.jibunAddress}<br>
        ${orderDetail.namujiAddress}<br>
       
    
   
  </div>
    <div class="Rightaside">
			<jsp:include page="../Main/Rightaside.jsp" flush="false" />
		</div>

		<div class="Footer">
			<jsp:include page="../Main/Footer.jsp" flush="false" />
		</div>
    
   </div>


</body>
</html>