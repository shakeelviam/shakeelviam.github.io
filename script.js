let ticketNumber = 1;
let ticketsPrinted = {}; // Object to store all printed tickets

function generateTicket() {
    const service = document.getElementById('serviceInput').value;
    const staff = document.getElementById('staffInput').value;
    const date = formatDate(new Date());

    // Store the ticket details in an object
    ticketsPrinted[ticketNumber] = { service, staff, date };

    // Update and print the ticket
    updateAndPrint(ticketNumber, date, service, staff);

    // Clear the input fields
    document.getElementById('serviceInput').value = '';
    document.getElementById('staffInput').value = '';

    ticketNumber++; // Increment the ticket number
}

function reprintTicket() {
    const ticketToReprint = document.getElementById('ticketToReprint').value;
    const ticketDetails = ticketsPrinted[ticketToReprint];

    if (ticketDetails) {
        updateAndPrint(ticketToReprint, ticketDetails.date, ticketDetails.service, ticketDetails.staff);
    } else {
        alert('Ticket number not found.');
    }
}

function resetTicketNumber() {
    if (confirm('This will reset the ticket number to 1. Are you sure?')) {
        ticketNumber = 1;
        ticketsPrinted = {}; // Clear stored tickets
        console.log('Ticket number has been reset.');
    }
}

function updateAndPrint(number, date, service, staff) {
    document.getElementById('number').textContent = number;
    document.getElementById('date').textContent = 'Date: ' + date;
    document.getElementById('service').textContent = 'Service: ' + (service || 'Not specified');
    document.getElementById('staff').textContent = 'Staff: ' + (staff || 'Not assigned');
    
    window.print(); // Trigger the browser's print functionality
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
