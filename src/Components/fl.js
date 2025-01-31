// The book details
const modal = document.getElementById("more-info");
const modalContentDetails = document.getElementById("modal-content-details");
const closeModal = document.getElementById("close");

// Open modal and display book details
function openBookDetails(book) {
  const title = book.title || "Unknown Title";
  const description = book.description || "No description available.";
  const publishedDate = book.publishedDate || "Unknown";
  const publisher = book.publisher|| "N/A";

   modalContentDetails.innerHTML = `
    <h2>${title}</h2>
    <p><strong>Author(s):</strong> ${authors}</p>
    <p><strong>Published Date:</strong> ${publishedDate}</p>
    <p><strong>Page Count:</strong> ${publisher}</p>
    <p>${description}</p>
  `;

  modal.style.display = "block"; // Show the modal
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});