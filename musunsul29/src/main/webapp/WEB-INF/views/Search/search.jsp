<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

 <script>
        function noSpaceForm(obj) { // 공백사용못하게
            var str_space = /\s/;  // 공백체크
            if(str_space.exec(obj.value)) { //공백 체크
                alert("해당 항목에는 공백을 사용할수 없습니다.\n\n공백은 자동적으로 제거 됩니다.");
                obj.focus();
                obj.value = obj.value.replace(' ',''); // 공백제거
                return false;
            }
         // onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"
        }
        
        $(function(){
    		$("#search").keyup(function(){
        	
    			var search_et = $("#search").val();
				let data = {
					search_et : search_et
				};

    			$.ajax({
    				url:"search.do",
    				data:data,
    				dataType:"json",
    				success:function(r){
    					console.log(r.message);
    						let test = $(".test");
    					if(r.code == 200){
    						$(".test").empty();
    						var arr = r.result;
    						console.log(arr); 
    						for(i=0;i<arr.length;i++){
    							let item = text(arr[i]);
    							test.append(item);
    						} 
    					}else{
    						tag = r.message;
    					}
    					$("#result").html(tag);
    				}
    			});
    		});
        });
        
        //aptjerm
        function text(arr) {
        	let text = $("#text").clone().removeAttr('id'); //id remove
        	console.log(arr.et_kind);
        	text.find(".kind").html(arr.et_name);
        	
        	return text;
		}
        </script>

    <style>
        * {
            margin: 0;
            padding: 0;
        }


        ul {
            list-style-type: none;
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
            height: 300px;
            border:1px solid red;
            display: inline-block;
            box-sizing: border-box;
      
        }

		#text{
		display: none;
		}
   


        
    </style>


</head>
<body>

 <section class="search">
        

   
             <form action="/searchMain" method="post">
              
                    
              검색: <input type="text" name="search" id="search" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" placeholder="검색 할 술이름을 입력하세요 " />
                
              <input type="submit" value="검색">
                    </form>
        	<div class="text" id="text">
        		<div class="kind"></div>
        	</div>
        	<div class="test">
        	</div>
            
    
        <hr><br>
       
    
    
    </section>

</body>
</html>