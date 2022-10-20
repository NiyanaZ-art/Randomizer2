//https://www.texastribune.org/2022/05/25/uvalde-school-shooting-victims/
// victims of the Uvalde school shooting

let angels = [
    {
      name: "Makenna Lee Elrod",
      color: "10",
    },
    {
      name: "Layla Salazar",
      color: "11",
    },
    {
      name: "Maranda Mathis",
      color: "11",
    },
    {
      name: "Nevaeh Bravo",
      color: "10",
    },
    {
      name: "Jose Manuel Flores Jr.",
      color: "10",
    },
    {
      name: "Xavier Lopez",
      color: "10",
    },
     {
      name: "Tess Marie Mata",
      color: "10",
    },
     {
      name: "Rojelio Torres",
      color: "10",
    },
     {
      name: "Eliahna Amyah Garcia",
      color: "9",
    },
     {
      name: "Eliahna A. Torres",
      color: "10",
    },
     {
      name: "Annabell Guadalupe Rodriguez",
      color: "10",
    },
     {
      name: "Jackie Cazares",
      color: "9",
    },
     {
      name: "Uziyah Garcia",
      color: "?",
    },
     {
      name: "Jayce Carmelo Luevanos",
      color: "10",
    },
     {
      name: "Maite Yuleana Rodriguez",
      color: "10",
    },
     {
      name: "Jailah Nicole Silguero",
      color: "10",
    },
     {
      name: "Irma Garcia",
      color: "48",
    },
     {
      name: "Eva Mireles",
      color: "44",
    },
     {
      name: "Amerie Jo Garza",
      color: "10",
    },
     {
      name: "Alexandria Aniyah Rubio",
      color: "10",
    },
     {
      name: "Alithia Ramirez",
      color: "10",
    },
  ];
  
  let randomIndex;
  let animating = false;
  
  function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);
    
    text("click to randomize", 50, 50); 
  }
  
  
  function draw() {
    
    
    if(animating == true){
      ellipse(random(width), random(height), random (50,200));
      
    }
    
  }
  
  function randomizer(){
  animating = false;
    
    
  if (angels[0]) {
  //this displays random name and splices it out of array
    background(random(255), random(255), random(255));
     randomIndex = int(random(angels.length));
     text(angels[randomIndex].name + " was " + angels[randomIndex].color, 50, 50);
     // text(angels[randomIndex].name + " was this old " + angels[randomIndex].color, 50, 50);
     angels.splice(randomIndex, 1);
   } else {
     background(random(200,255));
     text("It took the Policemen 70 mintutes to kill the perpetrator.", 50, 50);
   }
    
  }
  
  function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);
    
  
  }
  