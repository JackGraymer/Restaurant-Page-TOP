import icon from './img/restaurant.png'

function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = icon
}


export default function printMe() {
  console.log(`I get called from home.js`)
}

let content = document.querySelector('#content')

const block = document.createElement('div')
block.setAttribute('class', 'block welcome')
block.innerText="satan"
content.appendChild(block);
