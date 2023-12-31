const $photoUrl = document.querySelector('#photo-url');
const $img = document.querySelector('img');

$photoUrl.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
}

// Submit and event listener

const $entryForm = document.querySelector('#entry-form');
const $ul = document.querySelector('#entries-list');
const $li = document.querySelectorAll('li');

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const newEntry = {
    entryId: data.nextEntryId,
    title: $entryForm.title.value,
    photoUrl: $entryForm.photo.value,
    note: $entryForm.notes.value,
  };

  if (data.editing === null) {
    newEntry.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(newEntry);
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    $ul.prepend(renderEntry(newEntry));

    if (data.editing !== null) {
      toggleNoEntries();
    }
  } else {
    newEntry.entryId = data.editing.entryId;

    for (let i = 0; i < $li.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i] = newEntry;
        $li[i].replaceWith(renderEntry(newEntry));
      }
    }
    $heading.textContent = 'New Entry';
    data.editing = null;
    viewSwap('entries');
    $entryForm.reset();
  }
});

// Render Entry Function

function renderEntry(entry) {
  const $newListItem = document.createElement('li');
  $newListItem.setAttribute('class', 'new-list-item');
  $newListItem.setAttribute('data-entry-id', entry.entryId);

  const $newRow = document.createElement('div');
  $newRow.setAttribute('class', 'row');

  const $entryNew = document.createElement('div');
  $entryNew.setAttribute('class', 'column-half');

  const $imgNew = document.createElement('img');
  $imgNew.setAttribute('src', entry.photoUrl);
  $imgNew.setAttribute('alt', entry.title);

  const $newText = document.createElement('div');
  $newText.setAttribute('class', 'column-half');

  const $newTitle = document.createElement('h3');
  $newTitle.textContent = entry.title;

  const $iFApencil = document.createElement('i');
  $iFApencil.setAttribute('class', 'fa-solid fa-pencil');
  $iFApencil.setAttribute('id', 'edit-entry');

  const $newNote = document.createElement('p');
  $newNote.textContent = entry.note;

  $newListItem.appendChild($newRow);

  $newRow.appendChild($entryNew);
  $entryNew.appendChild($imgNew);

  $newRow.appendChild($newText);
  $newText.appendChild($newTitle);
  $newTitle.appendChild($iFApencil);
  $newText.appendChild($newNote);

  return $newListItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entryDOM = renderEntry(data.entries[i]);
    $ul.appendChild($entryDOM);
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
const $heading = document.querySelector('#edit-entry');

$newBtn.addEventListener('click', function () {
  viewSwap('entry-form');
  $entryForm.reset();
});

const $title = document.querySelector('#title');
const $notes = document.querySelector('#user-notes');

$ul.addEventListener('click', function (event) {
  const $closestLi = event.target.closest('li');
  const $dataEntryId = $closestLi.getAttribute('data-entry-id');

  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === Number($dataEntryId)) {
      data.editing = data.entries[i];
      break;
    }
  }
  $title.setAttribute('value', data.editing.title);
  $photoUrl.setAttribute('value', data.editing.photoUrl);
  $img.setAttribute('src', data.editing.photoUrl);
  $notes.value = data.editing.note;

  if (event.target.matches('i')) {
    viewSwap('entry-form');
    $heading.textContent = 'Edit Entry';
  }
});
