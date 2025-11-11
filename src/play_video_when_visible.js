document.addEventListener("DOMContentLoaded", function() {
    // Select all video elements
    const videos = document.querySelectorAll('video');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.2 });  // 20% of the video must be visible
});