const $photoUrl = document.querySelector('#photo-url');
const $img = document.querySelector('img');

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
}

// Submit and event listener

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

  renderEntry(newEntry);
  viewSwap('entries');
  toggleNoEntries();
});

// Render Entry Function

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
  const $uList = document.getElementById('entries-list');
  for (let i = 0; i < data.entries.length; i++) {
    const $entryDOM = renderEntry(data.entries[i]);
    $uList.appendChild($entryDOM);
  }

  viewSwap();
  toggleNoEntries();
});

const $noEntries = document.getElementById('no-entry');

function toggleNoEntries() {
  if (data.entries.length <= 0) {
    $noEntries.classList.remove('hidden');
  } else {
    $noEntries.classList.add('hidden');
  }
}

const $entryFormView = document.querySelector('.entry-form');
const $entriesView = document.querySelector('.entries');

function viewSwap(entry) {
  if (entry === 'entries') {
    $entryFormView.classList.add('hidden');
    $entriesView.classList.remove('hidden');
  } else {
    $entriesView.classList.add('hidden');
    $entryFormView.classList.remove('hidden');
  }
}

const $anchor = document.querySelector('#entries');

$anchor.addEventListener('click', function () {
  viewSwap('entries');
});

const $newBtn = document.querySelector('#new-btn');

$newBtn.addEventListener('click', function () {
  viewSwap('entry-form');
});
