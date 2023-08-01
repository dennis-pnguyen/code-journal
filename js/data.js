/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('cj-local-storage', dataJSON);
});

const previousDataJSON = localStorage.getItem('cj-local-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
