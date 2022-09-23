import icon from './img/restaurant.png'

function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = icon
}


export default function printMe() {
  console.log(`I get called from home.js`)
}

