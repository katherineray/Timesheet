$("#submit").on("click", function(event) {
  event.preventDefault();

  var newRow = $("<tr>");

  var newName = $("<td id = 'name'>");
  var newRole = $("<td id = 'role'>");
  var newDate = $("<td id = 'date'>");
  var newMonthsWorked = $("<td id = 'monthsWorked'>");
  var newRate = $("<td id = 'rate'>");
  var newTotalBilled = $("<td id = 'totalBilled'>");

  newName.text($("#submitName").val());
  newRole.text($("#submitRole").val());
  newDate.text($("#submitDate").val());
  newMonthsWorked.text("a");
  newRate.text($("#submitRate").val());
  newTotalBilled.text("b");

  newRow.append(newName);
  newRow.append(newRole);
  newRow.append(newDate);
  newRow.append(newMonthsWorked);
  newRow.append(newRate);
  newRow.append(newTotalBilled);

  $("tbody").append(newRow);
});
