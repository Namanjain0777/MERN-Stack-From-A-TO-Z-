const fs = require("fs");
const filePath = "./notes.json";

const loadNotes = () => {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeNotes = (notes) => {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
    console.log("Notes Saved");
};

const deleteNote = (title) => {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if (notes.length === filtered.length) {
        console.log("Note Not Found");
        return;
    }

    writeNotes(filtered);
    console.log("Note Deleted");
};

const deleteAllNotes = () => {
    writeNotes([]);
    console.log("All Notes Deleted");
};

const listNotes = () => {
    const notes = loadNotes();

    console.log("📒 Notes:");
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note.title}`);
    });
};

module.exports = {
    listNotes,
    deleteNote,
    deleteAllNotes,
    writeNotes,
    loadNotes
};
