function getValues() {
    // Получаем значения из полей ввода
    const value1 = getElementById.getElementById("input-1").value;
    const value2 = getElementById.getElementById("input-2").value;

    // Выводим значения в консоль (или можете использовать alert)
    console.log("input-1", value1);
    console.log("input-2", value2);
}

const button = document.getElementById("myButton");
button.addEventListener("click", getValues);

function myFunction() {
alert("Кнопка нажата!");
}
const rezElement = document.getElementById("rez"); 
console.log("test")