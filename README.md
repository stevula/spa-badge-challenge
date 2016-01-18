# SPA-Badge

The purpose of this challenge was to take a static website containing HTML and CSS and turn it into a dynamic single-page application (SPA). The website displays a list of students in the class and allows the user to visit a "badge" page for a given user, where they can nominate the student for a new badge or vote on a badge that someone else has already created. 

The application uses:

- Rails API back-end

- JavaScript front-end 

- Handlebars.js for templating

- "miniQuery.js" for DOM manipulation (a lightweight, custom implementation of several jQuery methods)  

## Original instructions:

- - -

## SPABadge

Mr. Merriwether is opening up a competitor bootcamp and wants to hire DBC students to make another version of BootBadge.

Here's the BootBadge app: http://bootbadge.herokuapp.com/cohorts/63

TodoMVC has helpful tips for patterns you could use in your app: https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs

For a given cohort, each student has a page that contains "badges" with a given catchphrase.
Visitors to the site can vote for their favorite badge on each student's page. The badges should appear from most popular at the top to least popular at the bottom.

Mr. Merriwether read a Medium post that said JavaScript applications are the future and anyone still using a full-stack Rails is an idiot (obviously false).

Because he is the client and funding the project, you need to use JavaScript to make a single-page app version of BootBadge called SPABadge. SPABadge is a "bake-off" to see who should get the contract. The first version will have a single cohort: DBC teachers and mentors.

You can find the main page at spa-badge.html. Click the Sample Page link to see what a teacher's badge page should look like.

Rules
- Has to be a JavaScript app that utilizes your miniQuery library
- You can add features to your miniQuery
- Only XHR (AJAX) requests to the server are allowed except for the initial app load
- jQuery is banned; any features you want from jQuery must be implemented in your miniQuery
- Frameworks and libraries such as Angular and React are banned
- There's an ban exception for templating libraries such as [Handlebars] (http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/)
- All page navigation must be done through JS routing (see Considerations section)
- Data should be persisted on a Rails API backend. Your Rails app should not serve / have any erb or haml files
- All DOM manipulation should take place on the client

Considerations
- Rails API lecture code: https://github.com/sf-copperheads-2016/rails-api-lecture
- Badge sorting by vote count.
- Routing. http://myapp.com/#/walker should show me Walker's page for example. See the pushState API for implementation ideas: https://developer.mozilla.org/en-US/docs/Web/API/History_API
- Keeping track of votes. Use a cookie to manage how many times a person has voted.
- Security. Escape the user's input to avoid XSS attacks. http://www.veracode.com/security/xss
- If you'd like to pursue an MVC architecture, see TodoMVC for inspiration: https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanillajs
