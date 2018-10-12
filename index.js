Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})


function loadIssues() {

  //passing the whole issues array to template and rendering it all at once
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}


/*
function loadIssue() {
  var issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }

  //"compile" markup and delimiters as part of a function that we can call with our context to output a rendered HTML string in var result = template(issue)
   //we could call template() again and get the same template rendered with the new data

  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issue);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
*/
