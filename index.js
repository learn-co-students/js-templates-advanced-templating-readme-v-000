Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssue() {
  let issue = {
    state: "closed",
    number: 5,
    created_at: "2018-10-18 12:44:44 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }

  let template = Handlebars.compile(document.getElementById("issue-template").innerHTML);

  let result = template(issue);

  document.getElementsByTagName("main")[0].innerHTML += result;
}

function loadIssues() {
  let template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  let result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
