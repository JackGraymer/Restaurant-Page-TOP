import icon from './img/restaurant.png'
import ramen from './img/ramen-main.png'
import clear from './index'

function iconChange() {
  let link = document.querySelector("link[rel~='icon']")

  link.href = icon
}

let content = document.querySelector('#content')


export default function home(){
  clear();

  const block = document.createElement('div')
  const title = document.createElement('h2')
  const text = document.createElement('p')
  const img = document.createElement('img')

  content.appendChild(block);
  block.appendChild(title)
  block.appendChild(text)
  block.appendChild(img)

  block.setAttribute('class', 'block welcome')
  img.src=ramen
  img.alt='Ramen picture'

  title.textContent = 'Welcome!'
  text.innerHTML = 'Come to the Ramen Dining and you will experience Asian and Japanese food on a whole new level. Treat yourself with this delicious food and savour a piece of Asia in the middle of your city. <br> Our meals are prepared by traditional chefs with more than 10 years of experience, that after mastering their skills decided to venture on the world to show their culture and flavours. <br> Home made, daily.'

}