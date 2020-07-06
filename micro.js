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






/* https://stackoverflow.com/questions/29344327/js-css-how-to-change-z-index-value-after-scrolling-down-past-1200-pixels-in-he **/

var z = document.getElementById('ingredients');
var h = window.innerHeight;
var z_height = z.offsetHeight;
var ing_button = document.getElementById('ing_button');
var expanded = false;
var body = document.getElementById('scroll');

var scrollval = body.offsetHeight;

var totalheight = z_height + ing_button.offsetHeight;
console.log(scrollval);
console.log(totalheight);


// Catch scroll event
window.scroll(function() { 
  if (this.scrollTop()<h) { 
      (z.style.zIndex) = 0;
      
  } else {
      (z.style.zIndex) = 9999;
      console.log("floatin");
  }
});

// catch button click
ing_button.onclick = function() {
  if(!expanded){
    console.log("move ingredients div below button");
    z.animate([
    { transform: 'translateY(-'+totalheight+'px)' }, 
      { transform: 'translateY(0px)' }
    ], {
      duration: 450,
      //fill: "forwards"
    });
    expanded = true;
    console.log("expanded");
    //https://stackoverflow.com/questions/42231605/is-there-a-jquery-alternative-to-position-sticky
    (z.style.position) = 'sticky';
    (z.style.top) = '32px';
  }
  else{
    console.log("move ingredients div above button")
    z.animate([
      { transform: 'translateY('+totalheight+'px)' },
      { transform: 'translateY(0px)' },
    ], { 
      duration: 450,
    });
    expanded = false;
    console.log("not expanded");
    (z.style.position) = 'static';
    (z.style.bottom) = '0px';
  }
}