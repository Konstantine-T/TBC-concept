  const slider = document.querySelector('.slider');
  const sliderThumb = document.querySelector('.slider-scrollbar-thumb');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
    updateThumbPosition();
  });

  function updateThumbPosition() {
    const scrollRatio = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
    const thumbMaxTranslate = slider.clientWidth - sliderThumb.offsetWidth;
    sliderThumb.style.transform = `translateX(${scrollRatio * thumbMaxTranslate}px)`;
  }

  updateThumbPosition();