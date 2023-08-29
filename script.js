const newName = document.getElementById('name')
const cardContainer = document.getElementById('card-container')


const createCard =()=>{
    
    const header = document.createElement('div')
    header.setAttribute('id','header')
    
    const greeting = document.createElement('h1')
    const paragraph = document.createElement('p')
    
    const nameContainer = document.createElement('div')
    nameContainer.setAttribute('id','name-container')
    
    const footer = document.createElement('div')
    footer.setAttribute('id','footer')
    
    
    greeting.innerText = 'Hello'
    paragraph.innerText = 'my name is'
    
    header.appendChild(greeting)
    header.appendChild(paragraph)




    const newCard = document.createElement('div')
    newCard.setAttribute('id','new-card')
    newCard.appendChild(header)
    newCard.appendChild(nameContainer)
    newCard.appendChild(footer)

    nameContainer.innerText = newName.value;

    cardContainer.insertBefore(newCard,cardContainer.firstChild)

    newName.value=''
}





