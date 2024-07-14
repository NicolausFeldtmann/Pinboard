function getNoteTemplate(indexNote) {
    return `<div class="post"><b>${noteTitels[indexNote]}</b> <br>${notes[indexNote]}<div class="postIcon"><img class="check" onclick="archive(${indexNote})" src="./assets/img/check-mark.png"><img class="trash" onclick="deleteNote(${indexNote})" src="./assets/img/trashcan.png"></div></div>`;
}


function getTrashNoteTemplate(idx) {
    return`<div class="postSide"><b>${trashNoteTitels[idx]}</b> <br>${trashNotes[idx]}<div class="postIcon"><img class="pin" onclick="rePost(${idx})" src="./assets/img/pin.png"><img class="dispose" onclick="dispose(${idx})"src="./assets/img/crossIcon.png"></div></div>`;
}


function getArchiveTemplate(idx) {
    return`<div class="postSide"><b>${doneTitels[idx]}</b> <br>${doneNotes[idx]}<div class="postIcon"><img class="pin" onclick="unArchive(${idx})" src="./assets/img/pin.png"><img class="trash" onclick="deleteArchive(${idx})" src="./assets/img/trashcan.png"></div></div>`;
}


