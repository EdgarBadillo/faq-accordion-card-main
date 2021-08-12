let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");

//     // toggle btw hiding and showing
//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

function clearAll() {
  document.querySelectorAll(".panel").forEach((el) => {
    el.style.display = "none";
  });
}

function handleclick(evt) {
  clearAll();
  acc[evt].nextElementSibling.style.display = "block";
}
