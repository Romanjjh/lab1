
//1
function heron() {

    const a = Number(Inputa.value);
    const b = Number(Inputb.value);
    const c = Number(Inputc.value);

    const s = (a + b + c)/2;

    const s1 = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(s1);

    const answerua = document.querySelector('.result').innerHTML = s1;
}


//2
function edge() {

    const a = Number(Inputa2.value);
    const b = Number(Inputb2.value);
    const c = Number(Inputc2.value);

    const s2 = (a*b*c)/2;
    console.log(s2);

    const answerua2 = document.querySelector('.result2').innerHTML = s2;
}




//3
function hei() {

    const a = Number(Inputa3.value);
    const b = Number(Inputb3.value);
   
    const s3 = (a*b)/2;

    console.log(s3);

    const answerua3 = document.querySelector('.result3').innerHTML = s3;
}






//4
function radius(){

    const a = Number(Inputa4.value);
    const b = Number(Inputb4.value);
    const c = Number(Inputc4.value);
    const r = Number(Inputr4.value);

    const s4 = (a*b*c)/(4*r);

    console.log(s4);

    const answerua4 = document.querySelector('.result4').innerHTML = s4;
}







//5

function palindrome() {
    
    const a = Number(Inputa5.value);
    
    const numStr = a.toString();

   
    const reversedStr = numStr.split('').reverse().join('');

    
    if (numStr === reversedStr){
        const answerua5 = document.querySelector('.result5').innerHTML = 'your number is a palindrome'
    }else{
        const answerua5 = document.querySelector('.result5').innerHTML = 'your number is not a palindrome'    
    }
}






function isAnagram(a, b) {
    
  
    a = (Inputa6.value.replace(/\s/g, '').toLowerCase())
    b = (Inputb6.value.replace(/\s/g, '').toLowerCase())
    
    if (a.length !== b.length) {
      return false
    }
  
    a = a.split('').sort().join('')
    b = b.split('').sort().join('')
  

  
    if (a === b){
        const answerua6 = document.querySelector('.result6').innerHTML = 'your text is a anagrama'
    }else{
        const answerua6 = document.querySelector('.result6').innerHTML = 'your text is not a anagrama'
    }

  }






  function fibo(){
    let a = [1,1,2,3,5,8,13,21,34 ]
    const index = Number(Inputa7.value);
    
    const answerua7 = document.querySelector('.result7').innerHTML = a[index + 1]


    
  }

  function generateFibonacciArray(n) {
    const fibonacciArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextValue = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextValue);
    }
  
    return fibonacciArray;
  }
  
  function fibo2(){
    const num = Number(Inputa8.value);
    let arry = generateFibonacciArray(100);
    
    if (arry.includes(num)){
        const answerua8 = document.querySelector('.result8').innerHTML = 'true'
    } else {
        const answerua8 = document.querySelector('.result8').innerHTML = 'false'
    }

    



    
  }

  





















