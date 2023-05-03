window.sr=ScrollReveal();
 
//Efecto para logo.
sr.reveal('.img-responsive2',{
    duration:7000,
    rotate:{
      x:2,
      y:180, 
    }
});

ScrollReveal().reveal('.nav-buttons',{ 
  rotate:{
    x:120,
    y:0,
    z:2 
  } 

});

sr.reveal('.cintilloLogoGobierno',{
  duration:2500,
  rotate:{
    x:120,
    y:0,
    z:2 
  }
});

ScrollReveal().reveal('.navbar-collapse', { duration: 2000 });
ScrollReveal().reveal('.container-fluid', { duration: 2000 });
ScrollReveal().reveal('.carousel', { duration: 3000 });

ScrollReveal().reveal('.wrapper', { 
  origin   : 'bottom',
  distance : '20px',
  duration : 3000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200 

});

ScrollReveal().reveal('.container-fluid', {
  origin   : 'bottom',
  distance : '20px',
  duration : 5000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200 
})

ScrollReveal().reveal('.col-sm-3', {
  origin   : 'bottom',
  distance : '20px',
  duration : 4000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200
});

ScrollReveal().reveal('.contactosEdit', { 
  origin   : 'rigth',
  distance : '100px',
  duration : 5000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200 

});
