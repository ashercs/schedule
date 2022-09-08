const jsonData = {
  "schedule": [{
    "monday": [{
      "1": "Homeroom",
      "2": "Algebra II",
      "3": "Programming",
      "4": "Post-secondary Planning",
      "5": "Lunch",
      "6": "Global II",
      "7": "Biology",
      "8": "Programming",
      "9": "Global II"
    }],
    "tuesday": [{
      "1": "Homeroom",
      "2": "Algebra II",
      "3": "Global II",
      "4": "World Literature",
      "5": "Lunch",
      "6": "Art Independent Study",
      "7": "Movement",
      "8": "Biology"
    }],
    "wednesday": [{
      "1": "Homeroom",
      "2": "Algebra II",
      "3": "Global II",
      "4": "World Literature",
      "5": "Lunch",
      "6": "Art Independent Study",
      "7": "Spanish",
      "8": "Biology"
    }],
    "thursday": [{
      "1": "Homeroom",
      "2": "Spanish",
      "3": "ELA",
      "4": "Counseling",
      "5": "Programming",
      "6": "Lunch",
      "7": "Student Life",
      "8": "Biology",
      "9": "Algebra II",
      "10": "Advisory"
    }],
    "friday": [{
      "1": "Homeroom",
      "2": "World Literature",
      "3": "Spanish",
      "4": "Idea Lab"
    }]
  }]
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
console.log(jsonData['schedule'][0][day.toLowerCase()][0]['1'])
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
