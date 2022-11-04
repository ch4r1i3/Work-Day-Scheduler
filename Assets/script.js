$(function () {});

/* Here I declare global variables */
var today = moment().format("dddd, MMMM Do");
var clock = moment().format("H A");
var currentTime = moment().format("LT");



/* Date */
$("#currentDay").text(today);
$("#currentTime").append(currentTime);

/* This code sets the color of each row based on the time of the workday */
$(".timeblock").each(function () {
	var workHour = parseInt($(this).attr("id").split("hour")[1]);
	var currentHour = moment().hour();
	// console.log(workHour)
	
	if (workHour < currentHour) {
		$(this).addClass("past");
		$(this).removeClass("future");
		$(this).removeClass("present");
	}
	else if (workHour === currentHour) {
		$(this).addClass("present");
		$(this).removeClass("past");
		$(this).removeClass("future");
	}
	else {
		$(this).addClass("future");
		$(this).removeClass("present");
		$(this).removeClass("past");
	}
})

