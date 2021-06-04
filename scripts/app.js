const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalBtn = document.getElementById("modalBtn");


// function to display the modal
const displayModal = () => {
  modal.classList.add("active");
};

// function to close Modal
const closeModal = () => {
  modal.classList.remove("active");
};

// event listeners
modalBtn.addEventListener("click", displayModal);
closeModalBtn.addEventListener("click", closeModal);