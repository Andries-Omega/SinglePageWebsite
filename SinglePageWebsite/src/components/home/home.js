export default function Home() {
    const divElement = document.createElement('div')
    const h1Element = document.createElement('h1')
    
    h1Element.textContent = 'Welcome Home'

    divElement.appendChild(h1Element)

    return divElement
}