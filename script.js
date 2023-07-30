document.addEventListener('DOMContentLoaded', ()=>{
    
const body = document.querySelector('body');
const aboutMe = document.querySelector('#aboutMe');
const skills = document.querySelector('#skills');
const certificate = document.querySelector('#certificate');
const projects = document.querySelector('#projects');
const footer = document.querySelector('#footer');
const header = document.querySelector('#header');

//console.log(((window.innerWidth+window.innerHeight)/100)*0.5);


//устанавливаем размеры body
body.style.width = window.innerWidth+'px';
const footerSize = ((window.innerHeight*4)*3)/100;
body.style.height = ((window.innerHeight*4)+footerSize)+'px';
//устанавливаем размеры хэдера
const menu = document.querySelectorAll('#menu>ul>li');

menu.forEach(element => {
    element.style.fontSize = (((window.innerWidth + window.innerHeight)/100))+'px';
});

const headerIcon = document.querySelector('#icon');
headerIcon.style.fontSize = (((window.innerWidth + window.innerHeight)/100)*1.5)+'px';

//устанавливаем размеры блоков
aboutMe.style.height = window.innerHeight+'px';
skills.style.height = window.innerHeight+'px';
certificate.style.height = window.innerHeight+'px';
projects.style.height = window.innerHeight+'px';
footer.style.height = footerSize+'px';
//устанавливаем шрифт первому блоку
const aboutMeTitle = document.querySelector('#aboutMe__title')
aboutMeTitle.style.fontSize = (((window.innerWidth + window.innerHeight)/100)*1.5)+'px';
//устанавливаем размеры карточки проекта
const cardProject = document.querySelectorAll('#cardProject')
const projects_cards = document.querySelector('#projects-cards')

const projectIconPHP = document.querySelector('.cardProjectPHP__icon');
const projectIcon = document.querySelectorAll('.cardProject__icon');
const infoProject = document.querySelectorAll('.infoProject');
const button = document.querySelectorAll('.PJbtn')

button.forEach(element => {
    element.style.height = (((window.innerWidth + window.innerHeight)/100)*3)+'px'
    element.style.width = (((window.innerWidth + window.innerHeight)/100)*15)+'px'
    element.style.fontSize = (((element.clientWidth + element.clientHeight)/100)*4)+'px'
    
});


projectIconPHP.style.width = (((window.innerWidth + window.innerHeight)/100)*7)+'px'

projectIcon.forEach(element => {
    element.style.width = (((window.innerWidth + window.innerHeight)/100)*5)+'px';
});

infoProject.forEach(element => {
    element.style.fontSize = (((window.innerWidth + window.innerHeight)/100))+'px';
});

//устанавливаем размеры иконок строки контактов
const label = document.querySelector('footer>span');
const imgContacts = document.querySelectorAll('.contacts>a>img')

label.style.fontSize = (((window.innerWidth + window.innerHeight)/100))+'px';

imgContacts.forEach(element => {
    element.style.width = (((window.innerWidth + window.innerHeight)/100)*1.5)+'px';
});



//устанавливаем переключатель видимости

const projectsHeader = document.querySelector('#projects>h1');


// cardProject.forEach(element => {
//     element.addEventListener('click', function () {
//         console.log(this)
//         window.open('https://docs.google.com/presentation/d/1PFMV8E3ubK9YnUhFJJ1lm5DY7rwW0lQYkpM5Z4xqIIM/edit?usp=sharing');
//     })
// });

})














