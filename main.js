$(document).ready(function() {
  let img = $("img");
  let h1 = $("h1");
  let titulo = $("#titulo");
  let parrafos = $("p");
  let opcionesMenu = $("ul li");
  let tl = new TimelineMax({ paused: true });
  let cargadorCuadrado = $(".cuadrado");
  let tlCargador = new TimelineMax({ repeat: 2, onComplete: complete });

  function complete() {
    tl.play();
  }
  //TweenLite.to(img, 3, { x: 500 });
  //TweenLite.from(img, 3, { x: 500 });
  //TweenLite.set(img, { x: 400 });
  //TweenLite.fromTo(img, 3, { x: -500 }, { x: 0 });
  //TweenLite.from(titulo, 1, { autoAlpha: 0 });
  //TweenLite.set(p2, { x: 400 });
  tl.from(titulo, 0.5, {
    y: -100,
    ease: Power4.easeOut,
    autoAlpha: 0
  })
    .staggerFrom(
      opcionesMenu,
      0.5,
      {
        cycle: { scale: [2, 0.5] },
        y: +30,
        autoAlpha: 0,
        ease: Power4.easeOut
      },
      0.1 //lo que se va a demorar en salir cada botón
    )
    .staggerFrom(
      parrafos,
      0.5,
      {
        cycle: { x: [50, -50] },
        autoAlpha: 0,
        ease: Power4.easeOut
      },
      0.5
    );

  tlCargador.staggerTo(
    cargadorCuadrado,
    0.5,
    {
      cycle: { opacity: [0, 0, 0, 0] }
    },
    0.2
  );
});
