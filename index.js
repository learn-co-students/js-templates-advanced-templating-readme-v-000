function loadIssue() {
  let issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }
  // compile markup and delimeters as part of a function we call next
  let template = Handlebars.compile(document.getElementById("issue-template").innerHTML)

  // result = template + the above issue to render the HTML string
  let result = template(issue)

  // append it to an element within our page so we can see it
  document.getElementsByTagName("main")[0].innerHTML += result
}
