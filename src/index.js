import './style.css'
import {printMe, home} from './home';
import icon from './img/japanico.jpg'
import git from './img/github.png'
import menuContent from './menu'
import contact from './contact'

function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = icon
}
iconChange()

function footerLink(){
    document.querySelector('.git').src = git;
}

export default function clearContent(){
    content.textContent = ''
}

footerLink()

printMe();

home()
let menu = document.querySelectorAll('.button')

//Tab functionality ** each tab clears the content and creates its own
menu.forEach(element => {
    element.addEventListener('click', () => {
        menu.forEach(element => {
            element.style.backgroundColor= 'aliceblue';
            element.style.borderColor=''
            element.style.color=''
        });    
        element.style.backgroundColor= 'rgb(36, 36, 36)';
        element.style.color='rgb(255, 0, 115)'
        element.style.borderColor='rgb(255, 0, 115)'
        //write tab function
        if(element.textContent === "Home"){
            home()
            console.log(element.textContent)
        } else if(element.textContent === "Menu"){
            menuContent()
            console.log(element.textContent)
        }else{
            contact()
            console.log(element.textContent)
        }
    })
});
