canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
mouseevent="empty";


color="blue";
width=2;
radius=8;

canvas.addEventListner("mousedown" , my_mousedown);
function my_mousedown (e) {
     
      
     radius=document.getElementById("radius_input").value;
     color=document.getElementById("color_input").value;
     width=document.getElementById("width_input").value;
mouseevent="mousedown"
      
}

canvas.addEventListner("mousemove" , my_mousemove);
function my_mousemove(e) {
mouseevent="mousemove";
     current_position_of_X = e.clientX - canvas.offsetLeft;
     current_position_of_Y = e.clientY - canvas.offsetTop;

     if(mouseevent == "mousedown"){
          ctx.beginPath();
          ctx.LineWidth=width;
          ctx.StrokeStyle=color;
          ctx.arc(current_position_of_X , current_position_of_Y , 0 , radius , 2*Math.PI);
          console.log("current x coordinates are " + current_position_of_X );
          console.log("current y coordinates are " + current_position_of_Y );
          moveTo(last_position_of_X , last_position_of_Y);
          console.log("last x coordinates are " +  last_position_of_X);
          console.log("last y coordinates are" + last_position_of_Y);
          LineTo(current_position_of_X , current_position_of_Y);
          ctx.Stroke();
     }
     last_position_of_X=current_position_of_X;
     last_position_of_Y=current_position_of_Y;
    
     mouseevent="mousemove";
}



     

canvas.addEventListner("mouseup" , my_mouseup);
function my_mouseup(e){
     mouseevent="mouseup";
     console.log("mouseup");

}
 
canvas.addEventListner("mouseleave" , my_mouseleave);
function my_mouseleave (e) {
     mouseevent="mouseleave";
     console.log("mouseleave");
}