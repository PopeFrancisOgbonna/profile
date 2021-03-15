//scroll Effect
const scroll = document.querySelector('.scroll-btn');
scroll.addEventListener('click', (e) =>{
    let option = {
        top:630,
        lef:0,
        behavior:'smooth'
    }
    e.preventDefault();
    scrollTo(option)
})
//Menu toggler for small devices 
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
});
//handle preview 
const preview = document.querySelectorAll('.preview-btn');

    for (let index = 0; index < preview.length; index++) {
        preview[index].addEventListener('click', (e) =>{
            e.preventDefault();
            var link = preview[index].getAttribute('href');
            console.log(link)
            if(link ==='#'){
                alert('Sorry Preview unavailable at the moment!');
                return;
        }
        })
        
        
    }
//Google form handler
const social = document.querySelector('.social-icon');
const hireMe = document.querySelector('#hireMeBtn');
const frame = document.querySelector('.iframeDiv');
const form = document.querySelector('iframe');
const closeHire = document.querySelector('#hireClose');
hireMe.addEventListener('click', (e) =>{
    e.preventDefault();
    frame.classList.remove('hide');
    if(screen.width < 450){
        social.classList.add('hide');
    }
    if(screen.width > 580){
        form.style.minWidth ='600px';
        form.style.height='800px';
    }
});
closeHire.addEventListener('click', (e) =>{
    e.preventDefault();
    frame.classList.add('hide');
    social.classList.remove('hide');
})
//Modal section but was Removed in favor of google form
const email=document.querySelector('#email');
const name = document.querySelector('#name');
const message =document.querySelector('#message');
const send=document.querySelector('.send');
//const modal=document.querySelector('#hire-modal');
const parttern=/^[a-zA-Z]+$/;
const mail=/\S+\@\S+\.\S+/;

// send.addEventListener('click',(e)=>{
//     e.preventDefault();
//     if( name.value.match(parttern)&& email.value.match(mail)){
//         if(message.value!=''){
//            setTimeout(() => {
//               alert('Message Sent'); 
//               email.value='';
//               name.value='';
//               message.value='';
//             $('#hire-modal').modal('hide');
//            }, 2000);
//         }else{
//             alert('You can\'t Send empty message');
//         }
        
//     }
//     else{
//         alert('Incorrect input!');
//     }
// });
//