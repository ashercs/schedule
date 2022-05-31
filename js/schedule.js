function main() {
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
    let hour = d.getHours()
    let minute = d.getMinutes()
    let day = days[d.getDay()];
    if (day !== "Sunday" || day !== "Saturday") {
        function checkperiod() {
            currentperiod = 0
            thing1 = 0
            thing2 = 0
            if (hour == 8 && minute >= 40 || hour == 9 && minute <= 27){
                currentperiod = 1
                thing1 = 9
                thing2 = 28
            }
            else if (hour == 9 && minute >= 28 || hour == 10 && minute <= 15){
                currentperiod = 2
                thing1 = 10
                thing2 = 16
            }
            else if (hour == 10 && minute >= 16 || hour == 11 && minute <= 3){
                currentperiod = 3
                thing1 = 11
                thing2 = 04
            }
            else if (hour == 11 && minute >= 4 || hour == 11 && minute <= 50){
                currentperiod = 4
                thing1 = 11
                thing2 = 51
            }
            else if (hour == 11 && minute >= 51 || hour == 12 && minute <= 38){
                currentperiod = 5
                thing1 = 12
                thing2 = 39
            }
            else if (hour == 12 && minute >= 39 || hour == 13 && minute <= 26){
                currentperiod = 6
                thing1 = 13
                thing2 = 27
            }
            else if (hour == 13 && minute >= 27 || hour == 14 && minute <= 14){
                currentperiod = 7
                thing1 = 14
                thing2 = 15
            }
            else if (hour == 14 && minute >= 15 || hour == 15 && minute <= 2){
                currentperiod = 8
                thing1 = 0
                thing2 = 0
            }
            else {
                currentperiod = 0
                thing1 = 0
                thing2 = 0
            }
            return [currentperiod, thing1, thing2]
        }
    let ok = minute - thing2
    console.log(ok.toString().replace("-", ""))
}
}
main()