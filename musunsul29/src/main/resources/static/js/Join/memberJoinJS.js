

function joinForm_check(){
    var mem_id = document.getElementById("mem_id");
    var mem_pw = document.getElementById("mem_pw");
    var mem_pw_chk = document.getElementById("mem_pw_chk");
    var mem_name = document.getElementById("mem_name");
    var birth_day = document.getElementById("mem_birthday");
    var phone_num2 = document.getElementById("phone_num2");
    var phone_num3 = document.getElementById("phone_num3");
    var mem_email = document.getElementById("mem_email");
    var mem_nickname = document.getElementById("mem_nickname");
     var mem_age = document.getElementById("mem_age");
    var idDuplication = document.getElementById("idDuplication");
    
    if(idDuplication.value != "idCheck"){
    	alert("아이디 중복체크를 해주세요");
    	return false;
    }
    if(!mem_id.value){
        alert("아이디를 입력하세요");
        mem_id.focus();
        return false;
    }

    if(!mem_pw.value){
        alert("비밀번호를 입력하세요");
        mem_pw.focus();
        return false;
    }

    if(!mem_pw_chk.value){
        alert("비밀번호확인을 입력하세요");
        mem_pw_chk.focus();
        return false;
    }

    if(mem_pw.value != mem_pw_chk.value){
        alert("비밀번호가 일치하지 않습니다");
        mem_pw_chk.focus();
        return false;
    }
    
    if(!mem_name.value){
        alert("이름을 입력하세요");
        mem_name.focus();
        return false;
    }
    
    
   
   
    
    if(!mem_num2.value || !mem_num3.value){
        alert("핸드폰번호를 입력하세요");
        mem_num2.focus();
        return false;
    }
    if(!mem_email.value){
        alert("이메일을 입력하세요");
        mem_email.focus();
        return false;
    }

    if(!chk_All.checked){
        alert("약관동의를 입력하세요");
        mem_email.focus();
        return false;
    }

        
    var pw = mem_pw.value;
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(pw.length < 8 || pw.length > 16){
    alert("8자리 ~ 16자리 이내로 입력해주세요.");
    mem_pw.focus();
    return false;
    }else if(pw.search(/\s/) != -1){
    alert("비밀번호는 공백 없이 입력해주세요.");
    mem_pw.focus();
    return false;
    }else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
    alert("영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
    mem_pw.focus();
    return false;
    }else {
        console.log("통과");	 
    }

    joinForm.submit(); //form 식별을 위한 name 
}






//다시 아이디 창이 새로운 아이디를 입력했을때 다시 중복체크
function inputIdChk(){
	document.joinForm.idDuplication.value="idUncheck";
}
    
    