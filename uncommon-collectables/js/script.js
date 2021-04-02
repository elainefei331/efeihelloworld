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
        flowerColor.forEach(function(color) {
         flowerContainer.classList.add(color)
        })
        
        var filterPink = document.querySelector('.pink');
        filterPink.addEventListener("click", function(){

          if (flowerContainer.classList.contains("pink")) {
            flowerContainer.style.display = "block";
          } else {
            flowerContainer.style.display = "none";
          }
        })



        //var filterPink = document.querySelector('.pink');
        //filterPink.addEventListener("click", function(){

        //  if (flowerContainer.classList.contains("pink")) {
        //    flowerContainer.style.background = "red";
        //  } else {
        //    flowerContainer.style.background = "white";
        //  }
        //})




    });
  }
  