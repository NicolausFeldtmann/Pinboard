let noteTitels = [];
let notes = [];
let doneNotes = [];
let doneTitels = [];
let trashNoteTitels = [];
let trashNotes = [];


function init() {
    load();
    renderNotes();
    renderTrashTemplate();
    renderArchiveTemplate();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderArchiveTemplate() {
    let archivecontentRef = document.getElementById('boxContent');
    archivecontentRef.innerHTML="";

    for (let indexArchiveNote = 0; indexArchiveNote < doneNotes.length; indexArchiveNote++) {
        archivecontentRef.innerHTML += getArchiveTemplate(indexArchiveNote);
    }
}


function renderTrashTemplate() {
    let trashContentRef  = document.getElementById('trashContent');
    trashContentRef.innerHTML="";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


function saveLocal() {
    localStorage.setItem("noteTitels", JSON.stringify(noteTitels));
    localStorage.setItem("notes", JSON.stringify(notes));

    localStorage.setItem("doneTitels", JSON.stringify(doneTitels));
    localStorage.setItem("doneNotes", JSON.stringify(doneNotes));

    localStorage.setItem("trashNoteTitels", JSON.stringify(trashNoteTitels));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}


function load() {
    let savedNoteTitels = localStorage.getItem('noteTitels');
    let savedNotes = localStorage.getItem('notes');
    let savedDoneTitels = localStorage.getItem('doneTitels');
    let savedDoneNotes = localStorage.getItem('doneNotes');
    let savedTrashNoteTitels = localStorage.getItem('trashNoteTitels');
    let savedTrashNotes = localStorage.getItem('trashNotes');
    if (savedNoteTitels && savedNotes && savedTrashNoteTitels && savedTrashNotes && savedDoneTitels && savedDoneNotes) {
        noteTitels = JSON.parse(savedNoteTitels);
        notes = JSON.parse(savedNotes);
        doneTitels = JSON.parse(savedDoneTitels);
        doneNotes = JSON.parse(savedDoneNotes);
        trashNoteTitels = JSON.parse(savedTrashNoteTitels);
        trashNotes = JSON.parse(savedTrashNotes);
    }
}


function addNote() {
    let titelInputRef = document.getElementById('titelInput');
    let titelInput = titelInputRef.value;
    let noteInputRef = document.getElementById('noteInput');
    let noteInput = noteInputRef.value;

    if (titelInputRef.value + noteInputRef.value ==0) {
        alert('Kein Input, kein Post!')
        return false;
    }

    if (titelInputRef.value ==0) {
        alert('Um was gehts?')
        return false;
    }

    if (noteInputRef.value ==0) {
        alert('Was liegt an?')
        return false;
    }

    noteTitels.push(titelInput);
    notes.push(noteInput);
    titelInputRef.value = "";
    noteInputRef.value = "";

    saveLocal();
    renderNotes();
}


function unArchive(idx) {
    let note = doneNotes.splice(idx, 1);
    notes.push(note);
    let noteTitel = doneTitels.splice(idx, 1);
    noteTitels.push(noteTitel);

    saveLocal();
    renderNotes();
    renderArchiveTemplate();
}


function rePost(idx) {
    let note = trashNotes.splice(idx, 1);
    notes.push(note);
    let noteTitel = trashNoteTitels.splice(idx, 1);
    noteTitels.push(noteTitel);

    saveLocal();
    renderNotes();
    renderTrashTemplate();
}


function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    let trashNoteTitel = noteTitels.splice(indexNote, 1);
    trashNoteTitels.push(trashNoteTitel);
    
    saveLocal();
    renderNotes();
    renderTrashTemplate();
}


function deleteArchive(idx) {
    let trashDoneTitel = doneTitels.splice(idx, 1);
    trashNoteTitels.push(trashDoneTitel);
    let trashDoneNote = doneNotes.splice(idx, 1);
    trashNotes.push(trashDoneNote);

    saveLocal();
    renderArchiveTemplate();
    renderTrashTemplate();
}


function archive(indexNote) {
    let doneNote = notes.splice(indexNote, 1);
    doneNotes.push(doneNote);
    let doneTitel = noteTitels.splice(indexNote, 1);
    doneTitels.push(doneTitel);

    saveLocal();
    renderNotes();
    renderArchiveTemplate();
}


function dispose(idx) {
    trashNoteTitels.splice(idx, 1);
    trashNotes.splice(idx, 1);
    
    saveLocal();
    renderNotes();
    renderTrashTemplate();
}


function showBin() {
    var x = document.getElementById("bin");
    x.classList.toggle('bin-show');
}


function showBox() {
    var x = document.getElementById("box");
    x.classList.toggle('box-show');
}


