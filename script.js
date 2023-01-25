let output = document.querySelector('.output')
let string = '';
let buttons = document.querySelectorAll('.input-button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                output.value = string;
            }
            else if (e.target.innerHTML == "RESET") {
                string = ""
                output.value = string;
            }
            else {
                string = string + e.target.innerHTML;
        //console.log(string);
                output.value = string;
            }
        }
        catch (err) {
            output.value = " Syntax Error";
            string = '';
        }
    })
})

// let checkbox1 = document.getElementById("checkbox1");
// checkbox1.addEventListener('change',function(){
// document.getElementsByClassName('container').style.color="green"
// })





 