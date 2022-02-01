$(document).ready(function () {
    $('#currentDay').text(moment().format('llll'));
});


let workHours = ["9:00 AM", "10:00 AM", "11:00 AM", '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
var addRows = function (taskDescription) {
    for (i = 0; i < workHours.length; i++) {
        var rowDiv = $('<div>').addClass("row time-block");
        var timeDiv = $('<div>').text(workHours[i]).addClass("col-md-2 hour");
        var textArea = $('<textarea>').attr('id', '#task-text').addClass('col-md-9 description').text(taskDescription);
        var saveBtn = $('<button>').addClass('btn saveBtn col-md-1');
        var saveBtnIcon = $('<i>').addClass('fas fa-save');

        $(rowDiv).append(timeDiv, textArea, saveBtn);
        $(saveBtn).append(saveBtnIcon);
        $(".container").append(rowDiv);

    }

    // for loop to add ids to input fields to be able to select the save button and assign it a function

    function addTextAreaId() {
        let inputId = $('.description');
        let length = inputId.length;
        for (i = 0; i < length; i++) {
            inputId[i].id = 'text-area-' + (i + 1);
        }
    }

    addTextAreaId();

    // for lopp to add ids to save buttons

    function addSaveBtnId() {
        let saveBtnId = $('.saveBtn');
        let length = saveBtnId.length;
        for (i = 0; i < length; i++) {
            saveBtnId[i].id = 'saveBtn-' + (i + 1);
        }
    }

    addSaveBtnId();

    var saveBtnId1 = $('#saveBtn-1');
    var saveBtnId2 = $('#saveBtn-2');
    var saveBtnId3 = $('#saveBtn-3');
    var saveBtnId4 = $('#saveBtn-4');
    var saveBtnId5 = $('#saveBtn-5');
    var saveBtnId6 = $('#saveBtn-6');
    var saveBtnId7 = $('#saveBtn-7');
    var saveBtnId8 = $('#saveBtn-8');
    var saveBtnId9 = $('#saveBtn-9');

    let textArea1 = $("#text-area-1");
    let textArea2 = $("#text-area-2");
    let textArea3 = $("#text-area-3");
    let textArea4 = $("#text-area-4");
    let textArea5 = $("#text-area-5");
    let textArea6 = $("#text-area-6");
    let textArea7 = $("#text-area-7");
    let textArea8 = $("#text-area-8");
    let textArea9 = $("#text-area-9");

    // save data to localStorage by selecting the id from the earlier for loop

    // button 1
    $(saveBtnId1).on('click', function (event) {
        event.preventDefault();
        let textArea1 = $('#text-area-1').val().trim();
        localStorage.setItem('toDo1', (textArea1));
    });

    let savedData1 = (localStorage.getItem('toDo1'));
    textArea1.val(savedData1);


    // button 2
    $(saveBtnId2).on('click', function (event) {
        event.preventDefault();
        let textArea2 = $('#text-area-2').val().trim();
        localStorage.setItem('toDo2', (textArea2));
    });

    let savedData2 = (localStorage.getItem('toDo2'));
    textArea2.val(savedData2);

    // button 3
    $(saveBtnId3).on('click', function (event) {
        event.preventDefault();
        let textArea3 = $('#text-area-3').val().trim();
        localStorage.setItem('toDo3', (textArea3));
    });

    let savedData3 = (localStorage.getItem('toDo3'));
    textArea3.val(savedData3);

    // button 4
    $(saveBtnId4).on('click', function (event) {
        event.preventDefault();
        let textArea4 = $('#text-area-4').val().trim();
        localStorage.setItem('toDo4', (textArea4));
    });   
    
    let savedData4 = (localStorage.getItem('toDo4'));
    textArea4.val(savedData4);

    // button 5
    $(saveBtnId5).on('click', function (event) {
        event.preventDefault();
        let textArea5 = $('#text-area-5').val().trim();
        localStorage.setItem('toDo5', (textArea5));
    });

    let savedData5 = (localStorage.getItem('toDo5'));
    textArea5.val(savedData5);

    // button 6
    $(saveBtnId6).on('click', function (event) {
        event.preventDefault();
        let textArea6 = $('#text-area-6').val().trim();
        localStorage.setItem('toDo6', (textArea6));
    });

    let savedData6 = (localStorage.getItem('toDo6'));
    textArea6.val(savedData6);


    // button 7
    $(saveBtnId7).on('click', function (event) {
        event.preventDefault();
        let textArea7 = $('#text-area-7').val().trim();
        localStorage.setItem('toDo7', (textArea7));
    });

    let savedData7 = (localStorage.getItem('toDo7'));
    textArea7.val(savedData7);


    // button 8
    $(saveBtnId8).on('click', function (event) {
        event.preventDefault();
        let textArea8 = $('#text-area-8').val().trim();
        localStorage.setItem('toDo8', (textArea8));
    });

    let savedData8 = (localStorage.getItem('toDo8'));
    textArea8.val(savedData8);

    // button 9 
    $(saveBtnId9).on('click', function (event) {
        event.preventDefault();
        console.log(saveBtnId9);
        let textArea9 = $('#text-area-9').val().trim();
        localStorage.setItem('toDo9', (textArea9));
    });

    let savedData9 = (localStorage.getItem('toDo9'));
    textArea9.val(savedData9);

    // if else statement to show past, present future events 

    let now = new Date().getHours();
    if (now > 8) {
      $("#text-area-1").addClass("past");
    } else if (now >= 8 && now < 9) {
      $("#text-area-1").addClass("present");
    } else if (now < 8) {
      $("#text-area-1").addClass("future");
    }

    if (now > 9) {
      $("#text-area-2").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#text-area-2").addClass("present");
    } else if (now < 9) {
      $("#text-area-2").addClass("future");
    }

    if (now > 10) {
      $("#text-area-3").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#text-area-3").addClass("present");
    } else if (now < 10) {
      $("#text-area-3").addClass("future");
    }

    if (now > 11) {
      $("#text-area-4").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#text-area-4").addClass("present");
    } else if (now < 11) {
      $("#text-area-4").addClass("future");
    }

    if (now > 12) {
      $("#text-area-5").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#text-area-5").addClass("present");
    } else if (now < 12) {
      $("#text-area-5").addClass("future");
    }

    if (now > 13) {
      $("#text-area-6").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#text-area-6").addClass("present");
    } else if (now < 13) {
      $("#text-area-6").addClass("future");
    }

    if (now > 14) {
      $("#text-area-7").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#text-area-7").addClass("present");
    } else if (now < 14) {
      $("#text-area-7").addClass("future");
    }

    if (now > 15) {
      $("#text-area-8").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#text-area-8").addClass("present");
    } else if (now < 15) {
      $("#text-area-8").addClass("future");
    }

    if (now > 16) {
      $("#text-area-9").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#text-area-9").addClass("present");
    } else if (now < 16) {
      $("#text-area-9").addClass("future");
    }

    if (now > 17) {
      $("#text-area-10").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#text-area-10").addClass("present");
    } else if (now < 17) {
      $("#text-area-10").addClass("future");
    }

};

addRows();

