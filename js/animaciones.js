window.sr=ScrollReveal();
 
//Efecto para logo.
sr.reveal('.img-responsive2',{
    distance:'50px',
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
  origin   :'right',
  duration:2000,
  distance: '1000px'
/*rotate:{
    x:120,
    y:0,
    z:2 
  }*/
});

ScrollReveal().reveal('.navbar-collapse', { duration: 2000 });
ScrollReveal().reveal('.container-fluid', { duration: 2000 });
ScrollReveal().reveal('.carousel', { duration: 3000 });

ScrollReveal().reveal('.wrapper', { 
  origin   : 'right',
  distance : '20px',
  duration : 3000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200 

});

ScrollReveal().reveal('.container-fluid', {
  origin   : 'right',
  distance : '20px',
  duration : 3500,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200 
})

ScrollReveal().reveal('.col-sm-3', {
  origin   : 'right',
  distance : '20px',
  duration : 3200,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200
});

ScrollReveal().reveal('.contactosEdit', { 
  origin   : 'right',
  distance : '150px',
  duration : 3000,
  easing   : 'cubic-bezier(0.5, 0, 0, 1)',
  interval : 200 

});
