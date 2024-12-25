document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const downloadBtn = document.getElementById('downloadBtn');
    const closeBtn = document.querySelector('.close-btn');

    // Add click event to all chat images
    document.querySelectorAll('.chat-image').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            
            // Update download button
            downloadBtn.onclick = function() {
                const link = document.createElement('a');
                link.href = modalImg.src;
                link.download = modalImg.src.split('/').pop(); // Get filename from URL
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        });
    });

    // Close modal when clicking the close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// Also add this to handle new images that are added dynamically
socket.on('chat message', function(msg) {
    // ... your existing message handling code ...
    
    // If new images are added, attach click handlers to them
    const newImages = document.querySelectorAll('.chat-image:not([data-modal-initialized])');
    newImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.setAttribute('data-modal-initialized', 'true');
        img.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });
});

// Replace or update your image upload handling code
document.getElementById('imageInput').addEventListener('change', async function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        // Clear the input
        e.target.value = '';
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to upload image');
    }
}); 