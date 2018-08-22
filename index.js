function loadIssue(){
    //these correspond to the previous double curly brackets (mustaches that are defined in index.html)
//    var issue = {
//        state: "closed",
//        number: 5,
//        created_at: "2016-03-31 16:23:13 UTC",
//        body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//        }
    //variables in issue object MUST match those of defined in the HTML script
//    var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
//    var result = template(issue);
//    document.getElementsByTagName("main")[0].innerHTML += result;

//EXAMPLE WITH EACH Helpers
    var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
    for(var i=0;i<issues.length;i++) {
      var result = template(issues[i]);
      document.getElementsByTagName("main")[0].innerHTML += result;
    }
}

//lets add a custom handlebar helper method
Handlebars.registerHelper('comment_body', function() {
      if(this.state === "closed") {
        //We use Handlebars.SafeString to return a string that contains HTML so that HTML won't get escaped.
        return new Handlebars.SafeString(this.body)
      } else {
        return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
      }
})


//;ets do above better (this has also changed the function in index.html)

function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}
