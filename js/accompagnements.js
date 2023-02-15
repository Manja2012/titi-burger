fetch('https://titi.startwin.fr/products/type/accompagnement').then(function (response) {
    return response.json();
}).then(function (data) {
    const div = document.getElementById('add-accompagnements');
    console.log(data) 
    for (let i = 0; i < 4; i++){
        div.innerHTML += `
        <div class="burgers">
                <input class="burger__input" type="radio">
                <img class="burger__img burger__img--position" src="${data[i].image}" alt="${data[i].name}">
                <h2 class="burger__title">${data[i].name}</h2>
                <p class="burger__text">${data[i].name}</p>
            </div>
        `
        }
    });

       
   



/*
https://titi.startwin.fr/products/type/burger
https://titi.startwin.fr/products/type/accompagnement
https://titi.startwin.fr/products/type/boisson
https://titi.startwin.fr/products/type/dessert
*/