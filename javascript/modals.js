const openModalButton = document.getElementById("openOne");
openModalButton.addEventListener("click", () => {
  const modalContent = document.getElementById("modal-one-pice");
  console.log('modalContent',modalContent)
  modalContent.classList.add("show");
  document.body.appendChild(modalContent);
});
