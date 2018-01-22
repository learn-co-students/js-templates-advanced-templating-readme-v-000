Handlebars.registerHelper('comment_body', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})




function loadIssues() {

  //  The sample file to load.

  // var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  // var result = template(issue);
  // document.getElementsByTagName("main")[0].innerHTML += result;

  const template = Handlebars.compile(document.getElementById('issue-template').innerHTML);
  // issues is an array. in the template, issues is this. calling the template, and the template encountering the each key word, iterates the template over issues, writing a template for each one.
  const result = template(issues);
  document.getElementsByTagName('main')[0].innerHTML += result
}
