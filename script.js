let title = document.querySelector('.title')
let v1 = parseInt(localStorage.getItem('v1')) || 0;
let v2 = parseInt(localStorage.getItem('v2')) || 0;
document.getElementById('v1').innerHTML = v1; 
document.getElementById('v2').innerHTML = v2;
let turn = 'X' 
function reloadPage() {
    v1 = 0
    v2 = 0
    document.getElementById('v1').innerHTML = v1
    document.getElementById('v2').innerHTML = v2

  }
function end(num1 , num2 , num3 ){
title.innerHTML = cadr[num1]+' win'
document.getElementById('item'+num1).style.background = '#000';
document.getElementById('item'+num2).style.background = '#000';
document.getElementById('item'+num3).style.background = '#000';


setInterval(function(){title.textContent += ' .'},1000)
setTimeout(function(){
    localStorage.setItem('v1', v1); 
    localStorage.setItem('v2', v2); 
    location.reload();
}, 3000)
if(cadr[num1] === "X"){
    v1 = v1 + 1
    document.getElementById('v1').textContent = v1
}else if(cadr[num1] === "O"){
    v2 = v2 + 1
    document.getElementById('v2').textContent = v2

}
}


let cadr = [];
function winnner(){
for(let i = 1 ; i<10 ; i++){
cadr[i] = document.getElementById("item"+i).innerHTML;
}
if(cadr[1] == cadr[2] && cadr[2] == cadr[3] && cadr[3]!=''){
end(1,2,3)
}
else if(cadr[4] == cadr[5] && cadr[5] == cadr[6] && cadr[6]!=''){
end(4,5,6)
}
else if(cadr[7] == cadr[8] && cadr[8] == cadr[9] && cadr[9]!=''){
end(7,8,9)
}
else if(cadr[1] == cadr[4] && cadr[4] == cadr[7] && cadr[7]!=''){
end(1,4,7)
}
else if(cadr[2] == cadr[5] && cadr[5] == cadr[8] && cadr[8]!=''){
end(2,5,8)
}
else if(cadr[3] == cadr[6] && cadr[6] == cadr[9] && cadr[9]!=''){
end(3,6,9)
}
else if(cadr[1] == cadr[5] && cadr[5] == cadr[9] && cadr[9]!=''){
end(1,5,9)
}
else if(cadr[3] == cadr[5] && cadr[5] == cadr[7] && cadr[7]!=''){
end(3,5,7)
}}
function game(id){
let element = document.getElementById(id)
if (turn === 'X' && element.innerHTML == ''){
element.innerHTML = 'X'
turn = 'O'
title.innerHTML = 'O'
}else if(turn === 'O' && element.innerHTML ==''){
element.innerHTML = 'O'
turn = 'X'
title.innerHTML = 'X'
}
winnner()
}
