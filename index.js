Handlebars.registerHelper("comment_body", function(){ //you can pass the body value into the function here
  if (this.state === "closed"){
    return new Handlebars.SafeString(this.body)
  }
  else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssue(){
    var template = Handlebars.compile(document.getElementById("issue-template").innerHTML)
    var result = template(issues)
    document.getElementsByTagName("main")[0].innerHTML += result
}
