function log(message) {
  console.log(message);
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  // card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart(e) {
  log('Starting dragging card')
  dropzones.forEach(dropzone => {
    dropzone.classList.add('highlight');
  });

  this.classList.add('is-dragging');
}

// function drag() {
  // log('while dragging card')
// }

function dragend() {
  log('dropped card')
  dropzones.forEach(dropzone => {
    dropzone.classList.remove('highlight');
  });
  this.classList.remove ('is-dragging');
}

const dropzones = document.querySelectorAll('.dropzone');

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
});

function dragenter() {
  // log('DROPZONE -> ENTER IN DROP AREA')
}

function dragover() {
  this.classList.add('is-over');
  const draggedCard = document.querySelector('.is-dragging');
  this.appendChild(draggedCard);
}

function dragleave() {
  this.classList.remove('is-over');
}

function drop() {
  // log('DROPZONE -> DROPPED')
  // this.classList.remove('is-over');
}