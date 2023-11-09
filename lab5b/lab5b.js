
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