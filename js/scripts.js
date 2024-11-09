function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => section.classList.add('hidden'));
    
    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  // Default to show the Home section on load
  document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
  });

  
  function showPost(title, content) {
    document.getElementById('postTitle').innerText = title;
    document.getElementById('postContent').innerText = content;
    document.getElementById('rightContent').style.display = 'block';
}

function hidePost() {
    document.getElementById('rightContent').style.display = 'none';
}


// const categoryCards = document.querySelectorAll('.category-card');
// const displaySection = document.getElementById('displaySection');
// const displayTitle = document.getElementById('displayTitle');
// const displayDescription = document.getElementById('displayDescription');
// const displayImagesContainer = document.createElement('div');
// displayImagesContainer.classList.add('display-images');
// displaySection.appendChild(displayImagesContainer);

// categoryCards.forEach(card => {
//   card.addEventListener('click', () => {
//     // Clear previous images
//     displayImagesContainer.innerHTML = '';

//     // Get data from clicked card
//     const title = card.getAttribute('data-title');
//     const description = card.getAttribute('data-description');
//     const images = card.getAttribute('data-images').split(',');

//     // Update title and description
//     displayTitle.textContent = title;
//     displayDescription.textContent = description;

//     // Loop through images and add them to the displayImagesContainer
//     images.forEach(imageSrc => {
//       const img = document.createElement('img');
//       img.src = imageSrc.trim(); // Trim to remove any extra spaces
//       img.alt = `${title} Image`;
//       displayImagesContainer.appendChild(img);
//     });

//     // Show the display section
//     displaySection.style.display = 'block';
//   });
// });



function toggleSubscribeForm() {
  var form = document.getElementById("subscribeForm");
  form.style.display = form.style.display === "none" || form.style.display === "" ? "flex" : "none";
}

window.addEventListener("scroll", function() {
  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");
  
  // Get the distance of the footer from the top of the page
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  // Check if the footer is visible in the viewport (bottom of the page)
  if (footerPosition <= windowHeight) {
    header.classList.add("hidden"); // Hide the header when the footer is visible
  } else {
    header.classList.remove("hidden"); // Show the header when the footer is not visible
  }
});
