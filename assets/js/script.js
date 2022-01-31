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

    // for loop to ad ids to input fields 

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

    // save data to localStorage 

    

 

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
    textArea3.val(savedData4);

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
        let textArea9 = $('text-area-9').val().trim();
        localStorage.setItem('toDo9', (textArea9));
    });

    let savedData9 = (localStorage.getItem('toDo9'));
    textArea9.val(savedData8);



}


// for (i = 0; i < 9; i++) {
//     let save = $('#saveBtn-1')
//     $(save).click(function(event) {
//         let textArea = $("#text-area-1")
//         let value = $(textArea).val()
//         localStorage.setItem(`{i}`, value)
//     })

addRows();









// 1. display current date and time using moment.js


// 2. assign variables to hours


// 3. assign variable to saveBtn


// 4. set function .on('click')to saveBtn and preventDefault\


// 5. create if loop (now > #)

