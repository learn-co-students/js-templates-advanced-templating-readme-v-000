function loadAuthors() {
  // passing the whole authors array to the template and rendering it all at once
  var template = Handlebars.compile(document.getElementById("author-template").innerHTML);
  var result = template(authors);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

Handlebars.registerHelper('bold', function (options) {
  return new Handlebars.SafeString(
    '<strong>' +
    options.fn(this) +
    '</strong>');
});
