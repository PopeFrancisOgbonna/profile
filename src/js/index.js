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
const toggle = document.querySelector('#toggleBtn');
let check = 0;
toggle.addEventListener('click', (e) =>{
    e.preventDefault();
    const nav = document.querySelector('.navbar-nav');
    if(check === 0){
        nav.style.background = 'rgba(0, 0, 0, 0.2)';
        check =+ 1;
    }else{
        nav.style.background = '';
        check = 0;
    }
})
//Google form handler
const hireMe = document.querySelector('#hireMeBtn');
const frame = document.querySelector('.iframeDiv');
const closeHire = document.querySelector('#hireClose');
hireMe.addEventListener('click', (e) =>{
    e.preventDefault();
    frame.classList.remove('hide');
});
closeHire.addEventListener('click', (e) =>{
    e.preventDefault();
    frame.classList.add('hide');
})
//Modal section but was Removed in favor of google form
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