<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../../css/Survey2/question_style.css" />
    <script src="../../css/Survey2/question_script.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <form class="container" action="test.html" method="get">
      <!-- 단맛 -->
      <input type="radio" name="sweet" value="0" id="sweet0" checked />
      <input type="radio" name="sweet" value="1" id="sweet1" />
      <input type="radio" name="sweet" value="2" id="sweet2" />
      <input type="radio" name="sweet" value="3" id="sweet3" />
      <input type="radio" name="sweet" value="4" id="sweet4" />
      <input type="radio" name="sweet" value="5" id="sweet5" />
      <!-- 신맛 -->
      <input type="radio" name="sour" value="0" id="sour0" checked />
      <input type="radio" name="sour" value="1" id="sour1" />
      <input type="radio" name="sour" value="2" id="sour2" />
      <input type="radio" name="sour" value="3" id="sourt3" />
      <input type="radio" name="sour" value="4" id="sour4" />
      <input type="radio" name="sour" value="5" id="sour5" />
      <!-- 청량감 -->
      <input type="radio" name="refresh" value="0" id="refresh0" checked />
      <input type="radio" name="refresh" value="1" id="refresh1" />
      <input type="radio" name="refresh" value="2" id="refresh2" />
      <input type="radio" name="refresh" value="3" id="refresh3" />
      <input type="radio" name="refresh" value="4" id="refresh4" />
      <input type="radio" name="refresh" value="5" id="refresh5" />
      <!-- 바디감 -->
      <input type="radio" name="body" value="0" id="body0" checked />
      <input type="radio" name="body" value="1" id="body1" />
      <input type="radio" name="body" value="2" id="body2" />
      <input type="radio" name="body" value="3" id="body3" />
      <input type="radio" name="body" value="4" id="body4" />
      <input type="radio" name="body" value="5" id="body5" />
      <!-- 향 -->
      <input type="radio" name="scent" value="0" id="scent0" checked />
      <input type="radio" name="scent" value="1" id="scent1" />
      <input type="radio" name="scent" value="2" id="scent2" />
      <input type="radio" name="scent" value="3" id="scent3" />
      <input type="radio" name="scent" value="4" id="scent4" />
      <input type="radio" name="scent" value="5" id="scent5" />
      <!-- 알콜도수 -->
      <input type="radio" name="alc" value="0" id="alc0" checked />
      <input type="radio" name="alc" value="1" id="alc1" />
      <input type="radio" name="alc" value="2" id="alc2" />
      <input type="radio" name="alc" value="3" id="alc3" />
      <input type="radio" name="alc" value="4" id="alc4" />
      <input type="radio" name="alc" value="5" id="alc5" />
      <input type="radio" name="alc" value="6" id="alc6" />
      <input type="radio" name="alc" value="7" id="alc7" />
      <input type="radio" name="alc" value="8" id="alc8" />
      <input type="radio" name="alc" value="9" id="alc9" />
      <input type="radio" name="alc" value="10" id="alc10" />

      <div class="question__box">
        <!-- 단맛 -->
        <div class="box sweet">
          <img class="list__img" src="../../css/Survey2/img/question/taste_sweet.png" alt="" />

          <div class="box_choice sweet">
            <label class="zero" for="sweet0"> </label>
            <label class="one" for="sweet1"> </label>
            <label class="two" for="sweet2"> </label>
            <label class="three" for="sweet3"> </label>
            <label class="four" for="sweet4"> </label>
            <label class="five" for="sweet5"> </label>
          </div>
          <ul class="box_number">
            <li class="zero">0</li>
            <li class="one">1</li>
            <li class="two">2</li>
            <li class="three">3</li>
            <li class="four">4</li>
            <li class="five">5</li>
          </ul>

          <div class="next__btn">다음으로</div>
        </div>
        <!-- 신맛 -->
        <div class="box sour">
          <img class="list__img" src="../../css/Survey2/img/question/taste_sour.png" alt="" />

          <div class="box_choice sour">
            <label class="zero" for="sour0"> </label>
            <label class="one" for="sour1"> </label>
            <label class="two" for="sour2"> </label>
            <label class="three" for="sour3"> </label>
            <label class="four" for="sour4"> </label>
            <label class="five" for="sour5"> </label>
          </div>
          <ul class="box_number">
            <li class="zero">0</li>
            <li class="one">1</li>
            <li class="two">2</li>
            <li class="three">3</li>
            <li class="four">4</li>
            <li class="five">5</li>
          </ul>

          <div class="next__btn">다음으로</div>
        </div>
        <!-- 청량감 -->
        <div class="box refresh">
          <img class="list__img" src="../../css/Survey2/img/question/taste_refresh.png" alt="" />

          <div class="box_choice refresh">
            <label class="zero" for="refresh0"> </label>
            <label class="one" for="refresh1"> </label>
            <label class="two" for="refresh2"> </label>
            <label class="three" for="refresh3"> </label>
            <label class="four" for="refresh4"> </label>
            <label class="five" for="refresh5"> </label>
          </div>
          <ul class="box_number">
            <li class="zero">0</li>
            <li class="one">1</li>
            <li class="two">2</li>
            <li class="three">3</li>
            <li class="four">4</li>
            <li class="five">5</li>
          </ul>

          <div class="next__btn">다음으로</div>
        </div>

        <!-- 바디감 -->
        <div class="box body">
          <img class="list__img" src="../../css/Survey2/img/question/taste_body.png" alt="" />

          <div class="box_choice body">
            <label class="zero" for="body0"> </label>
            <label class="one" for="body1"> </label>
            <label class="two" for="body2"> </label>
            <label class="three" for="body3"> </label>
            <label class="four" for="body4"> </label>
            <label class="five" for="body5"> </label>
          </div>
          <ul class="box_number">
            <li class="zero">0</li>
            <li class="one">1</li>
            <li class="two">2</li>
            <li class="three">3</li>
            <li class="four">4</li>
            <li class="five">5</li>
          </ul>

          <div class="next__btn">다음으로</div>
        </div>

        <!-- 향 -->
        <div class="box scent">
          <img class="list__img" src="../../css/Survey2/img/question/taste_scent.png" alt="" />

          <div class="box_choice scent">
            <label class="zero" for="scent0"> </label>
            <label class="one" for="scent1"> </label>
            <label class="two" for="scent2"> </label>
            <label class="three" for="scent3"> </label>
            <label class="four" for="scent4"> </label>
            <label class="five" for="scent5"> </label>
          </div>
          <ul class="box_number">
            <li class="zero">0</li>
            <li class="one">1</li>
            <li class="two">2</li>
            <li class="three">3</li>
            <li class="four">4</li>
            <li class="five">5</li>
          </ul>

          <div class="next__btn">다음으로</div>
        </div>

        <!-- 알콜도수 -->
        <div class="box alc">
          <img class="list__img" src="../../css/Survey2/img/question/taste_alc.png" alt="" />
          <!-- <h3 class="question_head">
            원하시는 <span class="point">알콜도수</span>의 정도를<br />
            선택하세요.
          </h3> -->

          <div class="box_choice_alc">
            <label class="zero" for="alc0"> </label>
            <label class="one" for="alc1"> </label>
            <label class="two" for="alc2"> </label>
            <label class="three" for="alc3"> </label>
            <label class="four" for="alc4"> </label>
            <label class="five" for="alc5"> </label>
            <label class="six" for="alc6"> </label>
            <label class="seven" for="alc7"> </label>
            <label class="eight" for="alc8"> </label>
            <label class="nine" for="alc9"> </label>
            <label class="ten" for="alc10"> </label>
          </div>
          <ul class="box_number">
            <li class="zero">0</li>
            <li class="one">5</li>
            <li class="two">10</li>
            <li class="three">15</li>
            <li class="four">20</li>
            <li class="five">25</li>
            <li class="six">30</li>
            <li class="seven">35</li>
            <li class="eight">40</li>
            <li class="nine">45</li>
            <li class="ten">50</li>
          </ul>
          <input class="next__btn" type="submit" value="결과 확인하기" />
          <!-- <div ></div> -->
        </div>
      </div>
    </form>
  </body>
</html>
