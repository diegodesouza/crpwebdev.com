(function() {
  var toggle = document.querySelector(".navbar-toggle")
    , collapse = document.querySelector(".navbar-collapse")
  ;

  toggle.addEventListener("click", function() {
    if (collapse.classList.contains("hidden-xs")) {
      collapse.classList.remove("hidden-xs");
    } else {
      collapse.classList.add("hidden-xs");
    }
  });
  
})();