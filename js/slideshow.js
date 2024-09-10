function weeksBetween(d1, d2) {
  console.log(Math.floor((d2 - d1) / (7 * 24 * 60 * 60 * 1000)))
  return Math.floor((d2 - d1) / (7 * 24 * 60 * 60 * 1000))
}
const curdate = new Date(new Date().toLocaleString("en-US", {
  timeZone: "America/New_York"
}));
const startweek = new Date("9/3/2023")
console.log(weeksBetween(startweek, curdate))
function isOdd(num) {
  return num % 2;
}
let oddoreven = isOdd(weeksBetween(startweek, curdate))
let jsonData;
if (oddoreven == 0) {
  console.log('A Week')
  jsonData = {
  "schedule": [{
      "monday": [{
          "1": "Advisory-306", // 8:30
          "2": "Computer Science-ML", // 8:43-9:38
          "3": "Pre Calculus-307", // 9:41-10:36
          "4": "Break", // 10:36
          "5": "Net Games-Gym", // 10:46-11:41
          "6": "US History-303A", // 11:44-12:39
          "7": "Lunch", // 12:42-1:37
          "8": "Spanish-312", //1:40-2:35
          "9": "Advisory" // 2:38
          // 3:18
      }],
      "tuesday": [{
          "1": "Advisory-306",
          "2": "English-202",
          "3": "Philosophy-216",
          "4": "Break",
          "5": "FREE",
          "6": "Computer Science-ML",
          "7": "Lunch",
          "8": "Pre Calculus-307",
          "9": "Learning Labs"
      }],
      "wednesday": [{
          "1": "Advisory-306",
          "2": "Health-306",
          "3": "Co-Curriculars",
          "4": "Break",
          "5": "US History-303A",
          "6": "Spanish-312",
          "7": "Lunch",
          "8": "English-202",
          "9": "Silence"
      }],
      "thursday": [{
          "1": "Advisory-306",
          "2": "Philosophy-216",
          "3": "FREE",
          "4": "Break",
          "5": "Computer Science-ML",
          "6": "Pre Calculus-307",
          "7": "Lunch",
          "8": "Net Games-Gym",
          "9": "Confrencing"
      }],
      "friday": [{
          "1": "Advisory-306",
          "2": "US History-303A",
          "3": "Spanish-312",
          "4": "Break",
          "5": "English-202",
          "6": "Philosophy-216",
          "7": "Lunch",
          "8": "FREE",
          "9": "Clubs"
      }]
  }]
}
}
if (oddoreven == 1) {
  console.log('B Week')
  jsonData = {
  "schedule": [{
      "monday": [{
          "1": "Advisory-306", // 8:30
          "2": "Computer Science-ML", // 8:43-9:38
          "3": "Pre Calculus-307", // 9:41-10:36
          "4": "Break", // 10:36
          "5": "Health-306", // 10:46-11:41
          "6": "US History-303A", // 11:44-12:39
          "7": "Lunch", // 12:42-1:37
          "8": "Spanish-312", //1:40-2:35
          "9": "Advisory" // 2:38
          // 3:18
      }],
      "tuesday": [{
          "1": "Advisory-306",
          "2": "English-202",
          "3": "Philosophy-216",
          "4": "Break",
          "5": "FREE",
          "6": "Computer Science-ML",
          "7": "Lunch",
          "8": "Pre Calculus-307",
          "9": "Learning Labs"
      }],
      "wednesday": [{
          "1": "Advisory-306",
          "2": "Health-306",
          "3": "Co-Curriculars",
          "4": "Break",
          "5": "US History-303A",
          "6": "Spanish-312",
          "7": "Lunch",
          "8": "English-202",
          "9": "Silence"
      }],
      "thursday": [{
          "1": "Advisory-306",
          "2": "Philosophy-216",
          "3": "FREE",
          "4": "Break",
          "5": "Computer Science-ML",
          "6": "Pre Calculus-307",
          "7": "Lunch",
          "8": "Health-306",
          "9": "Confrencing"
      }],
      "friday": [{
          "1": "Advisory-306",
          "2": "US History-303A",
          "3": "Spanish-312",
          "4": "Break",
          "5": "English-202",
          "6": "Philosophy-216",
          "7": "Lunch",
          "8": "FREE",
          "9": "Clubs"
      }]
  }]
}
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
// console.log(jsonData['schedule'][0][day.toLowerCase()][0]['1'])
$(document).ready(function () {
  if (day !== "Sunday" && day !== "Saturday") {
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
        name: `${jsonData['schedule'][0][day.toLowerCase()][0]['9']}                      `
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
