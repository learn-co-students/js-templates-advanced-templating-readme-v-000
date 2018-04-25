Handlebars.registerHelper('comment_body', function() {
  if(this.state === 'closed') {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssues() {
  debugger
  var temp = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  let result = temp(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}