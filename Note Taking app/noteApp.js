#!/usr/bin/env node
const readline = require('readline');
const { addNote, listNotes } = require('./notes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to CLI Note App!');
console.log('Commands: add, list, exit');

function prompt() {
  rl.question('> ', (command) => {
    if (command === 'add') {
      rl.question('Enter your note: ', (note) => {
        addNote(note);
        console.log('Note added!');
        prompt();
      });
    } else if (command === 'list') {
      const notes = listNotes();
      if (notes.length === 0) {
        console.log('No notes found.');
      } else {
        notes.forEach((note, idx) => console.log(`${idx + 1}: ${note}`));
      }
      prompt();
    } else if (command === 'exit') {
      rl.close();
    } else {
      console.log('Unknown command.');
      prompt();
    }
  });
}

prompt(); 