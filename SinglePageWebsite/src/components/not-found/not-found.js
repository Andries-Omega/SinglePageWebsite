export default function NotFound() {
    const divElement = document.createElement('div')
    const h1Element = document.createElement('h1')
    
    h1Element.textContent = 'Page is not found'

    divElement.appendChild(h1Element)

    return divElement
}