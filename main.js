  const sliders = document.querySelectorAll('.slider');
  const sliderThumbs = document.querySelectorAll('.slider-scrollbar-thumb');

  console.log(sliders)

  for(let i = 0; i < sliders.length; i++) {
    let isDown = false;
    let startX;
    let scrollLeft;

    //Mouse events
    sliders[i].addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - sliders[i].offsetLeft;
        scrollLeft = sliders[i].scrollLeft;
      });
      sliders[i].addEventListener('mouseleave', () => {
        isDown = false;
      });
      sliders[i].addEventListener('mouseup', () => {
        isDown = false;
      });
      sliders[i].addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliders[i].offsetLeft;
        const walk = (x - startX);
        sliders[i].scrollLeft = scrollLeft - walk;
        updateThumbPosition();
      });

      //Touch events
      sliders[i].addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - sliders[i].offsetLeft;
        scrollLeft = sliders[i].scrollLeft;
      });
    
      sliders[i].addEventListener('touchend', () => {
        isDown = false;
      });
    
      sliders[i].addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - sliders[i].offsetLeft;
        const walk = (x - startX);
        sliders[i].scrollLeft = scrollLeft - walk;
        updateThumbPosition();
      });
    
      function updateThumbPosition() {
        const scrollRatio = sliders[i].scrollLeft / (sliders[i].scrollWidth - sliders[i].clientWidth);
        const thumbMaxTranslate = sliders[i].clientWidth - sliderThumbs[i].offsetWidth;
        sliderThumbs[i].style.transform = `translateX(${scrollRatio * thumbMaxTranslate}px)`;
      }
    
      updateThumbPosition();
  }

