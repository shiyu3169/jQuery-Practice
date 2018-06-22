var titleFld =$("#title");
var descriptionFld = $("#description");
var addBtn = $("#addBtn");
var todosUl = $("#todos");

addBtn.click(addBtnHandler);

function addBtnHandler() {
	console.log("addbtnhandler");
	var titleStr = titleFld.val();
	var descriptionStr = descriptionFld.val();
	var id = (new Date()).getTime();
	var span = $("<span>X</span>").click(deleteNote);
	var note = $("<li>").append(titleStr).append(span);
	console.log(note);
	todosUl.append(note);
}

function deleteNote(event) {
	var todo = $(event.currentTarget).parent();
	todo.remove();
}