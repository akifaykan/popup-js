/*============== SHOW MODAL ===============*/
const openBtn = document.getElementById('open-modal'),
    modalFixed = document.getElementById('modal-fixed'),
    closeBtn = document.querySelectorAll('.close-modal'),
    modalContainer = document.getElementById('modal-container');

const showModal = (openButton, modalContent) => {
    if (openButton && modalContent) {
        openButton.addEventListener('click', () => {
            modalContent.classList.add('show-modal');
            modalFixed.classList.add('open');
        });
    }
};

showModal(openBtn, modalContainer);

/*============== CLOSE MODAL ===============*/
closeBtn.forEach((c) => c.addEventListener('click', closeModal));
modalFixed.addEventListener('click', closeModal);

function closeModal() {
    modalContainer.classList.remove('show-modal');
    modalFixed.classList.remove('open');
}
