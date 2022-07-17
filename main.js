
function add(){
    let pi = document.getElementById('pi').value;
     parseFloat(pi);
    let r = document.getElementById('radius').value;
     parseFloat(r);
    let result1 = 2*r*pi;
    let result2 = r*r*pi;
    
    document.getElementById('result1').innerText = result1;
    document.getElementById('result2').innerText = result2;
}

Math.round(1.005*100)/100;