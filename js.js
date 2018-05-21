// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "sil";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var sil = document.getElementsByClassName("sil");
var i;
for (i = 0; i < sil.length; i++) {
  sil[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('kontrol');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("veriler").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Lütfen veri giriniz!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("veriler").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "sil";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < sil.length; i++) {
    sil[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}