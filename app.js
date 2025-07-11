const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})   

//Download button cv

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.querySelector(".download-cv-btn");

  downloadBtn.addEventListener("click", function () {
    const fileUrl = "assets/cv/cv.pdf"; // Make sure cv.pdf is in the same folder or correct path

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Kiran_CV.pdf"; // Optional: rename the file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

// Image preview
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const previewButtons = document.querySelectorAll(".preview-btn");

  previewButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const imgPath = button.getAttribute("data-image");
      modalImg.src = imgPath;
      modal.style.display = "flex";
      document.body.classList.add("blurred");
    });
  });

  // Hide modal and remove blur on click outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
      document.body.classList.remove("blurred");
    }
  });
});

// 💻 JavaScript to Show Video
function openVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("demoVideo");
  overlay.style.display = "flex";
  video.currentTime = 0;
  video.play();
}

function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("demoVideo");
  video.pause();
  overlay.style.display = "none";
}


