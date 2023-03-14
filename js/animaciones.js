window.sr=ScrollReveal();
 
//Efecto para logo.
sr.reveal('.img-responsive2',{
    duration:9000,
    rotate:{
      x:2,
      y:180, 
    }
});

sr.reveal('.cintilloLogoGobierno',{
  duration:1500,
  rotate:{
    x:120,
    y:0,
    z:2 
  }
});

ScrollReveal().reveal('.navbar-collapse', { duration: 2700 });
ScrollReveal().reveal('.carousel', { duration: 4000 });

ScrollReveal().reveal('.productoImagen', {
  origin   : 'bottom',
  distance : '20px',
  duration : 2000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200
});
