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
          "2": "Study Hall-201", // 8:43
          "3": "Global Studies-203", // 9:41
          "4": "Break", // 10:36
          "5": "Biology-207", // 10:46
          "6": "Lunch", // 11:44
          "7": "Spanish-302", // 12:42
          "8": "English-216", //1:40
          "9": "Clubs" // 2:38
          // 3:18
      }],
      "tuesday": [{
          "1": "Advisory-306",
          "2": "PE",
          "3": "Algebra-308",
          "4": "Break",
          "5": "Ceramics-101",
          "6": "Lunch",
          "7": "Study Hall-201",
          "8": "Global Studies-203",
          "9": "Advisory-306"
      }],
      "wednesday": [{
          "1": "Advisory-306",
          "2": "Biology-207",
          "3": "Co-Curriculars",
          "4": "Break",
          "5": "Spanish-302",
          "6": "Lunch",
          "7": "English-216",
          "8": "Race & Identity-302",
          "9": "Silence"
      }],
      "thursday": [{
          "1": "Advisory-306",
          "2": "Algebra-308",
          "3": "Ceramics-101",
          "4": "Break",
          "5": "Study Hall-201",
          "6": "Lunch",
          "7": "Global Studies-203",
          "8": "Biology-207",
          "9": "Confrencing"
      }],
      "friday": [{
          "1": "Advisory-306",
          "2": "Spanish-302",
          "3": "English-216",
          "4": "Break",
          "5": "Health-302",
          "6": "Algebra-308",
          "7": "Lunch",
          "8": "Ceramics-101",
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
          "2": "Study Hall-201", // 8:43-9:38
          "3": "Global Studies-203", // 9:41-10:36
          "4": "Break", // 10:36
          "5": "Biology-207", // 10:46-11:41
          "6": "Lunch", // 11:44-12:39
          "7": "Spanish-302", // 12:42-1:37
          "8": "English-216", //1:40-2:35
          "9": "Clubs" // 2:38-3:18
      }],
      "tuesday": [{
          "1": "Advisory-306",
          "2": "Learning Strategies-302",
          "3": "Algebra-308",
          "4": "Break",
          "5": "Ceramics-101",
          "6": "Lunch",
          "7": "Study Hall-201",
          "8": "Global Studies-203",
          "9": "Advisory-306"
      }],
      "wednesday": [{
          "1": "Advisory-306",
          "2": "Biology-207",
          "3": "Co-Curriculars",
          "4": "Break",
          "5": "Spanish-302",
          "6": "Lunch",
          "7": "English-216",
          "8": "PE",
          "9": "Silence"
      }],
      "thursday": [{
          "1": "Advisory-306",
          "2": "Algebra-308",
          "3": "Ceramics-101",
          "4": "Break",
          "5": "Study Hall-201",
          "6": "Lunch",
          "7": "Global Studies-203",
          "8": "Biology-207",
          "9": "Confrencing"
      }],
      "friday": [{
          "1": "Advisory-306",
          "2": "Spanish-302",
          "3": "English-216",
          "4": "Break",
          "5": "PE",
          "6": "Algebra-308",
          "7": "Lunch",
          "8": "Ceramics-101",
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
