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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150, 650, 200, 10);
createPlatform(400, 550, 150, 10);
createPlatform(600, 450, 100, 10);
createPlatform(750, 350, 50, 10);
createPlatform(930, 350, 20, 10);
createPlatform(1050, 350, 10, 10);
createPlatform(1250, 350, 2, 10);
createPlatform(1350, 300, 30, 10);

    // TODO 3 - Create Collectables
createCollectable("grace", 230, 600);
createCollectable("steve", 450, 500);
createCollectable("kennedi", 600, 400);
createCollectable("max", 760, 300);
createCollectable("diamond", 1345, 250);
    
    // TODO 4 - Create Cannons


  createCannon("bottom", 1100, 600);
  createCannon("bottom", 1000, 500);
  createCannon("bottom", 900, 450);
  createCannon("bottom", 800, 400);
  createCannon("bottom", 1300, 350);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
