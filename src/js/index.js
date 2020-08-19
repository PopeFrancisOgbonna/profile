//scroll Effect
const scroll = document.querySelector('.scroll-btn');
scroll.addEventListener('click', (e) =>{
    let option = {
        top:650,
        lef:0,
        behavior:'smooth'
    }
    e.preventDefault();
    scrollTo(option)
})

const email=document.querySelector('#email');
const name = document.querySelector('#name');
const message =document.querySelector('#message');
const send=document.querySelector('.send');
//const modal=document.querySelector('#hire-modal');


const parttern=/^[a-zA-Z]+$/;
const mail=/\S+\@\S+\.\S+/;

send.addEventListener('click',(e)=>{
    e.preventDefault();
    if( name.value.match(parttern)&& email.value.match(mail)){
        if(message.value!=''){
           setTimeout(() => {
              alert('Message Sent'); 
              email.value='';
              name.value='';
              message.value='';
            $('#hire-modal').modal('hide');
           }, 2000);
        }else{
            alert('You can\'t Send empty message');
        }
        
    }
    else{
        alert('Incorrect input!');
    }
});
//