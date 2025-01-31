document.addEventListener('DOMContentLoaded', function () {
    const photoUploadForm = document.getElementById('photoUploadForm');
    const photoUploadInput = document.getElementById('photoUpload');
    const gallerySection = document.getElementById('gallery-photos');

    photoUploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const file = photoUploadInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imgElement.classList.add('uploaded-photo');
                gallerySection.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
            alert('Photo uploaded successfully!');
            photoUploadInput.value = ''; // Clear input
        } else {
            alert('Please select a file to upload.');
        }
    });
});


    // Handle enquiry form submission
    const enquiryForm = document.getElementById('enquiryForm');
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        console.log('Enquiry submitted:', { name, email, message });
        alert('Thank you for your enquiry. We will get back to you soon!');
        enquiryForm.reset(); // Clear the form
    });

    // Simple search functionality
    const searchForm = document.querySelector('form.d-flex');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = this.querySelector('input[type="search"]').value;
        alert(`You searched for: ${searchTerm}`);
        // Implement actual search functionality here
    });