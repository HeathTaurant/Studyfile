<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href="../../../css/Mainlayout/Mainlayout2.css">
    <script src='#'></script>
    <style>
    a.survey_link1, a.survey_link2{
    text-decoration: none;
    }
    </style>
</head>
<body>
<div class="Mainlayout">

    <Header>
        <jsp:include page="../../../views/Mainlayout/Header.jsp" flush="false"/>
    </Header>
    
    
    
   



    <Section>
<div class="survey">
     <h2>원하시는 주류을 선택해주세요</h2><br><br>
    <a class="survey_link1" href="/question.do">전통주</a>
    <a class="survey_link2" href="test.do">맥주</a>
    
    </div>
    </Section>



    <Footer>
        <jsp:include page="../../../views/Mainlayout/Footer.jsp" flush="false"/>
    </Footer>

</div>
</body>
</html>