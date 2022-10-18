const jsonData = {
  "schedule": [{
    "monday": [{
      "1": "Homeroom (613)",
      "2": "Algebra (607)",
      "3": "Art (618)",
      "4": "Post-secondary Planning (605)",
      "5": "Lunch",
      "6": "Programming (527)",
      "7": "Chemistry (522)",
      "8": "Global (613)",
      // "9": "Global (613)"
    }],
    "tuesday": [{
      "1": "Homeroom (613)",
      "2": "Algebra (607)",
      "3": "Chemistry (Lab 1)",
      "4": "World Lit (621)",
      "5": "Lunch",
      "6": "Global (613)",
      "7": "Chemistry (Lab 1)",
      "8": "Global (613)",
      "9": "Movement (630)",
      "10": "ELA"
    }],
    "wednesday": [{
      "1": "Homeroom (613)",
      "2": "Algebra (607)",
      "3": "Chemistry (Lab 1)",
      "4": "World Lit (621)",
      "5": "Lunch",
      "6": "Programming (527)",
      "7": "Spanish (627)",
      "8": "Art (618)"
    }],
    "thursday": [{
      "1": "Homeroom (613)",
      "2": "Spanish (627)",
      "3": "Programming (527)",
      "4": "Global (613)",
      "5": "Lunch",
      "6": "Student Life (611)",
      "7": "Movement (630)",
      "8": "Counseling (602)",
      "9": "Algebra (607)",
      "10": "Advisory (613)"
    }],
    "friday": [{
      "1": "Homeroom (613)",
      "2": "World Lit (621)",
      "3": "Spanish (627)",
      "4": "Idea Lab"
    }]
  }]
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
// console.log(jsonData['schedule'][0][day.toLowerCase()][0]['1'])
$(document).ready(function () {
  if (day !== "Tuesday" && day !== "Thursday" && day !== "Friday") {
    var links = [

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['1']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['2']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['3']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['4']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['5']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['6']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['7']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['8']
      },
    ]
  }
  else if (day == "Tuesday" || day == "Thursday") {
    var links = [
      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['1']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['2']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['3']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['4']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['5']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['6']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['7']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['8']
      },
      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['9']
      },
      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['10']
      },
    ]
  }
  // else if (day == "Thursday") {
  //   var links = [
  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['1']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['2']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['3']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['4']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['5']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['6']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['7']
  //     },

  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['8']
  //     },
  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['9']
  //     },
  //     {
  //       name: jsonData['schedule'][0][day.toLowerCase()][0]['10']
  //     },
  //   ]
  // }
  else if (day == "Friday") {
    var links = [
      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['1']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['2']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['3']
      },

      {
        name: jsonData['schedule'][0][day.toLowerCase()][0]['4']
      },
    ]
  }
  for (var i in links) {
    var link = links[i];

    $('#marquee').append(link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(0).fadeOut('slow');
    })
    .marquee({
      duration: 5000,
    });
});
