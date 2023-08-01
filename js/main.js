// update photo preview with URL
const $photoPrev = document.querySelector('.photo');

function updatePhoto(event) {
  const newPhotoUrl = event.target.value;
  newPhotoUrl.src = $photoPrev.value;
}

$photoPrev.addEventListener('input', updatePhoto);

function handleFocus(event) {}

function handleBlur(event) {}

function handleInput(event) {}

const $title = document.querySelector('#title');
const $photoUrl = document.querySelector('#photo-url');
const $userNotes = document.querySelector('#user-notes');

$title.addEventListener('focus', handleFocus);
$photoUrl.addEventListener('focus', handleFocus);
$userNotes.addEventListener('focus', handleFocus);

$title.addEventListener('blur', handleBlur);
$photoUrl.addEventListener('blur', handleBlur);
$userNotes.addEventListener('blur', handleBlur);

$title.addEventListener('input', handleInput);
$photoUrl.addEventListener('input', handleInput);
$userNotes.addEventListener('input', handleInput);

const $entryForm = document.querySelector('#entry-form');

$entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const $formElements = $entryForm.elements;

  const newEntry = {
    entryId: data.nextEntryId,
    title: $formElements.title.value,
    photoUrl: $formElements.photo.value,
    note: $formElements.notes.value,
  };
  data.nextEntryId++;
  data.entries.push(newEntry);
  $entryForm.reset();
});
