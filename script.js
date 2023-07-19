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
    let play=document.getElementById("play");
    let first=false;
    let second=false;
    console.log(col1_1);
    let count=2;

    
    btn1.addEventListener("click",function(){
        let player_1=document.getElementById("player_1");
        if(player_1.value.trim() !=""){
           console.log(player_1.value);
           first=true;
          }
      })
    btn2.addEventListener("click",function(){
        let player_2=document.getElementById("player_2");
        if(player_2.value.trim() !=""){
            console.log(player_2.value);
            second=true;
            }
           })

    play.addEventListener("click",function(){
        if(first==true && second==true){
            col1_1.addEventListener("click",function(){
                if(count%2==0){
                    col1_1.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col1_1.setAttribute("class","col_Y")
                    count++
                }
            })
            col1_2.addEventListener("click",function(){
                if(count%2==0){
                    col1_2.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col1_2.setAttribute("class","col_Y")
                    count++
                }
            })
            col1_3.addEventListener("click",function(){
                if(count%2==0){
                    col1_3.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col1_3.setAttribute("class","col_Y")
                    count++
                }
            })
            col2_1.addEventListener("click",function(){
                if(count%2==0){
                    col2_1.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col2_1.setAttribute("class","col_Y")
                    count++
                }
            })
            col2_2.addEventListener("click",function(){
                if(count%2==0){
                    col2_2.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col2_2.setAttribute("class","col_Y")
                    count++
                }
            })
            col2_3.addEventListener("click",function(){
                if(count%2==0){
                    col2_3.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col2_3.setAttribute("class","col_Y")
                    count++
                }
            })
            col3_1.addEventListener("click",function(){
                if(count%2==0){
                    col3_1.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col3_1.setAttribute("class","col_Y")
                    count++
                }
            })
            col3_2.addEventListener("click",function(){
                if(count%2==0){
                    col3_2.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col3_2.setAttribute("class","col_Y")
                    count++
                }
            })
            col3_3.addEventListener("click",function(){
                if(count%2==0){
                    col3_3.setAttribute("class","col_X")
                    count ++
                }
                else{
                    col3_3.setAttribute("class","col_Y")
                    count++
                }
            })
        }
    })
    
}


