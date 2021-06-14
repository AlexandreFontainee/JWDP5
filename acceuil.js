
// récupération de l'api

fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then((response) => {
  
    console.log(response);

    // variable pour afficher
    let affichage = "";

    // création de la boucle pour afficher les produits
    for(let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      
      // affichage html
      affichage += `<li class="card">
      
      <img class="card-img-top" src="${response[i].imageUrl}" alt="Images ours" >
      <h2 class="card-title">${response[i].name}</h2>
      <p class="card-text">${response[i].description}</p>
      <p class="prix">${(response[i].price/100).toFixed(2).replace(".",",")}€</p>
      <a class="btn btn-primary" href="./produit.html?${response[i]._id}" <b>En savoir plus</b></a></li>`
    }
    
    document.getElementById("bear").innerHTML = affichage
})

// message d'erreur

.catch(e => {
    errorMessage();
    console.log(e);
});