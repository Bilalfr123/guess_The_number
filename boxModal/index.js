const popup = document.querySelector(".modal-box");
document.querySelector(".box").addEventListener("click", () => {
  if (popup.style.display == "none") {
    popup.style.display = "flex";
    // popup.style.transition = "all 1s ease-in";
  } else {
    popup.style.display = "none";
  }
  console.log("dd");
});
