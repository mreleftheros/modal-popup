const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalBtn = document.getElementById("modalBtn");


// function to display the modal
const displayModal = () => {
  modalContainer.classList.add("active");
  modalContainer.classList.add("modal__close");
};

// function to close Modal
const closeModal = e => {
  if(e.target.classList.contains("modal__close")) {
    modalContainer.classList.remove("active");
    modalContainer.classList.remove("modal__close");
  }
};

// event listeners
modalContainer.addEventListener("click", closeModal);
modalBtn.addEventListener("click", displayModal);