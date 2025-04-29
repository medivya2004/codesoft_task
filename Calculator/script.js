let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (value === '=') {
            try {
                // Evaluate safely
                string = Function('"use strict"; return (' + string + ')')();
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'Ac') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
       
        else {
         string+=value
         input.value=string
           }
       });
   });
