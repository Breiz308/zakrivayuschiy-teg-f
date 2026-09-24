const dialog = document.getElementById("dialog");
const openDialogButton = document.getElementById("open-dialog");

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});