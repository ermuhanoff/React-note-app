let notesList = [
  {
    id: String(Date.now()),
    title: 'Note 1',
    description: 'Note text 1',
    color: '#ffa3a3',
  },
  {
    id: String(Date.now() + 1),
    title: 'Note 2',
    description: 'Note text 2',
    color: '#b3ffa3',
  },
];

export const getAllNotes = async () => {
  return asyncRequest(notesList);
};

export const addNewNote = async (note) => {
  note.id = String(Date.now());
  notesList.unshift(note);

  return asyncRequest(note);
};

export const removeNoteById = async (noteId) => {
  notesList = notesList.filter((note) => note.id !== noteId);

  return asyncRequest(null);
};

export const updateNote = async (updatedNote) => {
  const newList = notesList.filter((note) => note.id !== updatedNote.id);
  notesList = [updatedNote, ...newList];

  return asyncRequest(updatedNote);
};

const asyncRequest = (
  data,
  isErr = false,
  delay = getRandomInteger(500, 2000)
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isErr) {
        reject();
      } else resolve(data);
    }, delay);
  });
};

const getRandomInteger = (min, max) => {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);

  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
};
