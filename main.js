<button id = "getAppointments"> Schedule an Appointment</button> 
    <div id ="output"></div>

document.getElementById('getAppointments').addEventListener(click, getAppointments)

function getAppointments() {
    return fetch(`https://acuityscheduling.com/api/v1/appointments`)
        .then((res) => res.json())
        .then(data) => {
            let output='<h2>Appointments</h2>';
            data.forEach(function(appointments) {
                output += `
                <div><h3>${appointments.title}</h3>
                <p>${post.body}</p>
                </div>
                `;
            });
    document.getElementById('output').innerHTML = output;
})

}

var Acuity = require('acuityscheduling');

var acuity = Acuity.basic({
    userId: 18126160,
    apiKey: 'b3673f692b01472ad1b761588bdeef09'
});

// Create appontment options:
var options = {
    method: 'POST',
    body: {
        appointmentTypeID: 1,
        datetime: '2016-04-01T09:00',
        firstName: 'Bob',
        lastName: 'McTest',
        email: 'bob.mctest@example.com'
    }
};

// Make the create appointment request:
acuity.request('/appointments', options, function (err, res, appointment) {
            if (err) return console.error(err);
            console.log(appointment);