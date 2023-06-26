export default function Navbar(navigate) {
    const navBarElement = document.createElement('nav')
    const homeButton = document.createElement('button')
    const secondPage = document.createElement('button')

    homeButton.className = 'link'
    secondPage.className = 'link'

    homeButton.textContent = 'Home'
    secondPage.textContent = 'Second page'

    homeButton.onclick = () => {
        navigate('/home')
    } 

    secondPage.onclick = () => {
        navigate('/second-page')
    }

    navBarElement.appendChild(homeButton)
    navBarElement.appendChild(secondPage)

    return navBarElement
}

