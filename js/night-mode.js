const btn = document.querySelector('.btn-toggle');
btn.addEventListener('click', function() {
   var element = document.getElementById("SearchQuery");
   element.classList.toggle("dark-theme");
   // var element2 = document.getElementById("mainNav");
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   var newatt = document.createAttribute("style");
   newatt.value = 'background-color: #343a40 !important;';
   // Then toggle (add/remove) the .dark-theme class to the body
   document.body.classList.toggle('dark-theme');
});
const btn2 = document.getElementById('ToggleNightMode2');
btn2.addEventListener('click', function() {
   var footer = document.getElementById("footer");
   footer.classList.toggle('dark-theme');
   var newatt = document.createAttribute("style");
   newatt.value = 'background-color: #343a40 !important;';
   document.body.classList.toggle('dark-theme');
});