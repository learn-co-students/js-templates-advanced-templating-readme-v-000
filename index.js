Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})
 
function loadIssues() {
  //display only one issue:
  // var issue = {
  //   state: "closed",
  //   number: 5,
  //   created_at: "2016-03-31 16:23:13 UTC",
  //   body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  // }

  //var result = template(issue);
 
  // could use loop to iterate over collection
  // var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  //   for(var i=0;i<issues.length;i++) {
  //     var result = template(issues[i]);
  //     document.getElementsByTagName("main")[0].innerHTML += result;
  // }

  //HOWEVER, we can use built-in each helper and let handlebars build collection
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}