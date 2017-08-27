window.onload = function () {
  window.loader = new Loader();

  loader.preload([
    "img/Bet_Line.png",
    "img/BG.png",
    "img/BTN_Spin.png",
    "img/BTN_Spin_d.png",
    "img/SYM1.png",
    "img/SYM2.png",
    "img/SYM3.png",
    "img/SYM4.png",
    "img/SYM5.png",
    "img/SYM6.png",
    "img/SYM7.png"
  ], function () {
    // creates renderer
    window.renderer = new Renderer();

    // starts render loop
    renderer.animate(0);

    const background = new PIXI.Sprite(loader.getTexture("img/BG.png"));


    renderer.addToRenderLoop(background);[]

    renderer.addToRenderLoop(background);
  });
};


