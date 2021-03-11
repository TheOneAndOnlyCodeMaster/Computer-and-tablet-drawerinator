canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
width=screen.width;
new_width=screen.width - 70;
new_height=screen.height - 300;
var mouseEvent ="";

if(width>=992){
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
console.log("mousedown")
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_mouse_y = e.clientY - canvas.offsetTop;
    console.log("current position of X ="+current_pos_mouse_x);
    console.log("current position of Y ="+current_pos_mouse_y);

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=3;
        ctx.moveTo(last_pos_of_mouse_X, last_pos_of_mouse_Y);
        ctx.lineTo(current_pos_mouse_x, current_pos_mouse_y);
        ctx.stroke();
    }
    last_pos_of_mouse_X = current_pos_mouse_x;
    last_pos_of_mouse_Y = current_pos_mouse_y;
}
}
else if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e)
    {
        last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){
    current_pos_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_pos_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_pos_touch_x, current_pos_touch_y);
    ctx.stroke();
    last_position_of_touch_y = current_pos_touch_y;
    last_position_of_touch_x = current_pos_touch_x;
}
