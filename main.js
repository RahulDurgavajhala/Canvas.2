var width= screen.width
new_width=screen.width-70
new_height=screen.height-300
if(width<992){
    document.getElementById("myCanvas").width=screen.width
    document.getElementById("myCanvas").height=screen.height
    document.body.style.overflow="hidden"
}
canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
mouse_event=""
var last_position_of_X, last_position_of_Y
canvas.addEventListener("mousedown" , my_mousedown)
function my_mousedown(e)
{
mouse_event="mousedown"
color=document.getElementById("color").value
width_of_line=document.getElementById("width").value
}
canvas.addEventListener("mousemove" , my_mousemove)
function my_mousemove(e)
{
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown")
    {   
    ctx.beginPath()
    
    ctx.strokeStyle=color
    ctx.lineWidth= width_of_line
    ctx.moveTo(last_position_of_X, last_position_of_Y)
    ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y)
    ctx.stroke() 
    } 
    last_position_of_X=current_position_of_mouse_X
    last_position_of_Y=current_position_of_mouse_Y
}
canvas.addEventListener("mouseup" , my_mouseup)
function my_mouseup(e)
{
mouse_event="mouseup"
}
canvas.addEventListener("mouseleave" , my_mouseleave)
function my_mouseleave(e)
{
mouse_event="mouseleave"
}
function clear_area(){
    ctx.clearRect(0, 0, 800, 600)
}
canvas.addEventListener("touchstart" , my_touchstart)
function my_touchstart(e){
    color=document.getElementById("color").value
    width_of_line=document.getElementById("width").value
    last_position_of_X=e.touches[0].clientX-canvas.offsetLeft
    last_position_of_Y=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove" , my_touchmove)
function my_touchmove(e){
    current_position_of_touch_X=e.touches[0].clientX-canvas.offsetLeft
    current_position_of_touch_Y=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    
    ctx.strokeStyle=color
    ctx.lineWidth= width_of_line
    ctx.moveTo(last_position_of_X, last_position_of_Y)
    ctx.lineTo(current_position_of_touch_X, current_position_of_touch_Y)
    ctx.stroke() 
    last_position_of_X=current_position_of_touch_X
    last_position_of_Y=current_position_of_touch_Y
}