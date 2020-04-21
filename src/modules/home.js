const homeContainer = document.querySelector('#content');


const homeDisplay = () => {
    const homeDescription = document.createElement('div');
    homeDescription.setAttribute('id', 'homeContainer');
    homeDescription.classList.add('pageContent');

    const header = document.createElement('h1');
    header.innerHTML = 'Welcome';
    const description = document.createElement('h3');
    description.innerHTML = 'Feel free to relax while enjoying nicely brewed coffee';

    homeDescription.appendChild(header);
    homeDescription.appendChild(description);

    homeContainer.appendChild(homeDescription);
}

export default homeDisplay;