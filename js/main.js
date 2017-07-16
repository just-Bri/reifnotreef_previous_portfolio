// This forces a reload of content when the display is resized.
// I was having issues with my toggle permanently hiding my navigation when I resized the display
// When you use Chrome Inspect and drag to resize it looks funky as hell, but that doesn't happen in real world situations.
// I will look for a cleaner way to do this in the future
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});