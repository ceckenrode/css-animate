var spinner = $(".spinner");

var startBtn = $("button.start");
var stopBtn = $("button.stop");

var handleStartClick = function() {
  spinner.addClass("loading");
};

var handleStopClick = function() {
  spinner.removeClass("loading");
};

startBtn.click(handleStartClick);
stopBtn.click(handleStopClick);

