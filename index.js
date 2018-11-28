Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
    //user Handlebars.SafeString to return string containing HTML so that HTML won't get escaped
    //comment_body is then used in replace of body
  }
})

function loadIssues() {
  //make a call to 'Handlebars.compile' with the 'innerHTML' of template
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
