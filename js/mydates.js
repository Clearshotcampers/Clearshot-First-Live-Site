// Array for booked dates with format: 'yyyy-mm-dd'

var bookedDates = ["2024-03-03", "2024-03-04", "2024-03-05", "2024-03-06", "2024-03-07", 
"2024-03-08", "2024-03-09",
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
        minDate: new Date(2024, 3, 1), // January 1, 2024
        maxDate: "+8m", // 2 years from now
        numberOfMonths: [2, 3], // 2 rows and 3 columns of months
        beforeShowDay: customDateStyles
    });
});
