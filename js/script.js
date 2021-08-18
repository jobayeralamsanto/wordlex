// script for home page range input

var slide = document.getElementById("myRange");
var outpu = document.getElementById("demo");
outpu.innerHTML = slide.value;

slide.oninput = function () {
  outpu.innerHTML = this.value;
};

var slider = document.getElementById("dailyRange");
var output = document.getElementById("daily");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// script for home page dropdown

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myBosterdown").classList.toggle("show");
          }
    
          // Close the dropdown if the user clicks outside of it
          window.onclick = function (event) {
            if (!event.target.matches(".dropbtn")) {
              var dropdowns = document.getElementsByClassName("bosterdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                  openDropdown.classList.remove("show");
                }
              }
            }
          };


