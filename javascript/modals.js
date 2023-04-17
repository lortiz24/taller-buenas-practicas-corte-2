const openModalButton = document.getElementById("openModal");
openModalButton.addEventListener("click", () => {
  const modalContent = document.createElement("div");
  modalContent.innerHTML = `
      <div class="modal">
        <div class="modal-content">
          <h2>Contenido del modal</h2>
          <p>Más información sobre la serie de anime Shingeki no Kyojin.</p>
          <button id="closeModal">Cerrar</button>
        </div>
      </div>
    `;
  document.body.appendChild(modalContent);
});
