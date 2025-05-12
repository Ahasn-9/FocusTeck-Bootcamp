const fs = require('fs');
const path = require('path');

const NOTES_FILE = path.join(__dirname, 'notes.json');

function loadNotes() {
  if (!fs.existsSync(NOTES_FILE)) return [];
  const data = fs.readFileSync(NOTES_FILE, 'utf8');
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

function addNote(note) {
  const notes = loadNotes();
  notes.push(note);
  saveNotes(notes);
}

function listNotes() {
  return loadNotes();
}

module.exports = { addNote, listNotes }; 