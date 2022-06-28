var submit = document.getElementById("submit");
submit.addEventListener("click", displayDetails);
var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var branch = document.getElementById("branch").value;
    var gender = document.getElementById("gender").value;

    if (!name || !email || !branch || !gender) {
        alert("fill all the boxes");
        return;
    }
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = branch;
    cell4.innerHTML = gender;

    row++;
}