document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.text');
    const cursorElement = document.querySelector('.cursor');
  
    const textWidth = textElement.offsetWidth;
  
    cursorElement.style.left = textWidth + 'px';
  });
  