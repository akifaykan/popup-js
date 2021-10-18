const openBtn = document.getElementById('open-modal'),
    closeBtn = document.querySelectorAll('.close-modal'),
    modalFixed = document.getElementById('modal-fixed'),
    modalContainer = document.getElementById('modal-container');
    
if (openBtn && modalContainer) {
    openBtn.addEventListener('click', openModal);
    closeBtn.forEach((c) => c.addEventListener('click', closeModal));
    modalFixed.addEventListener('click', closeModal);

    function openModal() {
        modalContainer.classList.add('show-modal');
        modalFixed.classList.add('open');
    }

    function closeModal() {
        modalContainer.classList.remove('show-modal');
        modalFixed.classList.remove('open');
    }
}
