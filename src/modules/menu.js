const menuContainer = document.querySelector('#content');

const drinkList = [
    ['./pictures/bubbletea.jpg', 'Bubble Tea', 'Hot or Cold', '3.00'],
    ['./pictures/americano.jpg', 'Caffe Americano', 'Hot', '2.50'],
    ['./pictures/espresso.jpg', 'Espresso', 'Iced or Hot', '2.25'],
    ['./pictures/cappuccino.jpg', 'Cappuccino', 'Iced or Hot', '4.00'],
    ['./pictures/latte-small.jpg', 'Latte', 'Iced or Hot', '3.25'],
    ['./pictures/macchiato.jpg', 'Caffe Macchiato', 'Hot', '3.50'],
    ['./pictures/coffee.jpg', 'Coffee', 'Hot', '1.25'],
    ['./pictures/greentea.jpg', 'Green Tea', 'Hot', '1.50'],
    ['./pictures/smoothie.jpg', 'Smoothie', 'Cold', '3.00']
]

const menuDisplay = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.classList.add('pageContent');

    

    drinkList.forEach(drink => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const picture = document.createElement('img');
        picture.setAttribute('class', 'cardPic');
        picture.src = `${drink[0]}`;
        card.append(picture);

        const cardDrink = document.createElement('p');
        cardDrink.setAttribute('class', 'cardDrink');
        cardDrink.innerHTML = `${drink[1]}`;
        card.append(cardDrink);

        const cardInfo = document.createElement('p');
        cardInfo.setAttribute('class', 'cardInfo');
        cardInfo.innerHTML = `${drink[2]}`;
        card.append(cardInfo);

        const cardPrice = document.createElement('span');
        cardPrice.setAttribute('class', 'cardInfo');
        cardPrice.textContent = `$${drink[3]}`;
        card.append(cardPrice);
        menu.append(card);
    })

    menuContainer.append(menu); 
}


export default menuDisplay;