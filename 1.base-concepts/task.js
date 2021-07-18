"use strict";
  function solveEquation(a,b,c){
    const D = b**2-4*a*c;
    let arr = [];
    if(D > 0){
      arr.push(-b + Math.sqrt(D))/(2*a);
      arr.push(-b - Math.sqrt(D))/(2*a);
        return arr;
    }else if (D < 0){ 
        return arr;
    }else if (D === 0){
      arr.push(-b/(2*a));
        return arr;
    }
}


