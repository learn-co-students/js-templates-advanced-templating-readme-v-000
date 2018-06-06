// Custom Handlebar Helper
Handlebars.registerHelper('comment_body', function() {
  // 'if' the current issue's state is 'closed', return the regular HTML string
  if(this.state === "closed") {
    // 'Handlebars.SafeString' enables us to return a string that contains HTML
    // without the HTML getting escaped
    return new Handlebars.SafeString(this.body)
  } else {
    // 'else' return the the current issue's state HTML in a strong tag
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

function loadIssues() {
  // Creating the Template
  var template =
Handlebars.compile(document.getElementById("issue-template").innerHTML);
    // Passing our issue array to render our template with the data
    var result = template(issues);
    // taking rendered template and putting it back into our page
    document.getElementsByTagName("main")[0].innerHTML += result;
}
