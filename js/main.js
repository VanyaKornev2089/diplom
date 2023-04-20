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
