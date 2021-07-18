"use strict";
  function solveEquation(a,b,c){
    let D = b**2-4*a*c;
    let x1;
    let x2;
    let x;
    if(D > 0){
      x1 =  (-b + Math.sqrt(D))/(2*a);
      x2 =  (-b - Math.sqrt(D))/(2*a);
      return "Первый корень: " + Math.round(x1)+ ", Второй корень: " + Math.round(x2);
    }else if (D < 0){ return "Корней нет";
    }else if (D === 0){ 
      x = -b/(2*a);
      return "Корень только один: x1 = " + Math.round(x);
    }
}
  function calculateQuadraticEquation(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let result = solveEquation(a,b,c);
    document.getElementById("result").textContent = result; 
}


