window.onload = function () {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const notesList = document.getElementById("notes-list");

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    li.className = "box";
    notesList.appendChild(li);
  });
};

document.getElementById("add-note-btn").addEventListener("click", function () {
  const noteInput = document.getElementById("note-input");
  const newNote = noteInput.value.trim();

  if (newNote !== "") {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    const li = document.createElement("li");
    li.textContent = newNote;
    li.className = "box";
    document.getElementById("notes-list").appendChild(li);

    noteInput.value = "";
  }
});
