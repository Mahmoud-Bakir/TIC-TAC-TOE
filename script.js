window.onload=function(){
    let col1_1 = document.getElementById("col1_1");
    let col1_2 = document.getElementById("col1_2");
    let col1_3 = document.getElementById("col1_3");
    let col2_1 = document.getElementById("col2_1");
    let col2_2 = document.getElementById("col2_2");
    let col2_3 = document.getElementById("col2_3");
    let col3_1 = document.getElementById("col3_1");
    let col3_2 = document.getElementById("col3_2");
    let col3_3 = document.getElementById("col3_3");
    let btn1=document.getElementById("btn1");
    let btn2=document.getElementById("btn2");
    let first=false;
    let second=false;
    console.log(col1_1);
    col1_1.setAttribute("class","col_X");
    col1_2.setAttribute("class","col_Y");

    btn1.addEventListener("click",function(){
        let player_1=document.getElementById("player_1");
        if(player_1.value.trim() !=""){
           console.log(player_1.value);
           first=true;
           if(first==true && second ==true){
            ;
        }}
      })
    btn2.addEventListener("click",function(){
        let player_2=document.getElementById("player_2");
        if(player_2.value.trim() !=""){
            console.log(player_2.value);
            second=true;
            if(first==true && second ==true){
                console.log("Hello");
            }}
           })

    if(first==true && second ==true){
        console.log("Hello");
    }
}
