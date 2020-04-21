const contactContainer = document.querySelector('#content');


const createTable = () => {
    const contactTable = document.createElement('table');
    contactTable.setAttribute('id', 'contactTable');
    contactTable.classList.add('pageContent');

    const contactTitle = document.createElement('h1');
    contactTitle.setAttribute('id', 'contactTitle');
    contactTitle.textContent = 'Contact Us';

    contactTable.append(contactTitle)
    contactTable.append(createRow('Email', 'hackermans@matrix.com'));
    contactTable.append(createRow('Phone', '123-456-789<br>098-765-432'));
    contactTable.append(createRow('Address', '435 Cloud Lane<br>San Jose, CA 92222')); 

    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'tableDiv');
    newDiv.classList.add('pageContent');
    newDiv.appendChild(contactTitle);
    newDiv.appendChild(contactTable);
    
    contactContainer.appendChild(newDiv);
} 

const createRow = (title, info) => {
    const row = document.createElement('tr');
    row.append(createTitle(title));
    row.append(createInfo(info));
    return row;
}

const createTitle = (title) => {
    const tableTitle = document.createElement('th');
    tableTitle.innerHTML = title;
    return tableTitle;
}

const createInfo = (info) => {
    const tableInfo = document.createElement('td');
    tableInfo.innerHTML = info;
    return tableInfo;
}


export default createTable;