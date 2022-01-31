let workHours = ["9:00 AM", "10:00 AM", "11:00 AM", '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
var addRows = function (taskDescription) {
    for (i = 0; i < workHours.length; i++) {
        var rowDiv = $('<div>').addClass("row time-block");
        var timeDiv = $('<div>').text(workHours[i]).addClass("col-md-2 hour");
        var textArea = $('<textarea>').attr('id', '#task-text').addClass('col-md-9').text(taskDescription);
        var saveBtn = $('<button>').addClass('btn saveBtn col-md-1');
        var saveBtnIcon = $('<i>').addClass('fas fa-save');

        $(rowDiv).append(timeDiv, textArea, saveBtn);
        $(saveBtn).append(saveBtnIcon);
        $(".container").append(rowDiv);

    }
$(saveBtn).each(function() {
    $(this).click(function(event) {
        event.preventDefault();
        localStorage.setItem(textArea, taskDescription);
    })
})
textArea = (localStorage.setItem(textArea, JSON.stringify(taskDescription)));


};
addRows();









// 1. display current date and time using moment.js 
$(document).ready(function () {
    $('#currentDay').text(moment().format('llll'));
});

// 2. assign variables to hours


// 3. assign variable to saveBtn
let save = $('saveBtn');

// 4. set function .on('click')to saveBtn and preventDefault\


// 5. create if loop (now > #)

