const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#244dc8";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#244dc8";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);

tempLoad();

const Celsius = document.getElementById('Celsius');
const Fahrenheit = document.getElementById('Fahrenheit');
const Kelvin = document.getElementById('Kelvin');

Celsius.addEventListener('input', () => {
    if(Celsius.value == 0){
        Fahrenheit.value='';
        Kelvin.value='';
        return;
    }
    Fahrenheit.value = +(Celsius.value * 9/5) + 32;
    Kelvin.value = +Celsius.value + 273.15;
})

Fahrenheit.addEventListener('input', () => {
    if(Fahrenheit.value == 0){
        Celsius.value='';
        Kelvin.value='';
        return;
    }
    Celsius.value = (+Fahrenheit.value - 32) * 5/9;
    Kelvin.value = (+Fahrenheit.value - 32) * 5/9 + 273.15;
})

Kelvin.addEventListener('input', () => {
    if(Kelvin.value == 0){
        Celsius.value='';
        Fahrenheit.value='';
        return;
    }
    Celsius.value = +Kelvin.value - 273.15;
    Fahrenheit.value = (+Kelvin.value - 273) * 9/5 + 32;
})