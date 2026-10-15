
let appointments = [];

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const appointment = {
        patient: document.getElementById("patient").value.trim(),
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value.trim(),
        doctor: document.getElementById("doctor").value.trim(),
        department: document.getElementById("department").value.trim(),
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        reason: document.getElementById("reason").value.trim()
    };

    appointments.push(appointment);
    displayAppointments();
    form.reset();
});

function displayAppointments() {
    const list = document.getElementById("appointmentList");
    const search = document.getElementById("search").value.toLowerCase();

    list.replaceChildren();

    appointments.forEach((a, index) => {
        if (!a.patient.toLowerCase().includes(search)) return;

        const row = document.createElement("tr");

        [
            a.patient, a.age, a.gender, a.phone, a.doctor,
            a.department, a.date, a.time, a.reason
        ].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const button = document.createElement("button");

        button.textContent = "Delete";
        button.className = "delete-btn";

        button.addEventListener("click", function() {
            appointments.splice(index, 1);
            displayAppointments();
        });

        actionCell.appendChild(button);
        row.appendChild(actionCell);
        list.appendChild(row);
    });
}

// Prevent booking dates in the past.
const dateInput = document.getElementById("date");
const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;
