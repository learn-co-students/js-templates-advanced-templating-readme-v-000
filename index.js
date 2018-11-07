Handlebars.registerHelper('comment_body', function() {
    if(this.state === "closed") {
      return new Handlebars.SafeString(this.body)
    } else {
      return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
    }
})

function loadIssues() {
    // Next, we make a call to Handlebars.compile with the innerHTML of our template. This will "compile" the markup and delimiters as part of a function that we can call with our context to output a rendered HTML string, which is what's happening in var result = template(issue). If we had another issue object with different data, we could call template() again and get the same template rendered with the new data.

    var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
    var result = template(issues);

    document.getElementsByTagName("main")[0].innerHTML += result;
}