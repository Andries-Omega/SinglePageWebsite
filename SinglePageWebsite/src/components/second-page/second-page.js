export default function SecondPage() {
    const divElement = document.createElement('div')
    const h1Element = document.createElement('h1')
    
    h1Element.textContent = 'Welcome The Second Page'

    divElement.appendChild(h1Element)

    return divElement
}