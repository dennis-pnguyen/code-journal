const $photoUrl = document.querySelector('#photo-url');
const $img = document.querySelector('img');

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
}

const $entryForm = document.querySelector('#entry-form');

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const newEntry = {
    entryId: data.nextEntryId,
    title: $entryForm.title.value,
    photoUrl: $entryForm.photo.value,
    note: $entryForm.notes.value,
  };
  data.nextEntryId++;
  data.entries.unshift(newEntry);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
});

function renderEntry(entry) {
  const $newListItem = document.createElement('li');
  $newListItem.setAttribute('class', 'new-list-item');

  const $newRow = document.createElement('div');
  $newRow.setAttribute('class', 'row');

  const $entryNew = document.createElement('div');
  $entryNew.setAttribute('class', 'column-half');

  const $imgNew = document.createElement('img');
  $imgNew.setAttribute('src', entry.photoUrl);

  const $newText = document.createElement('div');
  $newText.setAttribute('class', 'column-half');

  const $newTitle = document.createElement('h3');
  $newTitle.textContent = entry.title;

  const $newNote = document.createElement('p');
  $newNote.textContent = entry.note;

  $newListItem.appendChild($newRow);

  $newRow.appendChild($entryNew);
  $entryNew.appendChild($imgNew);

  $newRow.appendChild($newText);
  $newText.appendChild($newTitle);
  $newText.appendChild($newNote);

  return $newListItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const $uList = document.querySelector('ul');

  for (const entry of data.entries) {
    $uList.appendChild(renderEntry(entry));
  }
});
