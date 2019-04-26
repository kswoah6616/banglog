


 // var btnRed = document.getElementById('btnRed');

    // btnRed.addEventListener('click', function(e){

    // var cc = document.getElementById('changeColor');

    // if(cc.style.backgroundColor == 'red'){
    //     cc.style.backgroundColor='black';
    // }else{
    //     cc.style.backgroundColor='red';
    // }
    //})


window.onload = function(){

    

   

    // document.getElementById('btnRed').addEventListener('click', function(){
    //     alert('Hello world');
    // })
        var flag    = 'B'; 

    $('#btnRed').click(function(){
        

        var cc      = $('#changeColor');

        if(flag == 'B'){
            cc.css('background-color', 'red');
            flag = 'R';
        }else{
            cc.css('background-color', 'black');
            flag = 'B';
        }

    })


}