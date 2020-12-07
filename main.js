const toDoInput = document.querySelector('.toDo');
const submit = document.getElementById('submit');
const containerList = document.querySelector ('.container_list');

submit.addEventListener('click', elementai);
containerList.addEventListener ('click', istrinti);



 function elementai (event){

    event.preventDefault();
    // susikuriame elementus i kuriuos kris darbai
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('to_do_div');
    let todoLi = document.createElement('li');
    // TAIP GALIME IS INPUTU PASIIMTI REIKSME I SAVO HTML
    todoLi.innerText = toDoInput.value;
    todoLi.classList.add('to_do_li');
    todoDiv.appendChild(todoLi);
//    susikurti du mygtukus "baigta" ir "trinti" 
let doneButton = `<button class="done_button">Padaryta</button>`;
todoDiv.innerHTML += doneButton;
// todoDiv.appendChild(doneButton);

let deletButton = `<button class="delet_button">Trinti</button>`;
todoDiv.innerHTML += deletButton;

// viską sukelti i musų todo lista
containerList.appendChild(todoDiv);

// KAI SUVEDAME ELEMENTA, KAD ISSIVALYTU 

toDoInput.value = '';
    
};


// sukuriame funkcija istrini mygtukui, kad pasirinkus issitrintu
function istrinti(e){
    const item = e.target;
    

    if(item.classList.contains('delet_button')){
        const todo = item.parentElement;
    todo.remove();
       
    }

    
    // padarome, kad paspaudus padaryt elementas pazaliuotu
    if(item.classList.contains('done_button')){
        const todo = item.parentElement;
    todo.classList.toggle('baigta');
}

}