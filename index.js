function loadIssues() {

  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  for(let i = 0; i < issues.length; i++) {
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
  }
}