const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalBtn = document.getElementById("modalBtn");


// function to display the modal
const displayModal = () => {
  modal.classList.add("active");
};

// event listeners
modalBtn.addEventListener("click", displayModal);
closeModal.addEventListener("click", closeModal);