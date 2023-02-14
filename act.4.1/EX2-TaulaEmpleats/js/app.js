let tabla = document.getElementById("lista-container");
let empleatsArray = [
    { "id": 1, "name": "Pere", "surname": "Ferrer", "telefon": "648-898-769", "especialitat": ["Seguritat informàtica", "VPS", "Xarxes"], "departament": "Sistemes" },
	{ "id": 2, "name": "Joan", "surname": "Gomila", "telefon": "631-445-779", "especialitat": ["Python"], "departament": "desenvolupament" },
	{ "id": 3, "name": "Sara", "surname": "Gómez", "telefon": "653-378-889", "especialitat": ["Java"], "departament": "desenvolupament" },
	{ "id": 4, "name": "Xavi", "surname": "Caraibe", "telefon": "908-456-789", "especialitat": ["Nónimes"], "departament": "Administració" }
];

for (let empleat of empleatsArray) {
    let row =  `<tr>
                    <th scope="row">${empleat.id}</th>
                    <td>${empleat.name} ${empleat.surname}</td>
                    <td>${empleat.telefon}</td>
                    <td>${empleat.especialitat.toString()}</td>
                    <td>${empleat.departament}</td>
                </tr>
                `;
    tabla.innerHTML += row;
}