let head = ["Name", "Strength", "Age"];
let heroes = [
    {name: `Black Panther`, strength: 66, age: 53},
    {name: `Captain America`, strength: 79, age: 137},
    {name: `Captain Marvel`, strength: 97, age: 26},
    {name: `Hulk`, strength: 80, age: 49},
    {name: `Iron Man`, strength: 88, age: 48},
    {name: `Spider-Man`, strength: 78, age: 16},
    {name: `Thanos`, strength: 99, age: 1000},
    {name: `Thor`, strength: 95, age: 1000},
    {name: `Yon-Rogg`, strength: 73, age: 52}
]
let notification = document.querySelector('#notification')
notification.innerHTML = "Sorting by Name, order: ASC"

function createTable(heroesArr) {
    let placeholder = document.getElementById("placeholder");
    let tbl = document.createElement("table");
    tbl.appendChild(createButtons());
    for (let i = 0; i < 9; i++) {
        let row = document.createElement("tr");
        insertCell(`${heroesArr[i].name}`, row);
        insertCell(`${heroesArr[i].strength}`, row);
        insertCell(`${heroesArr[i].age}`, row);
        tbl.appendChild(row);
    }
    placeholder.innerHTML = "";
    placeholder.appendChild(tbl);
}

function insertCell(str, row) {
    let cell = document.createElement("td");
    cell.innerText = str;
    row.appendChild(cell);
}

function createButtons() {
    let row = document.createElement("tr");
    let i = 0;
    while (i < 3) {
        let cell = document.createElement("th");
        cell.innerText = head[i];
        if (i === 0)
            cell.setAttribute("onclick", "byName()");
        else if (i === 1) {
            cell.setAttribute("onclick", "byStrength()");
        } else {
            cell.setAttribute("onclick", "byAge()");
        }
        row.appendChild(cell);
        i++;
    }
    return row;
}

let sortN = true;

function byName() {
    if (!sortN) {
        heroes.sort((a, b) => a.name > b.name ? 1 : -1);
        notification.innerHTML = "Sorting by Name, order: ASC"
        sortN = true;
    } else {
        heroes.sort((a, b) => a.name < b.name ? 1 : -1);
        notification.innerHTML = "Sorting by Name, order: DESC"
        sortN = false
    }
    createTable(heroes);
}

let sortS = false;

function byStrength() {
    if(!sortS) {
        heroes.sort((a, b) => a.strength > b.strength ? 1 : -1);
        notification.innerHTML = "Sorting by Strength, order: ASC"
        sortS = true;
    }else{
        heroes.sort((a, b) => a.strength < b.strength ? 1 : -1);
        notification.innerHTML = "Sorting by Strength, order: DESC"
        sortS = false;
    }
    createTable(heroes)
}

let sortA = false;

function byAge() {
    if(!sortA) {
        heroes.sort((a, b) => a.age > b.age ? 1 : -1);
        notification.innerHTML = "Sorting by Age, order: ASC"
        sortA = true;
    }else{
        heroes.sort((a, b) => a.age < b.age ? 1 : -1);
        notification.innerHTML = "Sorting by Age, order: DESC"
        sortA = false;
    }
    createTable(heroes)
}

createTable(heroes);