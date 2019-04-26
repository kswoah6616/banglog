window.onload = function(){
  
    //자바 스크립트로 사용한 경우
    // document.getElementById('btn').addEventListener('click', function(){
       
    //     var bc = document.getElementById('motion');
    //    if(bc.style.backgroundColor == 'red'){
    //     bc.style.backgroundColor='black';
    //    }else{
    //     bc.style.backgroundColor='red'
    //    }
       
    var flag = 'A';
    $('#btn').click(function(){
        var bc = $('#motion');

        if(flag == 'A'){
            bc.css('background-color','red');
            flag = 'R';
        }else{
            bc.css('background-color','black');
            flag = 'A';
        }

    })




        // document.getElementById('motion').style.backgroundColor='red';
    

    }