const minNum = document.getElementById("minNum");
const maxNum = document.getElementById("maxNum");
const palButton = document.getElementById("palButton");
const perButton = document.getElementById("perButton");
const palP = document.getElementById("palP");
const perP = document.getElementById("perP");

palButton.addEventListener("click", () => {
    palP.innerHTML = '';
    for (let str = maxNum.value; str>= minNum.value; str--){
        console.log(str);
        if (str.toString() === str.toString().split('').reverse().join('')){
            palP.innerHTML += str + "<br>";
        }
    }
});

perButton.addEventListener('click', () =>{
    perP.innerHTML = '';
    for (let str = maxNum.value; str>= minNum.value; str--){
        const divisors = [];
        for (let i = 1; i<str; i++){
            if (str%i == 0) {
                divisors.push(i);
            } 
        }
        if (str == divisors.reduce((t, v)=> t + v, 0) && str != 0){
            perP.innerHTML += str + "<br>";
        }
    }
})  