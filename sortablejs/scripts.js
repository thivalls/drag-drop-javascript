const column1 = document.querySelector('#column-1');
const column2 = document.querySelector('#column-2');
const column3 = document.querySelector('#column-3');

Sortable.create(column1, {
  group: "shared",
  animation: 150,
});

Sortable.create(column2, {
  group: "shared",
  animation: 150,
});

Sortable.create(column3, {
  group: "shared",
  animation: 150,
});
