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
    printWindow.document.write('<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">');
    printWindow.document.write('<link rel="stylesheet" href="print.css" type="text/css" media="print">'); // Include print.css for print-specific styles
    printWindow.document.write('</head><body class="bg-white text-black">'); // Ensure the background is white and text is black for printing
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
