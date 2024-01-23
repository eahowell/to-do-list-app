function newItem() {
  //javascript
  //1. Adding a new item to the list of items:
  let li = $(`<li></li>`);
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = $("#list");
    list.append(li);
  }

  //2. Crossing out an item from the list of items:
  li.on("dblclick", function () {
    li.toggleClass("strike");
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $(`<crossOutButton>X</crossOutButton>`);
  li.append(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  crossOutButton.on("click", function () {
    li.addClass("delete");
  });

  // 4. Reordering the items:
  $("#list").sortable();
}
