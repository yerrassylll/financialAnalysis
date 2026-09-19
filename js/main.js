let form = document.querySelector(".formRegistration");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll(".inputRegistration");
    let username = inputs[0].value.trim();
    let email = inputs[1].value.trim();

    console.log(username);
    console.log(email);

    if (username === "" && email === "") {
        console.log("Заполните имя и почту");
    } else if(username === "") {
        console.log("Введите имя");
    } else if(email === "") {
        console.log("Введите почту");
    } else {
        console.log("Всё заполнено, идём дальше");
    }

    let toastAlert = document.querySelector("toast");
    //создать новый объект: new bootstrap.Toast(элемент)
    // Комментарии Claude: не понимаю как написать псевдо код

});


/* 

let form = document.querySelector(".formRegistration");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let inputRegName = document.querySelectorAll(".inputRegistration");
    let username = inputRegName.value.trim();
    console.log(username);

    let inputRegEmail = document.querySelectorAll(".inputRegistration");
    let email = inputRegEmail.value.trim();
    console.log(email);

    console.log("форма отправлена, но переход отменён");
});


*/


/*
console.log(form);

let inputReg = document.querySelector(".inputRegistration");
console.log(inputReg);

let value = inputReg.value;
console.log(value);
*/

/*
button = document.querySelector('.btnRegistration');
button.addEventListener("submit", function() {
	event.preventDefault();
	console.log("форма отправлена");
});
*/