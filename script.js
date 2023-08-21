function sidemenu(){
  console.log('clicked');
  var sidenavbarEl = document.getElementById('sidenavbar');
  
  if (sidenavbarEl.style.display === "block") {
    sidenavbarEl.style.display ="none";
    
  } else {
    sidenavbarEl.style.display ="block";
  }
}

function menu(){
  console.log('clicked');
  var navdEl = document.getElementById('navd')
  if (navdEl.style.display === 'block') {
    navdEl.style.display ="none";
  } else {
    navdEl.style.display ="block";
  }
}