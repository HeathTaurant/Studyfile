function email_change(){

    if(document.join.email.options[document.join.email.selectedIndex].value == '0'){
    
     document.join.email2.disabled = true;
    
     document.join.email2.value = "";
    
    }
    
    if(document.join.email.options[document.join.email.selectedIndex].value == '9'){
    
     document.join.email2.disabled = false;
    
     document.join.email2.value = "";
    
     document.join.email2.focus();
    
    } else{
    
     document.join.email2.disabled = true;
    
     document.join.email2.value = document.join.email.options[document.join.email.selectedIndex].value;
    
    }
    
    }