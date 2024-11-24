function downloadPDF() {
  const button = document.getElementById("downloadButton");

  // Trigger the PDF download
  const link = document.createElement("a");
  link.href = "/assests/Nagarjuna'sCV.pdf"; // Replace with the actual path to your PDF
  link.download = "Nagarjuna's_CV.pdf"; // The name of the file when it's downloaded
  link.click();
}

function openPDF() {
  const link = document.createElement("a");
  link.href = "/assests/Nagarjuna'sCV.pdf"; // Path to your PDF file
  link.target = "_blank"; // Opens the PDF in a new tab
  link.click();
}

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Add event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all nav items
      document.querySelectorAll(".navbar-nav .nav-item").forEach((item) => {
        item.classList.remove("active");
      });

      // Add 'active' class to the clicked nav item
      this.parentElement.classList.add("active");
    });
  });
});

window.addEventListener('load', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelector('.jumbotron').style.paddingTop = navbarHeight + 'px';
});
