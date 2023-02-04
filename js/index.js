const burgersEl = document.querySelector("#burgers");
// 1. Aller chercher la liste des burgers en JSON
fetch("https://titi.startwin.fr/products/type/burger")
  // 2. Convertir (parser) le JSON en Objet JS
  .then(function (response) {
    return response.json();
  })
  .then(function (burgers) {
     console.log(burgers);
    // 3. Parcourir le tableau
    let html = "";
    for (const burger of burgers) {
      /**
       * 4. Pour chaque élément du tableau, récupérer
       *    - le nom
       *    - le prix
       *    - la description
       *    - l’id
       *    - le chemin vers l’image
       */
      // 5. Générer le HTML pour chaque burger

       html += generateBurgerHtml(burger, "burger-stan");
        }
        burgersEl.innerHTML = html;
  });

function generateBurgerHtml(burger,inputName = "burger") {
  const id = burger._id;
  const name = burger.name;
  const description = burger.description;
  const price = burger.price.$numberDecimal;
  const img = burger.image;
  return `<div>
				<h3 class="burger-name">
                    <label for="${id}"> ${name}</label>
                    <input type="radio" name="${inputName}" id="${id}">
                </h3>     
				<img width="200" class="burger-img"  alt="Une ambiance authentique" src="${img.replaceAll("\\",
                "/").replace('/images', '/asset/img')}">
				<p class="burger-price">${price}</p>
				<p class="burger-desc">${description}</p>
    </div>`
}
