function heron() {

    const a = Number(Inputa.value);
    const b = Number(Inputb.value);
    const c = Number(Inputc.value);

    const s = (a + b + c)/2;

    const s1 = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(s1);

    const answerua = document.querySelector('.result').innerHTML = s1;

}