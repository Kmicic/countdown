function countdown(data) {
  let days, hours, minutes, seconds;
  nowDate = new Date().getTime();

  for (i in data) {
    var element = data[i];
    var refDate = new Date(element.date).getTime();
    if (nowDate < refDate) {
      break;
    }
  };

  var endDate = new Date(element.date).getTime();
  if (isNaN(endDate)) {
    return;
  }
  document.body.setAttribute("style", "background-image : url('" + element.bg + "')");
  setInterval(calculate, 1000);

  function calculate() {
    nowDate = new Date().getTime();
    let timeRemaining = parseInt((endDate - nowDate) / 1000);
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      document.getElementById("descript").innerHTML = element.desc;
    } else {
      return;
    }
  }
}

(function () {
  data = [{
      date: '2019-05-26 8:00:00',
      desc: 'Wybory do Parlamentu Europejskiego, wybierz najlepszych.',
      bg: 'plue.jpg',
    },
    {
      date: '2019-10-27 8:00:00',
      desc: 'Wybory do Sejmu i Senatu, wybierz mądrze.',
      bg: 'gozdziki.jpg',
    }
  ]
  countdown(data);
}());