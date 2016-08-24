var ids = ["#snslogo", "#overdrivelogo", "#doormanlogo", "#lynxlogo", "#hslogo"];
var classes = ["sns", "overdrive", "doorman", "lynx","healthstream"];
var text = ["A swipeless credit/debit card payment system. No NFC needed! Emulates the same magnetic flux that a normal swipe would. Worked on the hardware circuit and android simulated payment terminal.",
            "Active blind-spot assistance for older vehicles. Sonar sensors and a raspberry pi constantly polling for nearby objects and communicating with a companion iOS app over websockets.",
            "An automated door opened with a knock to your iPhone or a quick remark to Siri. REST API running on an Rpi written with python/flask that controls a servo motor.",
            "A touchID password manager for iOS. Google Chrome extension scrapes websites for input fields and injects javascript to populate the fields with your account information. The two communicate through websockets to a node.js server",
            "A doctor-patient telecommunication platfrom with an onscreen stream of real-tim heart rate data. Written for Web and iOS"
            ];
var dates = ["October 2015", "May 2016&nbsp;&nbsp;&nbsp;&nbsp;LA Hacks", "April 2015&nbsp;&nbsp;&nbsp;&nbsp;LA Hacks",
            "November 2014", "February 2015"];
var skills = [["Android&nbsp;&nbsp;&nbsp;&nbsp;Java", "Hardware&nbsp;&nbsp;&nbsp;&nbsp;Physics?"],
                ["Node.js&nbsp;&nbsp;&nbsp;&nbsp;JavaScript", "Websockets&nbsp;&nbsp;&nbsp;&nbsp;Hardware"],
                ["Python&nbsp;&nbsp;&nbsp;&nbsp;Flask", "Hardware"],
                ["Node.js&nbsp;&nbsp;&nbsp;&nbsp;JavaScript", "Chrome Extension&nbsp;&nbsp;&nbsp;&nbsp;Websockets"],
                ["Node.js&nbsp;&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;&nbsp;WebRTC", "Websockets&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;CSS"]
                ];
var titles = ["SNS Payments<a href='http://devpost.com/software/sns'target='_blank'><img style='width:50px;' src='images/devpostlogo.png'></img></a>",
                "Overdrive<a href='http://devpost.com/software/overdrive'target='_blank'><img style='width:50px;' src='images/devpostlogo.png'></img></a>",
                "DoorMan<a href='http://devpost.com/software/doorman'target='_blank'><img style='width:50px;' src='images/devpostlogo.png'></img></a>",
                "Lynx<a href='http://devpost.com/software/lynx'target='_blank'><img style='width:50px;' src='images/devpostlogo.png'></img></a>",
                "HealthStream"];
var awards = ["SD Hacks&nbsp;&nbsp;&nbsp;&nbsp;Grand Prize Winner", "", "",
                "HackSC&nbsp;&nbsp;&nbsp;&nbsp;Top 5",
                "TreeHacks&nbsp;&nbsp;&nbsp;&nbsp;Best Social Good Hack"];

var projLogoBar = new LogoBar(ids, classes, text, dates, skills, "proj", titles, awards);
