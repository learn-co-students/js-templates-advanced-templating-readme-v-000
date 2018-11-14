Handlebars.registerHelper('comment_body', function() {
    if(this.state === 'closed') {
        // return an HTML string so that HTML won't get escaped
        return new Handlebars.SafeString(this.body)
    } else {
        return new Handlebars.SafeString("<strong>" + this.body + "</strong>");
    };
});

function loadIssues() {
    // create an issue object to hold GitHub issue data
    // used as the context of Handlebars template
    let issue = {
        state: "closed",
        number: 5,
        created_ad: "2016-03-31 16:23:13 UTC",
        body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
    };

    // 'compile' the markup and delimiters as part of a function that can be called with the context to output a rendered HTML string: let result = template(issue)
    let template = Handlebars.compile(document.getElementById('issue-template').innerHTML);
    // render the whole array of issues
    let result = template(issues);
    // taking the rendered template and putting it back into the page to see it
    document.getElementsByTagName('main')[0].innerHTML += result;
};
