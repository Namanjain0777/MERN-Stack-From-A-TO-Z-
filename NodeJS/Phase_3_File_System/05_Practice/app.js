
const notes = require("./notes");

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    if (!argument) {
        console.log("❌ Please provide a note title");
        return;
    }

    const existingNotes = notes.loadNotes();
    existingNotes.push({ title: argument });

    notes.writeNotes(existingNotes);
    console.log("✅ Note Added");
}

else if (command === "list") {
    notes.listNotes();
}

else if (command === "delete") {
    if (!argument) {
        console.log("❌ Please provide note title to delete");
        return;
    }

    notes.deleteNote(argument);
}

else if (command === "deleteAll") {
    notes.deleteAllNotes();
}

else {
    console.log("❌ Unknown Command");
    console.log("Usage:");
    console.log('node app.js add "Note Title"');
    console.log("node app.js list");
    console.log('node app.js delete "Note Title"');
    console.log("node app.js deleteAll");
}