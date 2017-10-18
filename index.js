//  1. loading a single hard coded issue
// function loadIssue(){
//   // console.log(event)
//   let issue = {
//     state: 'closed',
//     number: 5,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }

//   let template =
//   Handlebars.compile(document.getElementById("issue-template").innerHTML)
 
// //  compiled template variable:
// // "
// //       <article>
// //         <header><h3>Issue # ()
// //         </h3></header>
// //           <p></p>
// //           <footer><a href="">created</a></footer>
// //       </article>
// // "

//   let result = template(issue)
//   document.getElementsByTagName("main")[0].innerHTML += result
// }





// 2. loading the collection of issues, using for loop
// function loadIssue(){
//   // console.log(event)
//   let issue = {
//     state: 'closed',
//     number: 5,
//     created_at: "2016-03-31 16:23:13 UTC",
//     body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
//   }

//   let template =
//   Handlebars.compile(document.getElementById("issue-template").innerHTML)
  
//   for(let i = 0; i < issues.length; i++){
//     let result = template(issues[i])
//     document.getElementsByTagName("main")[0].innerHTML += result
//    }
//  }




// 3. better way, using letting template do the looping
// name changed to 'loadIssues (plural)
// changed name in index.html
// added {{#each this}}
// book ends for running the template on each instance
// addded {{/each}}

Handlebars.registerHelper('comment_body'),
function() {
  if(this.state !== 'closed') {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
}
 
function loadIssues(){
  let template =
  Handlebars.compile(document.getElementById("issue-template").innerHTML)
  let result = template(issues)
  document.getElementsByTagName("main")[0].innerHTML += result
 }


