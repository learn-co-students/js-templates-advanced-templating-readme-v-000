// Function to display one static issue
// function loadIssue() {
//   let issue = {
//     state: "closed",
//     number: 5,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }

//   let template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   let result = template(issue);

//   document.getElementsByTagName("main")[0].innerHTML += result;
// }

// Function to display all issues using "for" but it is very slow!
// function loadIssue() {
//   var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   for(var i=0;i<issues.length;i++) {
//     var result = template(issues[i]);
//     document.getElementsByTagName("main")[0].innerHTML += result;
//   }
// }

// Utilizing Custom Helper to make template styles
// Takes 'body' string and uses 'comment_body' instead to style in index.html

Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

// Utilizing the {{each}} helper dramtically increases the load time!
function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}