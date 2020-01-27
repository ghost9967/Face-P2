//Developed by ghost9967
var direction = document.getElementById("dir");
var steps = document.getElementById("step");
var submit = document.getElementById("submit");
var direction2 = document.getElementById("dir2");
var steps2 = document.getElementById("step2");
var submit2 = document.getElementById("submit2");
var position = [
    ['a1','a2','a3','a4','a5','a6','a7','a8'],
    ['b1','b2','b3','b4','b5','b6','b7','b8'],
    ['c1','c2','c3','c4','c5','c6','c7','c8'],
    ['d1','d2','d3','d4','d5','d6','d7','d8'],
    ['e1','e2','e3','e4','e5','e6','e7','e8'],
    ['f1','f2','f3','f4','f5','f6','f7','f8'],
    ['g1','g2','g3','g4','g5','g6','g7','g8'],
    ['h1','h2','h3','h4','h5','h6','h7','h8']
];
var queen_1 = {
        x_coord : 0,
        y_coord : 0,
        name : "<i id='queen1' class='fas fa-crown'></i>",
        log : "a1"
};
var queen_2 = {
    x_coord : 7,
    y_coord : 0,
    name : "<i id='queen2' class='fas fa-crown'></i>",
    log : "a8"
};
var queen1 = "<i id='queen1' class='fas fa-crown'></i>";
var queen2 = "<i id='queen2' class='fas fa-crown'></i>";
document.getElementById("begin").onclick = function() 
{
document.getElementById(String(queen_1.x_coord)+","+String(queen_1.y_coord)).innerHTML = queen1;
submit.style.cursor = 'pointer';
steps.removeAttribute("disabled");
submit.removeAttribute("disabled");
direction.removeAttribute("disabled");
document.getElementById("begin").style.display = 'none';
document.getElementById("begin2").removeAttribute("disabled");
}
document.getElementById("begin2").onclick = function() 
{
document.getElementById(String(queen_2.x_coord)+","+String(queen_2.y_coord)).innerHTML = queen2;
submit2.style.cursor = 'pointer';
steps2.removeAttribute("disabled");
submit2.removeAttribute("disabled");
direction2.removeAttribute("disabled");
document.getElementById("begin2").style.display = 'none';
}
function move(obj,dir,step)
{
    switch (dir) {
        case 'N':
            if(obj.x_coord+parseInt(step)<=7)
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log("North");
            obj.x_coord=obj.x_coord+parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else
            {
                window.alert("Illegal Move");
                break;
            }
        case 'S':
            if(obj.x_coord-parseInt(step)>=0)
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('South');
            obj.x_coord=obj.x_coord-parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else
            {
                window.alert("Illegal Move");
                break;
            }
        case 'E':
            if(obj.y_coord+parseInt(step)<=7)
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('East');
            obj.y_coord=obj.y_coord+parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else
            {
                window.alert("Illegal Move");
                break;
            }
        case 'W':
            if(obj.y_coord-parseInt(step)>=0)
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('West');
            obj.y_coord = obj.y_coord-parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else
            {
                window.alert("Illegal Move");
                break; 
            }
        case 'NW':
            if((obj.x_coord+parseInt(step)<=7) && (obj.y_coord-parseInt(step)>=0))
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('North West');
            obj.x_coord = obj.x_coord+parseInt(step);
            obj.y_coord = obj.y_coord-parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else{
                window.alert("Illegal Move");
                break;
            }
        case 'SW':
            if((obj.x_coord-parseInt(step)>=0) && (obj.y_coord-parseInt(step)>=0))
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('South West');
            obj.x_coord = obj.x_coord-parseInt(step);
            obj.y_coord = obj.y_coord-parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else{
                window.alert("Illegal Move");
                break;
            }
        case 'NE':
            if((obj.x_coord+parseInt(step)<=7) && (obj.y_coord+parseInt(step)<=7))
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('North East');
            obj.x_coord=obj.x_coord+parseInt(step);
            obj.y_coord=obj.y_coord+parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
            else
            {
                window.alert("Illegal Move");
                break;
            }
        case 'SE':
            if((obj.x_coord-parseInt(step)>=0) && (obj.y_coord+parseInt(step)<=7))
            {
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = "&nbsp;&nbsp;&nbsp;";
            console.log('South East');
            obj.x_coord = obj.x_coord-parseInt(step);
            obj.x_coord = obj.y_coord+parseInt(step);
            document.getElementById(String(obj.x_coord)+","+String(obj.y_coord)).innerHTML = obj.name;
            obj.log = obj.log + "," + position[obj.x_coord][obj.y_coord];
            break;
            }
        default:
            console.log('Invalid');
            window.alert('Invalid Move');
            break;
    }
}
submit.onclick = function()
 {
    var dir = direction.value.toUpperCase();
    var step = steps.value;
    move(queen_1,dir,step);
    if((queen_1.x_coord == queen_2.x_coord)&&(queen_1.y_coord == queen_2.y_coord))
    {
        window.alert("White Queen Wins");
        document.getElementById('log1').innerHTML = queen_1.log;
        document.getElementById('log2').innerHTML = queen_2.log;
        submit.setAttribute('disabled','disabled');
        submit.value = "Game Has Ended";
        submit2.setAttribute('disabled','disabled');
        submit2.value = "Game Has Ended";
        console.log("White Queen Wins");
    }
    console.log(queen_1.x_coord+","+queen_1.y_coord);
    console.log(step);
}
submit2.onclick = function()
 {
    var dir = direction2.value.toUpperCase();
    var step = steps2.value;
    move(queen_2,dir,step);
    if((queen_1.x_coord == queen_2.x_coord)&&(queen_1.y_coord == queen_2.y_coord))
    {
        window.alert("Black Queen Wins");
        document.getElementById('log1').innerHTML = queen_1.log;
        document.getElementById('log2').innerHTML = queen_2.log;
        submit.setAttribute('disabled','disabled');
        submit.value = "Game Has Ended";
        submit2.setAttribute('disabled','disabled');
        submit2.value = "Game Has Ended";
        console.log("Black Queen Wins");
    }
    console.log(queen_2.x_coord+","+queen_2.y_coord);
    console.log(step);
}