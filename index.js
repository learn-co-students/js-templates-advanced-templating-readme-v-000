// Note : Since this seems like a code-along type lab, included updated functions from bot to top (first function at the bottom)


// ** Register "helpers" to put logic of HTML view into js file instead -- here, it is modifying the variable "comment_body" in the HTML**
// Uses "SafeString" for "registerHelper" so the markup isn't escaped (shown as text)
Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

 
// ** Render multiple issues --> Using Handlerbar's built-in "each" helper **
function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

// ** Render multiple issues --> Can use a for-loop (but it is slow) **
// function loadIssue() {
//   var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   for(var i=0;i<issues.length;i++) {
//     var result = template(issues[i]);
//     document.getElementsByTagName("main")[0].innerHTML += result;
//   }
// }

// ** Render one issue **
// function loadIssue() {
//   var issue = {
//     state: "closed",
//     number: 5,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }
 
//   var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//   var result = template(issue);
//   document.getElementsByTagName("main")[0].innerHTML += result;
// }
