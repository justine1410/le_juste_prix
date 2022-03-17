// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('.erreur');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.opacity="0";

// Etape 3 - Générer un nombre aléatoire
let nombresAleatoire =  Math.floor(Math.random() * 51 );
let coups = 0
let nombreChoisi;
function recommencer(){
     let reponse = confirm('voulez-vous recommencer ?')
    if(reponse){
       location.reload()
    }
}


console.log(nombresAleatoire);
// Etape 4 - Créer la fonction vérifier
function verifier(nombre){
    
    let instruction = document.createElement('div');

    if(nombre < nombresAleatoire){
        // Ajouter un contenu "#1(4) C'est plus !""
        instruction.innerHTML = "coups " + coups +" : " +nombreChoisi +" C'est plus !"
        
        // Ajouter les classes instruction et plus
        instruction.className = 'instruction plus'

    }else if (nombre > nombresAleatoire){
        instruction.innerHTML = "coups " + coups +" : " + nombreChoisi + " C'est moins !"

        instruction.className = 'instruction moins'

    }else{
        instruction.innerHTML = "coups " + coups +" : " + nombreChoisi + " Félicitation vous avez trouvé le juste nombre"
        instruction.className = 'instruction fini'
        input.disabled = true
         setTimeout(recommencer,500);

    }
    let instructions = document.querySelector("#instructions")
    instructions.prepend(instruction)


}

// Etape 5 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',()=>{

    if(isNaN(input.value)){
       error.style.opacity="1"
    }else{
        error.style.opacity="0"
    }
});

// Etape 6 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();    
    
    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor="red";
        error.style.opacity="1"
    }else{
        coups++;
        input.style.borderColor="silver";
        nombreChoisi = input.value;
        input.value = ''
        verifier(nombreChoisi)
    }

});

