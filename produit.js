// Récupération de l'id 
const productId = window.location.search.substr(1); 


fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then((response) => response.json())
    .then(response => {
        
    let affichage="";

    // Affichage des produits
    affichage += `<div class="produit_left"> <img class="img_produit" src="${response.imageUrl}" alt="image d'ours en détails" > </div>
        <div class="produit_right">
        <h1 class="right_title">${response.name}</h1>
        <p class="right_description">${response.description}</p>
        <p class="right_price"><b>Prix: ${(response.price/100).toFixed(2).replace(".",",")}€</b></p>
        <label for="select__color">
            <h2 class="right_choice">Choisir une couleur</h2>
        </label> 
       <select class="section__choice" name="colors" id="select__color"> 
            </select>
        <div><button class="Btn_panier"> Ajouter au panier</button></div>
        </div> `
    document.getElementById("item__details").innerHTML = affichage;
    
    
    let choice = document.querySelector(".section__choice");

    //options pour les couleurs 
    
    response.colors.forEach (function (colors) {
        let option = document.createElement("option");
        option.value = colors;
        option.textContent = colors;
        choice.appendChild(option);
    })

    


    let cartBtn = document.querySelector(".addCart");

    // écoute du click pour le bouton mettre dans le panier 

    cartBtn.addEventListener('click', () => {
        let select = document.querySelector(".section__choice");
        response.selectColors = select.options[select.selectedIndex].value;
        addItemCart(response);

    })
})
// Message d'erreur
.catch(e => {
    errorMessage();
    console.log(e);
});

