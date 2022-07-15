/*Title:Calculator App
Author:Harli Lacej
Date:15/07/2022*/
document.getElementById('calculator-one').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '1');
}
document.getElementById('calculator-two').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '2');
}
document.getElementById('calculator-three').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '3');
}
document.getElementById('calculator-four').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '4');
}
document.getElementById('calculator-five').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '5');
}
document.getElementById('calculator-six').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '6');
}
document.getElementById('calculator-seven').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '7');
}
document.getElementById('calculator-eight').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '8');
}
document.getElementById('calculator-nine').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '9');
}
document.getElementById('calculator-zero').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '0');
}

document.getElementById('calculator-plus').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let text=document.getElementById('calculator-calculation').textContent;
    if(text[text.length-1]==='-' || text[text.length-1]==='x' || text[text.length-1]==='/' || text[text.length-1]==='.' || text[text.length-1]==='+' || text===''){
    }else{
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '+');
    }
}
document.getElementById('calculator-minus').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let text=document.getElementById('calculator-calculation').textContent;
    if(text[text.length-1]==='+' || text[text.length-1]==='x' || text[text.length-1]==='/'|| text[text.length-1]==='.' || text[text.length-1]==='-' || text===''){
    }else{
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '-');
    }
}
document.getElementById('calculator-division').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let text=document.getElementById('calculator-calculation').textContent;
    if(text[text.length-1]==='+' || text[text.length-1]==='x' || text[text.length-1]==='-'|| text[text.length-1]==='.' || text[text.length-1]==='/'|| text===''){
    }else{
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '/');
    }
}

document.getElementById('calculator-multiply').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let text=document.getElementById('calculator-calculation').textContent;
    if(text[text.length-1]==='+' || text[text.length-1]==='/' || text[text.length-1]==='-'|| text[text.length-1]==='.' || text[text.length-1]==='x'|| text===''){
    }else{
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', 'x');
    }
}
document.getElementById('calculator-point').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let text=document.getElementById('calculator-calculation').textContent;
    if(text[text.length-1]==='+' || text[text.length-1]==='/' || text[text.length-1]==='-'|| text[text.length-1]==='x' || text[text.length-1]==='.'|| text===''){
    }else{
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', '.');
    }
}
document.getElementById('calculator-percent').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let text=document.getElementById('calculator-calculation').textContent;
    if(text===''){
    }else{
    document.getElementById('calculator-calculation').insertAdjacentText('beforeend', 'x100');
    }
   
}
document.getElementById('calculator-root').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').insertAdjacentText('afterbegin', '√');
}

document.getElementById('calculator-delete').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    let str=document.getElementById('calculator-calculation').textContent;
    str = str.substring(0, str.length - 1);
    document.getElementById('calculator-calculation').textContent=str;
    document.getElementById('calculator-result').textContent='';
}

document.getElementById('calculator-c').onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('calculator-calculation').textContent='';
    document.getElementById('calculator-result').textContent='';
}



document.getElementById("calculator-equal").onclick = function(e){
    e.stopPropagation();
    e.preventDefault();
    //parsing logic
    let str=document.getElementById('calculator-calculation').textContent;
    let count = str.split('-').length - 1;
    let count2 = str.split('+').length - 1;
    let count3 = str.split('/').length - 1;
    let count4 = str.split('x').length - 1;
    let count5 = str[0];
    if(count===1 && count2===0 && count3===0 && count4===0){
        let num1=str.substring(0, str.indexOf('-'));
        let num2=str.substring(str.indexOf('-') + 1);
        let res=parseFloat(num1)-parseFloat(num2);
        document.getElementById('calculator-result').textContent="="+res;

    }
    if(count===0 && count2===1 && count3===0 && count4===0){
        let num1=str.substring(0, str.indexOf('+'));
        let num2=str.substring(str.indexOf('+') + 1);
        let res=parseFloat(num1)+parseFloat(num2);
        document.getElementById('calculator-result').textContent="="+res;

    }
    if(count===0 && count2===0 && count3===1 && count4===0){
        let num1=str.substring(0, str.indexOf('/'));
        let num2=str.substring(str.indexOf('/') + 1);
        let res=parseFloat(num1)/parseFloat(num2);
        document.getElementById('calculator-result').textContent="="+res;

    }
    if(count===0 && count2===0 && count3===0 && count4===1){
        let num1=str.substring(0, str.indexOf('x'));
        let num2=str.substring(str.indexOf('x') + 1);
        let res=parseFloat(num1)*parseFloat(num2);
        document.getElementById('calculator-result').textContent="="+res;

    }
    if(count===0 && count2===0 && count3===0 && count4===0 && count5==="√"){
        let num=str.substring(str.indexOf('√') + 1);
        let res=Math.sqrt(parseInt(num));
        const res_round=Math.round(res * 100) / 100
        document.getElementById('calculator-result').textContent="="+res_round;

    }
}


