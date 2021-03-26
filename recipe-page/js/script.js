const recipe = {
    "@context": "https://www.easychineserecipes.com/tanghulu/",
    "@type": "Recipe",
    "name": "Tanghulu 糖葫芦",
    "author": "Erica from easychineserecipes.com",
    "datePublished": "2020-02-12",
    "description": [
      "Tanghulu （糖葫芦）is one of my favorite childhood snack from China. It is made with fruits on a skewer and layering the top with a coat of sugar.",
      "In Chinese, Tang (糖）means sugar，Hulu（葫芦）means howthorns, and I am going to show you how to create this most traditional type of Tanghulu today."
    ],

    "image": "childhood-tanghulu",
    "cookTime": "Prep: 10 mins. Cook: 5 mins. Cooling: 10 mins.",
    "size":"Servings: 3",
    
    "recipeIngredient": [ 
      "INGREDIENT:",
      "Howthorn",
      "300g White Sugar",
      "150g Water"
    ],

    "recipeInstructions": [
      "Steps:",
      "1. Wash the hawthorn and tie it with bamboo sticks.",
      "2. Add the clear water and sugar in a pot. Mix them well.",
      "3. Heat the pot under middle heat until bubbles appear and color of the sugar paste turns yellow. Use a chopstick to dip the syrup into the cold water and if it solidify quickly, the sugar coat is ready.",
      "4. Dip the hawthorn in the pot and quickly coat it with the sugar syrup. Let it cool.",
      "5. Ready to taste the amazing Tanghulu!"
    ],

    
    "image": "finish-tanghulu",

  }
  
  const titleElement = document.getElementById("title");
  
  titleElement.innerText = recipe.name;
  
  document.getElementById("author").innerText = recipe.author;
  
  document.getElementById("datePublished").innerText = recipe.datePublished;
  
  document.getElementById("description").innerText = recipe.description;
  
  document.getElementById("cookTime").innerText = recipe.cookTime;

  document.getElementById("size").innerText = recipe.size;
     
  document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;
  
  document.getElementById("recipeInstructions").innerText = recipe.recipeInstructions;