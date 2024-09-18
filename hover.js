document.querySelectorAll('.product-image').forEach(function(img) {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('image');

    img.addEventListener('mouseover', function() {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseout', function() {
        img.src = originalSrc;
    });
});
