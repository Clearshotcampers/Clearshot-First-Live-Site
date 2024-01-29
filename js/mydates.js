// Array for booked dates with format: 'yyyy-mm-dd'

var bookedDates = ["2024-02-15", "2024-02-16", "2024-02-17", 
"2024-04-15", "2024-04-16", "2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20",
"2024-05-15", "2024-05-16", "2024-05-17", "2024-05-18", "2024-05-19", "2024-05-20"                   
]; // Add booked dates here

$(function() {

    // Function to prevent user selecting dates
    function disableAllDates(date) {
        return [false];
    }
    
    // Function to colour the available and booked dates
    function customDateStyles(date) {
        var formattedDate = $.datepicker.formatDate('yy-mm-dd', date);

        if (bookedDates.indexOf(formattedDate) > -1) {
            return [false, "booked-date", "Booked"];
        } else {
            return [false, "available-date", "Available"];
        }
    }

    // Initialize  the datepicker calendar
    $("#datepicker").datepicker({
        minDate: new Date(2024, 1 - 1, 1), // January 1, 2024
        maxDate: "+1y", // 2 years from now
        numberOfMonths: [2, 3], // 2 rows and 3 columns of months
        beforeShowDay: customDateStyles
    });
});
