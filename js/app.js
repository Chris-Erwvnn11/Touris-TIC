function menuToogle() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    var y = document.getElementById('icon');
    if (y.style.backgroundColor === "black"){
        y.style.backgroundColor = "white";
        y.style.color = "black";
    }
  }