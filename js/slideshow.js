const jsonData = {
  "schedule":[
  {
  "monday":[
      {
      "1" : "SocialStudies",
      "2" : "Science",
      "3" : "Math",
      "4" : "STEM",
      "5" : "Advisory",
      "6" : "Lunch",
      "7" : "Spanish",
      "8" : "ELA"
      }
  ],
  "tuesday":[
      {
      "1" : "Science",
      "2" : "Music",
      "3" : "SocialStudies",
      "4" : "Math",
      "5" : "AIS",
      "6" : "Lunch",
      "7" : "STEM",
      "8" : "ELA"
      }
  ],
  "wednesday":[
      {
      "1" : "Science",
      "2" : "SocialStudies",
      "3" : "Spanish",
      "4" : "Math",
      "5" : "Advisory",
      "6" : "Lunch",
      "7" : "Art",
      "8" : "ELA"
      }
  ],
  "thursday":[
      {
      "1" : "ELA",
      "2" : "Art",
      "3" : "PE",
      "4" : "Science",
      "5" : "AIS",
      "6" : "Lunch",
      "7" : "SocialStudies",
      "8" : "Math"
      }
  ],
  "friday":[
      {
      "1" : "SocialStudies",
      "2" : "Math",
      "3" : "PE",
      "4" : "Music",
      "5" : "Advisory",
      "6" : "Lunch",
      "7" : "ELA",
      "8" : "Science"
      }
  ]
  }
  ]
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
console.log(jsonData['schedule'][0][day.toLowerCase()][0]['1'])
$(document).ready(function () {
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
      
    ];
  
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
  