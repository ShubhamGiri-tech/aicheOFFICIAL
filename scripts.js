$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $("#carouselButton").children("span").removeClass('fa-pause');
      $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
      $("#mycarousel").carousel('cycle');
      $("#carouselButton").children("span").removeClass('fa-play');
      $("#carouselButton").children("span").addClass('fa-pause');
    }
  });
});
$(document).ready(function () {
  $("#myloginj").click(function () {
    $("#loginModal").modal();
  });
});
$(document).ready(function () {
  $("#myreservebtnj").click(function () {
    $("#reservationmodel").modal();
  });
});




/*function myFunction() {
  var x = document.getElementsByClassName("darktheme");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "black";
  }
  var y = document.getElementsByClassName("whitecol");
  var j;
  for (j = 0; j < y.length; j++) {
    x[j].style.color = "white";
  }
  var z = document.getElementsByClassName("whitecol1");
  var k;
  for (k = 0; k < z.length; k++) {
    x[k].style.color = "rgb(255, 196, 0)";
  }
  var t = document.getElementsByClassName("whitecol2");
  var l;
  for (l = 0; l < t.length; l++) {
    x[l].style.color = "greenyellow";
  }

}





// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
      // if it's light -> go dark
      if(themeStylesheet.href.includes('light')){
          themeStylesheet.href = 'dark-theme.css';
          themeToggle.innerText = 'Switch to light mode';
      } else {
          // if it's dark -> go light
          themeStylesheet.href = 'light-theme.css';
          themeToggle.innerText = 'Switch to dark mode';

      }
  })
})*/


/*New one*/
function myFunction() { 
  // Obtains an array of all <link> 
  // elements. 
  // Select your element using indexing. 
  var theme = document.getElementsByTagName('link')[0]; 

  // Change the value of href attribute  
  // to change the css sheet. 
  if (theme.getAttribute('href') == 'light-theme.css') { 
      theme.setAttribute('href', 'dark-theme.css'); 
      var elementi1 = document.getElementById("theme-toggle");
      elementi1.innerHTML = "Light mode";
  } else { 
      theme.setAttribute('href', 'light-theme.css'); 
      var elementi2 = document.getElementById("theme-toggle");
      elementi2.innerHTML = "Dark mode";
  } 
} 