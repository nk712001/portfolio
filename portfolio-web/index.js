function nav(){
  var tab = document.getElementsByClassName("nav-loc");
  var pre = document.getElementsByClassName("active");
  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function () {
      if (pre.length > 0) {
        pre[0].classList.remove("active");
      }
      this.classList.add("active");
    });
    }
}

nav();