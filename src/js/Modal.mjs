export class Modal {
    constructor() {
    this.modal = document.getElementById('modal');
    this.btn = document.getElementById('open-modal');
    this.closeBtn = document.querySelector('.close');
    this.btn.addEventListener('click', () => {
        this.modal.style.display = 'block';
      });
      
      this.closeBtn.addEventListener('click', () => {
        this.modal.style.display = 'none';
      });
      
      window.addEventListener('click', (event) => {
        if (event.target == this.modal) {
          this.modal.style.display = 'none';
        }
      });
    }}