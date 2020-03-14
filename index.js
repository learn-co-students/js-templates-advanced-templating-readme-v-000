
function loadIssue() {
  var issue = {
    "body": "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team.",
    "created_at": "2016-03-31 16:23:13 UTC",
    "comments_count": 0,
    "id": 144948778,
    "number": 7,
    "state": "closed",
    "url": "https://api.github.com/repos/learn-co-curriculum/basic-sinatra-forms-lab/issues/7"
  }

  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issue);
  document.getElementsByTagName("main")[0].innerHTML += result;
}