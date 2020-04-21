const navContainer = document.querySelector('#content');

const nav = document.createElement('nav');
nav.setAttribute('id', 'navBar');

const ul = document.createElement('ul');
ul.setAttribute('class', 'navItem');

const logoH = document.createElement('div');
logoH.classList.add('logoH');
logoH.textContent = 'Cafe Goh';

nav.append(logoH)

const navLinks = ['Home', 'Menu', 'Contact'];

for(let i=0; i < navLinks.length; i++) {
    const li = document.createElement('li');
    li.setAttribute('id', navLinks[i]);
    li.classList.add('navList')
    const anchor = document.createElement('a');
    anchor.classList.add('list');
    anchor.href = `#${navLinks[i]}`;
    anchor.textContent = `${navLinks[i]}`;

    li.append(anchor);
    ul.append(li);
    nav.append(ul);
}

navContainer.append(nav);

export default navContainer;