// 1. json resume

let myResume={
    "Basics": {
      "Name": "Dinesh Kumar s",
      "Email": "dineshsrinivasan05.ds@gmail.com",
      "Phone": 9566250529,
      "Degree": "Diploma in civil engineering",
      "Location": {
        "Address": "No 9 thanigai nagar 1st main road ponniammanmedu",
        "PostalCode": 600110,
        "City": "Chennai",
        "State": "Tamilnadu",
        "Country": "India"
      },
      "Profiles": [
        {
          "Linkedin": "linkedin.com/in/dinesh-kumar-16561a255",
          "Github":"github.com/dinesh-kumar05"
        }
      ]
    },
    "Work": [
      {
        "Company2":"Amardeep Design India Pvt Ltd",
        "Position2":"Service Manager",
        "Website2":"https://amardeepdesign.com/",
        "StartDate2":"start date, in 2021-11-01 ",
        "EndDate2":"end date, in 2022-07-31 "
      },
      {
        "Company1":"United Access Floors Pvt Ltd",
        "Position1":"Safety Officer",
        "Website1":"https://www.unitileindia.com/",
        "StartDate1":"start date, in 2019-01-06 ",
        "EndDate1":"end date, in 2021-10-31"
      }
    ],
    "Education": [
      {
        "Institution": "Thai Moogambigai Polytechnical college",
        "Department": "Civil",
        "StudyType": "fulltime",
        "Batch start year": 2015,
        "Batch end year": 2017,
      }
    ],
    "Skills": [
      {
        "Name": "javascript, React js, Node js, HTML, CSS & Mongo DB",
        "Level": "beginer",
        "Project": [
          "Pizza Delivery App"
        ]
      }
    ],
    "Languages": [
      {
        "Language": "Tamil, Enlish & Hindi",
      }
    ],
    "Interests": [
      {
        "Name": "Listining songs & Driving ",
      }
    ]

}

console.log(myResume)

// 2. loops

var json = [{
    "Name": "Dinesh Kumar s",
      "Email": "dineshsrinivasan05.ds@gmail.com",
      "Phone": 9566250529,
      "Degree": "Diploma in civil engineering",
},
{
    "Name": "DK S",
      "Email": "dineshsrinivasan05.ds@gmail.com",
      "Phone": 9566250529,
      "Degree": "Diploma in civil engineering",
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Email);
    console.log(obj.Phone);
    console.log(obj.Degree);

}
//for Each
json.forEach(function(obj) { console.log(obj.Name); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Email);
  console.log(json[key].Phone);
}
}
//for Of
let text = "";
for (let x of json[key].Degree) {
 text += x; 
}
 console.log(text);
