import clearContent from "./index"
//Images import
import ramenimg from "./img/ramen.png"
import gyozaimg from './img/gyoza.jpg'
import sushiimg from './img/sushi.jpg'
import wakameimg from './img/wakame.jpg'
import okonomiyakiimg from './img/okonomiyaki.jpg'

let items = []



export default function menu(){
    clearContent()

    let content = document.querySelector('#content')

    //Create Menu items
    meals().forEach(element => {
        
        const block = document.createElement('div')
        const title = document.createElement('h2')
        const price = document.createElement('h3')
        const text = document.createElement('p')
        const img = document.createElement('img')
        
        content.appendChild(block);
        block.appendChild(title)
        block.appendChild(price)
        block.appendChild(img)
        block.appendChild(text)

        block.setAttribute('class', 'block menu')
        text.setAttribute('class', 'description')

        text.textContent = element.description
        title.textContent = element.name
        price.textContent = element.price
        img.src = element.img
    })

    

}



function meals(){

    let foods = [];
    function plate(name, price){
        this.name = name
        this.price = price 
        let description = ''
        let img = ''
        foods.push(this)
    }
    
    let ramen = new plate('Tonkotsu Ramen', '16,90')
    ramen.description = 'Tonkotsu is a unique style of ramen consisting of an extremely rich, fatty pork broth, fresh noodles, soft-yolk eggs, and tender pork belly that melts in the mouth. It is so popular and special that it could be a dish of its own, not just a ramen style. The rich broth is developed by cooking the pork bones for a very long time, until the collagen and fat dissolve, resulting in a unique, creamy texture of the dish.';
    ramen.img = ramenimg
    console.log(ramen)

    let gyoza = new plate('Gyoza (4pcs)', '6,90')
    gyoza.description = 'Gyoza are small Japanese dumplings which have been filled with ingredients like minced pork and vegetables, boyled in rich vegetable broth.'
    gyoza.img = gyozaimg

    let sushi = new plate('Sushi sort (24pcs)','19,90')
    sushi.description = '24 pieces of sushi of 6 different types, combining tuna, salmon, avocado, cream chease, cucumber. Includes soysauce, wasabi and ginger'
    sushi.img = sushiimg

    let wakame = new plate('Wakame salad', '5,90')
    wakame.description = 'Seaweed salad with sesame seeds, perfect for starters and to combine with sushi';
    wakame.img = wakameimg

    let okonomiyaki = new plate('Okonomiyaki with bacon', '8,50')
    okonomiyaki.description = 'Okonomiyaki is a popular pan-fried dish that consists of batter and cabbage. Topped with special Okonomiyaki sauce, Japanese mayonaise, sesame seeds, bacon, spring onions and Katsuobushi (bonito flakes)';
    okonomiyaki.img = okonomiyakiimg

    return foods
}



