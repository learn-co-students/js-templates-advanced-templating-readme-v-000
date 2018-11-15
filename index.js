Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssues() {
  // compile markup and delimeters as part of a function we call next
  let template = Handlebars.compile(document.getElementById("issue-template").innerHTML)

  // result = template + passing the entire array of issues from issues.js
  let result = template(issues)

  // append it to an element within our page so we can see it
  document.getElementsByTagName("main")[0].innerHTML += result
}
