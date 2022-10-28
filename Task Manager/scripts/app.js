var iconImportant = "fas fa-star";
var iconNonImportant = "far fa-star";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  if (isImportant) {
    //should not be important
    $("#iImportant").removeClass(iconImportant);
    $("#iImportant").addClass(iconNonImportant);
    isImportant = false;
  } else {
    //should be important
    $("#iImportant").removeClass(iconNonImportant);
    $("#iImportant").addClass(iconImportant);
    isImportant = true;
  }
}

function toggleForm() {
  if (isVisible) {
    $(".form").hide();
    isVisible = false;
  } else {
    $(".form").show();
    isVisible = true;
  }
}

function saveTask() {
  let title = $("#txtTitle").val();
  let desc = $("#txtDescription").val();
  let priority = $("#selPriority").val();
  let dueDate = $("#selDueDate").val();
  let color = $("#selColor").val();
  let contact = $("#txtContact").val();
  let participants = $("#txtParticipants").val();

  let task = new Task(
    isImportant,
    title,
    desc,
    priority,
    dueDate,
    color,
    contact,
    participants
  );

  console.log(task);
  display(task); //<- it should console log the title
  clearForm(); // should clear all the input fields
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selPriority").val("");
    $("#selDueDate").val("");
    $("#selColor").val("");
    $("#txtContact").val("");
    $("#txtParticipants").val("");
}

function display(task) {
  console.log(task.title);

  let syntax = `<div class="task">
    <div class="head">  
        <h5>${task.title}</h5>
        <p>${task.description}</p>
    </div>

    <div class="middle">
        <label>${task.priority}</label>
        <label>${task.dueDate}</label>
    </div>

    <div class="tail">
        <label>${task.contact}</label>
        <label>${task.participants}</label>
    </div>

  </div>`;

  $("#task-list").append(syntax);
}

function init() {
  console.log("Task manager");
  // load data

  //hook event
  $("#btnSave").click(saveTask);
  $("#iImportant").click(toggleImportant);
  $("#btnHideForm").click(toggleForm);
}

window.onload = init;
