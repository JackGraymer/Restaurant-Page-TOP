import './style.css'
import printMe from './home';
import icon from './img/restaurant.png'
import git from './img/github.png'

function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = icon
}
iconChange()

function footerLink(){
    document.querySelector('.git').src = git;
    console.log(document.querySelector('.git'))
}

footerLink()

printMe();
