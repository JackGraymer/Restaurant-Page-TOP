import clear from './index'

export default function contact(){
    clear()

    const block = document.createElement('div')
    const title = document.createElement('h2')
    const text = document.createElement('p')
    const img = document.createElement('img')

    content.appendChild(block);
    block.appendChild(title)
    block.appendChild(text)
    block.appendChild(img)

    block.setAttribute('class', 'block contact')

    title.textContent = 'Contact us'
    text.innerHTML = `<address> 
    Written by <a href="mailto:Email@Example.com">JackGraymer</a><br> 
    E-mail us at: <a href="mailto:Email@Example.com">Email@Example.com</a><br> 
    Visit this project at: <a href="https://github.com/JackGraymer/Restaurant-Page-TOP">GitHub repo</a><br> 
    Location: In the heart of <a href="https://goo.gl/maps/w5XchyT6ZHLuW5dVA">Zurich, </a> Switzerland<br> 
    
    </address>`

}