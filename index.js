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
