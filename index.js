// custom handlebars helper
Handlebars.registerHelper('comment_body', function() {
    if(this.state === "closed") {
      return new Handlebars.SafeString(this.body)
    } else {
      return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
    }
})

// function loadIssue() {
//     var issue = {
//         state: "closed",
//         number: 5,
//         created_at: new Date("Dec 18 2018"),
//         body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//     }

//     var template = Handlebars.compile(document.getElementById('issue-template').innerHTML);
//     var result = template(issue);
//     document.getElementsByTagName("main")[0].innerHTML += result;
// }

// // Vanilla JS
// function loadIssue() {
//     var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//     for(var i=0;i<issues.length;i++) {
//       var result = template(issues[i]);
//       document.getElementsByTagName("main")[0].innerHTML += result;
//     }
//   }

// Making use of Handlebars each helper
function loadIssues() {
    var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
    var result = template(issues);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }