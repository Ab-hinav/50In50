const textArea = document.querySelector('textarea');
const container = document.createElement('div');

//detect enter

textArea.addEventListener('keypress' , (e) =>{
    const code = e.code;
    if(code === 'Enter'){
        startChoicePicker();
        return;
    }else if (code == 'Comma'){
        clearChoicePicker();
        setChoicePicker(e.target.value);
    }
})

function clearChoicePicker(){
    container.innerHTML = '';
}

function setChoicePicker(text){
    const choices = text.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    for(let choice of choices){
       const choiceElement = document.createElement('div');
       choiceElement.innerText = choice;
       choiceElement.classList.add('choice');
       container.appendChild(choiceElement);
    }

    container.classList.add('choice-container');
    textArea.parentElement.appendChild(container);

}

function startChoicePicker(){
    const choices = document.querySelectorAll('.choice');
    const choiceContainer = document.querySelector('.choice-container');
    const choiceArray = Array.from(choices);
    let currentChoice = choiceArray[0];

    const interValId = setInterval(() =>{
        currentChoice.classList.remove('selected');
        currentChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        currentChoice.classList.add('selected');
    },90);

    setTimeout(() =>{
        clearInterval(interValId);
        setTimeout(() =>{
            choiceContainer.remove();
        },5000)
    },1000);

}