document.getElementById("submit").addEventListener("click", () => {
    const fullName = document.getElementById("full-name").value;
    const roll = document.getElementById("roll").value;
    const grade = document.getElementById("grade").value;

    if (!fullName || !roll || !grade) {
        alert("Please fill all the boxes.")
        return;
    };
    displayData(fullName, roll, grade);

    document.getElementById("full-name").value = '';
    document.getElementById("roll").value = '';
    document.getElementById("grade").value = '';
});

function displayData(name, roll, grade) {
    let row = 0;
    const display = document.getElementById("display");
    const newRow = display.insertRow(row);
    const cell0 = newRow.insertCell(0);
    const cell1 = newRow.insertCell(1);
    const cell2 = newRow.insertCell(2);
    const cell3 = newRow.insertCell(3);

    cell0.innerHTML = row+1;
    cell1.innerHTML = name;
    cell2.innerHTML = roll;
    cell3.innerHTML = grade;

    row++;
};