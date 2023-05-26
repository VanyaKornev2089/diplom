// modal

const modalBlock = document.querySelector('.modal')
const modalButton = document.querySelector('.feedback__button')
const modalWrapper = document.querySelector('.modal-wrapper')

modalButton.addEventListener('click', () => {
    modalBlock.classList.add('active')
})

modalBlock.addEventListener('click', (event) => {
    if(event.target === modalBlock){
        modalBlock.classList.remove('active')
    }
})

// slider

const slider = () => {
    const sliderItems = document.querySelectorAll('.feedback-content-item')
    const sliderArrowRight = document.querySelector('.feedback-content__arrow--right')
    const sliderArrowLeft = document.querySelector('.feedback-content__arrow--left')
    const sliderLength = sliderItems.length;

    let currentSlideIndex = 0;
  
    const showSlide = (index) => {
      sliderItems.forEach((item) => {
        item.style.display = 'none';
      });

      sliderItems[index].style.display = 'block';
    };

    showSlide(currentSlideIndex);

    sliderArrowRight.addEventListener('click', () => {
      currentSlideIndex++;
      if (currentSlideIndex >= sliderLength) {
        currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
    });

    sliderArrowLeft.addEventListener('click', () => {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = sliderLength - 1;
      }
      showSlide(currentSlideIndex);
    });
  };
  
  slider();