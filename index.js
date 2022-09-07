let a1=3;
let b1='7';
let c1=3;
function isATheLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else {
    return false;
  }
}
// console.log(isATheLargest(a,b,c));
function isBTheLargest(a, b, c) {
  if (b > a && b > c) {
    return b;
  } else {
    return false;
  }
}
// console.log(isBTheLargest(a,b,c));
function isCTheLargest(a, b, c) {
  if (c > a && c > b) {
    return c;
  } else {
    return false;
  }
}
// console.log(isCTheLargest(a,b,c));
function TheEqualThree(a, b, c) {
  if (a == b && a == c) {
    return a;
  } else {
    return false;
  }
}
//console.log(TheEqual(a, b, c));
function TheEqualAB(a, b) {
  if (a == b) {
    return a;
  } else {
    return false;
  }
}
function TheEqualAC(a, c) {
  if (a == c) {
    return a;
  } else {
    return false;
  }
}
function TheEqualBC(b, c) {
  if (b == c) {
    return b;
  } else {
    return false;
  }
}
 export function TheLargestNumber(a1, b1, c1) {
  let a = parseFloat(a1);
  let b = parseFloat(b1);
  let c = parseFloat(c1);

  if (isATheLargest(a, b, c)) {
    return "The 1st number is largest and equal: " + a;
  } else if (isBTheLargest(a, b, c)) {
    return "The 2nd number is largest and equal: " + b;
  } else if (isCTheLargest(a, b, c)) {
    return "The 3rd number is largest and equal: " + c;
  } else if (TheEqualThree(a, b, c)){
    return "All three numbers are equal. And equal: " + a;
  }
    else if (TheEqualAB(a, b)){
    return "A and B are equal. And equal: " + a;  
    }
    else if (TheEqualAC(a, c)){
    return "A and C are equal. And equal: " + a;    
    }
    else {
    return "B and C are equal. And equal: " + b;   }
}
console.log(TheLargestNumber(a1, b1, c1));

