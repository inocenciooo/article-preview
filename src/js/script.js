const shareButton = document.querySelector(".share");
const shareInfo = document.querySelector(".share-info");

shareButton.addEventListener("click", () => {
  shareInfo.classList.toggle("active");
  shareButton.classList.toggle("active");
});
