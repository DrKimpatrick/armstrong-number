const armstrong = (number) => {
    // Button element
    let element = document.getElementById('Button');
    // convert leter into number
    let num_str = number.toString()
    if(num_str.length > 3 || num_str.length < 3){
        
        element.classList.remove("default-button-class");
        document.getElementById('Button').setAttribute("class", "deactivate-button");
        
    }else if(num_str.length === 3){
        element.classList.remove('deactivate-button')
        document.getElementById('Button').setAttribute('class', 'default-button-class');

        let total = 0;
        for(let item of num_str){
            total += (parseInt(item)**3)
        }
        if (total == number){
            return {
                answer: 'Number is Armstrong',
                textClass: 'text-success'
            }
        }else{
            
            return {
                answer: 'Opps. Number is not Armstrong !!!!!',
                textClass: 'text-error'
            }
        }
        
    }
}

// Form element
let form = document.getElementById('inputForm');

// add submit event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault()

    // answer display div
    let answerDiv = document.getElementById('answerDiv');

    // Getting value from the armstrong function
    let result = armstrong(form.numberM.value) ? armstrong(form.numberM.value): ''

    // getting the previous value of the answer
    let previousAnswer = answerDiv.innerHTML;
   
    
    answerDiv.innerHTML = result.answer ? result.answer : ''; 

    if (result.length !== 0){
            // add text class   
        if (result.textClass == 'text-success'){
            answerDiv.classList.remove("text-error");
            answerDiv.setAttribute('class', 'text-success');
        }else {
            answerDiv.classList.remove("text-success");
            answerDiv.setAttribute('class', 'text-error');
        }
    }
   
    // if no previous answer and armstrong func returns empty string
    if (!result && previousAnswer.length == 0){ 
        alert("The number should be exactly two characters long");
    }

    // No need to reset the form
})