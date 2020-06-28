function log(message) {
  console.log(message);
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('dragend', dragend);
});

function dragstart(e) {
  log('Starting dragging card')
  dropzones.forEach(dropzone => {
    dropzone.classList.add('highlight');
  });

  this.classList.add('is-dragging');
}

function dragend() {
  log('dropped card')
  dropzones.forEach(dropzone => {
    dropzone.classList.remove('highlight');
  });
  this.classList.remove ('is-dragging');
}

const dropzones = document.querySelectorAll('.dropzone');

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
});

function dragover() {
  this.classList.add('is-over');
  const draggedCard = document.querySelector('.is-dragging');
  this.appendChild(draggedCard);
}

function dragleave() {
  this.classList.remove('is-over');
}
