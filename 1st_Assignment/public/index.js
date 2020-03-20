$(document).ready(() => {

  $.getJSON("data.json", data => {

    $("#home").append(data.home);
    $("#jQuery").append(data.jQuery);
    $("#nodeJS").append(data.introNodeJs);
    $("#npm").append(data.npm);
    $("#intro").append(data.introNodeJs);
    $("#commands").append(data.commands);
    $("#utilities").append(data.utilities);
    $("#restAPI").append(data.restAPI);
    
  });
});