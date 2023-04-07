import throttle from 'lodash.throttle';

const formEl=document.querySelector('.feedback-form')
console.log(formEl);


//сторюємо пустий обєкт де будемо зберігати дані 
const filds = {};

// викликаю ініціалізацію форми
initForm()


formEl.addEventListener('input', throttle(onClickInput, 500));

//при заповненні форми записую в localStorage дані input і textarea

function onClickInput(event){
   
    filds[event.target.name]=event.target.value;
    console.log(filds)
    localStorage.setItem('feedback-form-state', JSON.stringify(filds));
    
};


// виконую ініціалізацію форми, з localStorage беру записані дані
//і якщо ці дані там є розпаковую дані і витягую дані, далі,
// у формі ключа записую значення


function initForm(){
    let formsFild = localStorage.getItem('feedback-form-state')
    console.log(formsFild)
    if(formsFild){
        formsFild=JSON.parse(formsFild);
        // console.log(formsFild);
        Object.entries(formsFild).forEach(([name,value])=>{
            filds[name]=value;
           formEl.elements[name].value=value})
      
}
           


}

formEl.addEventListener('submit',onClickForm)

function onClickForm(event){
    event.preventDefault();

    if(formEl.elements.email.value.trim()==="" || formEl.elements.message.value.trim()===""){
        alert(" Всі поля потрібно заповнити")
        
    } 
    
       formEl.elements.email.value="";
        formEl.elements.message.value="";
        localStorage.removeItem('feedback-form-state')
        
};

