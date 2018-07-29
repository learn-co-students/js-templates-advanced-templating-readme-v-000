
function loadIssues(){
  
  //Creates a json object to use when rendering the template later
  var issue={
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  };
  
  
  //find the template script tag and turn it into a real template
  var template=Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result=template(issue);
  document.getElementsByTagName("main")[0].innerHTML+=result;
  
  
  
}