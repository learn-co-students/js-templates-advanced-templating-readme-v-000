Handlebars.registerHelper('comment_body', function() {
  if (this.state === 'closed') {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString('<strong>' + this.body + '</strong>')
  }
})

// Pluralize the word 'comment' contextually, because I hate when things say 1 comments or even 1 comment(s)
Handlebars.registerHelper('pluralize_comments', function() {
  if (this.comments_count === 1) {
    return new Handlebars.SafeString('Comment')
  } else {
    return new Handlebars.SafeString('Comments')
  }
})

function loadIssues() {

  const template =
    Handlebars.compile(document.getElementById('issue-template').innerHTML);

  const result = template(issues);

  document.getElementsByTagName('main')[0].innerHTML += result;

}
