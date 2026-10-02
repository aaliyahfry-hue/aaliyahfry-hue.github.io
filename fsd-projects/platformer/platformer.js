$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100) ; // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(850, 700, 50, 100, "red");
createPlatform(1000, 700, 50, 100, "black");
createPlatform(600, 700, 50, 100, "red");
createPlatform(400, 700, 50, 100, "black");
createPlatform(200, 700, 50, 100, "red");
 // bright green for a finished platform



    // TODO 3 - Create Collectables
createCollectable("steve", 600, 100, 0.2, 0.5);
createCollectable("diamond", 400, 170, 0.5, 0.7);
createCollectable("max", 1000, 500, 0.8, 0.3);




    
    // TODO 4 - Create Cannons
createCannon("top", 200, 300);
createCannon("right", 600, 800);
createCannon("bottom", 600, 700);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
