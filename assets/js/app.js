//create twenn to anime each circle
let circle = document.querySelectorAll('.circle');

//instance Timeline
let tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.staggerFromTo(circle, 1, {
    autoAlpha: 0,      //transparente
    scale: .1          //100% do tamanho original
  }, {
    autoAlpha: 1,      //100% visível
    scale: 1,
    bezier: {
      type: 'soft',
      values: [
        { x:  -50, y: -50 }, // P1
        { x: -100, y:   0 }, // P2
        { x:  -50, y:  50 }, // P3
        { x:   50, y: -50 }, // P4
        { x:  100, y:   0 }, // P5
        { x:   50, y:  50 }, // P6
        { x:    0, y:   0 }  // P7
      ]
    },
    stagger: .1
  });