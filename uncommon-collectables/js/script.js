var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyIapJiJE1ttSszk" }).base("appgqZmkIkYnY0Ojk"
  );

    base("flowercollection").select({}).eachPage(gotPageOfFlowers, gotAllFlowers);
    
const flowers = [];

function gotPageOfFlowers(records, fetchNextPage) {
    console.log("gotPageOfFlowers()");
    flowers.push(...records);
    fetchNextPage();
  }

  function gotAllFlowers(err) {
    console.log("gotAllFlowers()");
  
    //if (err) {
    //  console.log("error loading books");
    //  console.error(err);
   //   return;
   // }
  
    consoleLogFlowers();
    showFlowers();
  }

function consoleLogFlowers() {
    console.log("consoleLogFlowers()");
    flowers.forEach((flower) => {
      console.log("Flower:", flower);
    });
  }
  
  function showFlowers() {
    console.log("showFlowers()");
    flowers.forEach((flower) => {
        
        //var flowerTitle = document.createElement("h2");
        //flowerTitle.innerText = flower.fields.title;
        //document.body.append(flowerTitle);

        //var nameofFamily = document.createElement("p");
        //nameofFamily.innerText = flower.fields.family;
        //document.body.append(nameofFamily);

        //var flowerImage = document.createElement("img");
        //flowerImage.src = flower.fields.flower_image[0].url;
        //document.body.append(flowerImage);

        var flowerContainer = document.createElement("div");
        flowerContainer.classList.add("flower-container");
        document.querySelector(".container").append(flowerContainer);

        var flowerTitle = document.createElement("h1");
        flowerTitle.classList.add("flower-title");
        flowerTitle.innerText = flower.fields.title;
        flowerContainer.append(flowerTitle);

        var flowerFamily = document.createElement("h2");
        flowerFamily.classList.add("flower-family");
        flowerFamily.innerText = flower.fields.family;
        flowerContainer.append(flowerFamily);

        var flowerImage = document.createElement("img");
        flowerImage.classList.add("flower-image")
        flowerImage.src = flower.fields.flower_image[0].url;
        flowerContainer.append(flowerImage);

        flowerContainer.addEventListener("click", function(){
          flowerFamily.classList.toggle("active");
          flowerImage.classList.toggle("active");
        })

        var flowerColor = flower.fields.color;
        var flowerColor = flower.fields.color;
        flowerContainer.classList.add(flowerColor);
        
        var filterPink = document.querySelector('.pink');
        filterPink.addEventListener("click", function(){

          if (flowerContainer.classList.contains("pink")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })

        var filterRed = document.querySelector('.red');
        filterRed.addEventListener("click", function(){

          if (flowerContainer.classList.contains("red")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })

        var filterPurple = document.querySelector('.purple');
        filterPurple.addEventListener("click", function(){

          if (flowerContainer.classList.contains("purple")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })

        var filterWhite = document.querySelector('.white');
        filterWhite.addEventListener("click", function(){

          if (flowerContainer.classList.contains("white")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })
        
        var filterYellow = document.querySelector('.yellow');
        filterYellow.addEventListener("click", function(){

          if (flowerContainer.classList.contains("yellow")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })
        
        var filterBlue = document.querySelector('.blue');
        filterBlue.addEventListener("click", function(){

          if (flowerContainer.classList.contains("blue")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })

        
        var filterOrange = document.querySelector('.orange');
        filterOrange.addEventListener("click", function(){

          if (flowerContainer.classList.contains("orange")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })
        
        var filterBlack = document.querySelector('.black');
        filterBlack.addEventListener("click", function(){

          if (flowerContainer.classList.contains("black")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })

        var filterMulti_colored = document.querySelector('.multi-colored');
        filterMulti_colored.addEventListener("click", function(){

          if (flowerContainer.classList.contains("multi-colored")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })
        


    });
  }
  