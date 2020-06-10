/*
var collapsed = document.getElementsByClassName('.collapsed');
//var content = document.getElementsByClass('.content');
var i;

console.log("cw is " + collapsed.length);
for (i = 0; i < collapsed.length; i++) {
    collapsed[i].addEventListener("click", function() {
      console.log('click');
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      content.style.maxWidth = 100;
      /*if (content.style.maxWidth){
        content.style.maxWidth = null;
      } else {
        content.style.maxWidth = content.scrollHeight + "px";
      } 
    });
  }



/*
collapsed.addEventListener(focus, 'click', function() {
    console.log("active");
});




for (i = 0; i < content.width; i++) {
    console.log("active");

    collapsed[i].addEventListener('click', function() {
      
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  **/


  

/*   collapsed.addEventListener('click', function() {
      content.hidden = false;
      console.log("active");
  });

 function check(){
    this.classList.toggle("active");
    if (collapsed="active"){
    } else {
        content.hidden = true;
    } }; **/








var z = document.getElementById('ingredients');
var h = window.innerHeight;
var z_height = z.offsetHeight;
var ing_button = document.getElementById('ing_button');
var expanded = false;
console.log(h);
console.log(z_height);


// Catch scroll event
window.scroll(function() { 
  if (this.scrollTop()<h) { 
      z.style.z-index == 0;
  } else {
      z.style.z-index == 9999;
      console.log("floatin");
  }
});

// catch button click
ing_button.onclick = function() {
  console.log("click");
  if(!expanded){
    //ing_button.animate({'down' : z_height}, {duration : 400});
    z.style.marginTop = z_height;
    expanded = true;
  }
  else{
    ing_button.animate({'up' : z_height}, {duration : 400});
    expanded = false;
  }
}