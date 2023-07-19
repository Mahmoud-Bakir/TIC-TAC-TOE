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
    let x=[10,11,12,13,14,15,16,17,18]
    let y=[10,11,12,13,14,15,16,17,18]
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
                    x[0]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")
                }
                else{
                    col1_1.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")
                }
            })
            col1_2.addEventListener("click",function(){
                if(count%2==0){
                    col1_2.setAttribute("class","col_X")
                    count ++
                    x[1]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col1_2.setAttribute("class","col_Y")
                    count++
                    y[1]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col1_3.addEventListener("click",function(){
                if(count%2==0){
                    col1_3.setAttribute("class","col_X")
                    count ++
                    x[2]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col1_3.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col2_1.addEventListener("click",function(){
                if(count%2==0){
                    col2_1.setAttribute("class","col_X")
                    count ++
                    x[3]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col2_1.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col2_2.addEventListener("click",function(){
                if(count%2==0){
                    col2_2.setAttribute("class","col_X")
                    count ++
                    x[4]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col2_2.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col2_3.addEventListener("click",function(){
                if(count%2==0){
                    col2_3.setAttribute("class","col_X")
                    count ++
                    x[5]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col2_3.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col3_1.addEventListener("click",function(){
                if(count%2==0){
                    col3_1.setAttribute("class","col_X")
                    count ++
                    x[6]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col3_1.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col3_2.addEventListener("click",function(){
                if(count%2==0){
                    col3_2.setAttribute("class","col_X")
                    count ++
                    x[7]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col3_2.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
            col3_3.addEventListener("click",function(){
                if(count%2==0){
                    col3_3.setAttribute("class","col_X")
                    count ++
                    x[8]=0;
                    if((x[0]== x[1] && x[1]==x[2])||(x[0]== x[3] && x[3]==x[6])||(x[6]== x[7] && x[7]==x[8])||(x[2]== x[5] && x[5]==x[8])||(x[3]== x[4] && x[4]==x[5])||(x[1]== x[4] && x[4]==x[7])||(x[0]== x[4] && x[4]==x[5])||(x[2]== x[4] && x[4]==x[6]))
                    console.log("HOOOHOOHOH")

                }
                else{
                    col3_3.setAttribute("class","col_Y")
                    count++
                    y[0]=1
                    if((y[0]== y[1] && y[1]==y[2])||(y[0]== y[3] && y[3]==y[6])||(y[6]== y[7] && y[7]==y[8])||(y[2]== y[5] && y[5]==y[8])||(y[3]== y[4] && y[4]==y[5])||(y[1]== y[4] && y[4]==y[7])||(y[0]== y[4] && y[4]==y[5])||(y[2]== y[4] && y[4]==y[6]))
                    console.log("HOOOHOOHOH")

                }
            })
        }
    })
    
}


