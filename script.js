let ticketNumber = 1;

function generateTicket() {
    updateTicket(ticketNumber);
    ticketNumber++;
}

function reprintTicket() {
    let ticketToReprint = document.getElementById('ticketToReprint').value;
    updateTicket(ticketToReprint);
}

function resetTicketNumber() {
    ticketNumber = 1;
    updateTicket(ticketNumber);
}

function updateTicket(number) {
    document.getElementById('number').textContent = number;
    document.getElementById('date').textContent = 'Date: ' + formatDate(new Date());
    let service = document.getElementById('serviceInput').value;
    document.getElementById('service').textContent = 'Service: ' + (service ? service : 'Not specified');
    let staff = document.getElementById('staffInput').value;
    document.getElementById('staff').textContent = 'Staff: ' + (staff ? staff : 'Not assigned');
}

function formatDate(date) {
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function printTicket() {
    let content = document.getElementById('ticket').innerHTML;
    let printWindow = window.open('', '_blank', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<link rel="stylesheet" href="style.css" type="text/css">');
    printWindow.document.write('</head><body >');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
