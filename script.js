const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function()
{
  let offset = window.pageYOffset;
  /*console.log ('Offset'+ offset); 
  console.log ('offset*0.7');
  what is happening here is the photo will be at position offset*0.7 -- if value is 1, the image stays in place*/
  parallax.style.backgroundPositionY = offset*0.4 + "px" ;
})

