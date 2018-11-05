
let info = { aIssues : issues }
let src = document.getElementById("issue-log").innerHTML 
let template = Handlebars.compile(src)


document.getElementById("main").innerHTML += template(info) 

