// bind body tag
var contentArea = document.getElementById("content");

// bind template scripts
var studentsIndexTemplate = document.getElementById("students-index-template").innerHTML,
    studentsShowTemplate = document.getElementById("students-show-template").innerHTML;

// compile template
var compiledStudentsIndex = Handlebars.compile(studentsIndexTemplate),
    compiledStudentsShow = Handlebars.compile(studentsShowTemplate);

// set copperheads object for index page and copperhead for show page
var copperheads,
    copperhead;

// student name links on index page
var indexLinkListener = function() {
    _$(".student-link").on("click", function(e) {
        e.preventDefault();
        getShowPage("get", "http://localhost:3000/students/" + this.id);
    });
}

// hit index route and render index page
var getIndexPage = _$().request("get", "http://localhost:3000/students")
.then(
    function(data) {
        // bind copperheads to server data
        copperheads = JSON.parse(data);
    },
    function(err) {
        console.log("error");
    })
.then(
    function() {
        // render image page template
        contentArea.innerHTML = compiledStudentsIndex(copperheads);

        // bind student name links from index to show page action
        indexLinkListener();
    })

// vote button on show page
var voteButtonListener = function() {
    _$(".up").on("click", function(e) {
        e.preventDefault();
        // TODO: send patch request
    });
    _$(".down").on("click", function(e) {
        e.preventDefault();
        // TODO: send patch request
    });
}

// hit show route and render show page
var getShowPage = function(type, url) {
    _$().request(type, url)
    .then(
        function(data) {
            // bind copperhead to specific student data from server
            copperhead = JSON.parse(data);
        },
        function(err) {
            console.log("error");
        })
    .then(
        function() {
            // render show page template
            contentArea.innerHTML = compiledStudentsShow(copperhead);

            // bind vote buttons to badge vote-incrementing action
            voteButtonListener();
        })
}



