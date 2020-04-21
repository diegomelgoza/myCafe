import navContainer from "./modules/navbar";
import createTable from "./modules/contact";
import menuDisplay from "./modules/menu";
import homeDisplay from "./modules/home";

const homeButton = document.querySelector('#Home');
const menuButton = document.querySelector('#Menu');
const contactButton = document.querySelector('#Contact');

const navButton = () => {
    let pageContent = document.getElementsByClassName('pageContent');
    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "none";
        pageContent[i].remove();
    }
}

homeButton.addEventListener('click', function() {
    navButton(this);
    homeDisplay();
});

menuButton.addEventListener('click', function() {
    navButton(this);
    menuDisplay();
});

contactButton.addEventListener('click', function() {
    navButton(this);
    createTable();
});

homeDisplay();
