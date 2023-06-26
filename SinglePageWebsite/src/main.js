import Navbar from "./components/navbar/navbar.js"
import Home from "./components/home/home.js"
import SecondPage from "./components/second-page/second-page.js"
import NotFound from "./components/not-found/not-found.js"

function navigate (link) {
    history.pushState({}, null, location.origin + link);
    const mainRoute = document.body.getElementsByClassName('main')[0];
    
    mainRoute.innerHTML = ''

    switch (link) {
        case '/home':
            mainRoute.appendChild(Home())
            return;
        case '/second-page':
            mainRoute.appendChild(SecondPage())
            return
        default:
            mainRoute.appendChild(NotFound())
            return;
    }
}

document.addEventListener("DOMContentLoaded", () => {    
    addMainComponents()
    initNavigation()
})

function addMainComponents() {
    const routeDiv = document.createElement('div')
    routeDiv.className = 'main'

    document.body.append(Navbar(navigate), routeDiv)
}

function initNavigation() {
    if(location.pathname === '/'){
        navigate('/home')
    }else {
        navigate(location.pathname)
    }
}
