// todo : make M+ and M- functional..
// and make it operated from keyboar numbers as well..

let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M+'){
            string = "Has to define";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M-'){
            string = "nothing for now";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});
