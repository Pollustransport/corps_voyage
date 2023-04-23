function bookTicket() {
  var x = document.getElementById("drop");
  x.className = "responsive-nav";
  window.open("https://forms.gle/7xbtCVyiExVu3VKr5", "_blank");
}

function defaultRoute() {
  var x = document.getElementById("drop");
  x.className = "responsive-nav";
}

function joinWhatsApp() {
  window.open("https://chat.whatsapp.com/HlR8Uxvm5mc9kUy9pbnpQV", "_blank");
}

function handleDrop() {
  var x = document.getElementById("drop");
  if (x.className === "responsive-nav") {
    x.className += " show";
  } else {
    x.className = "responsive-nav";
  }
}
