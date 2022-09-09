const jsonData = {
  "schedule": [{
    "monday": [{
      "1": "Homeroom (613)",
      "2": "Algebra II (607)",
      "3": "Programming (527)",
      "4": "Post-secondary Planning (605)",
      "5": "Lunch",
      "6": "global II (613)",
      "7": "Biology (Lab 2)",
      "8": "Programming (527)",
      "9": "global II (613)"
    }],
    "tuesday": [{
      "1": "Homeroom (613)",
      "2": "Algebra II (607)",
      "3": "global II (613)",
      "4": "World Literature (621)",
      "5": "Lunch",
      "6": "Art Independent Study (618)",
      "7": "Movement (630)",
      "8": "Biology (Lab 2)"
    }],
    "wednesday": [{
      "1": "Homeroom (613)",
      "2": "Algebra II (607)",
      "3": "global II (613)",
      "4": "World Literature (621)",
      "5": "Lunch",
      "6": "Art Independent Study (618)",
      "7": "Spanish (627)",
      "8": "Biology (Lab 2)"
    }],
    "thursday": [{
      "1": "Homeroom (613)",
      "2": "Spanish (627)",
      "3": "ELA",
      "4": "Counseling (602)",
      "5": "Programming (527)",
      "6": "Lunch",
      "7": "Student Life",
      "8": "Biology (Lab 2)",
      "9": "Algebra II (607)",
      "10": "Advisory (613)"
    }],
    "friday": [{
      "1": "Homeroom (613)",
      "2": "World Literature (621)",
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
  if (day !== "Monday" && day !== "Thursday" && day !== "Friday") {
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
  else if (day == "Monday") {
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
    ]
  }
  else if (day == "Thursday") {
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
