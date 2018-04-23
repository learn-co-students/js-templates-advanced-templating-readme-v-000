Handlebars.registerHelper('comment_body', function() {
  if(this.state === 'closed') {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssue() {
  /*const issue = {
    state: "closed",
    number: 5,
    created_at: "2018-04-23 15:30:00 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET /newteam and POST /team."
  }*/

  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(let i=0;i<issues.length;i++) {
    let result = template(issues[i]);
    document.getElementsByTagName("main")[0].innerHTML += result;
  }
}

function loadIssues() {
  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  const result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
