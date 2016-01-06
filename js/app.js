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

// hit "/" (index) route
var getIndexPage = _$().request("get", "http://localhost:3000/students")
    .then(
        function(data) {
            // bind copperheads to server data
            copperheads = {students: JSON.parse(data)};
        },
        function(err) {
            console.log("error");
        })
    .then(
        function() {
            // add compiled html to page
            contentArea.innerHTML = compiledStudentsIndex(copperheads);

            _$(".student-link").on("click", function(e) {
                e.preventDefault();
                getShowPage("get", "http://localhost:3000/students/" + this.id);
                // contentArea.innerHTML = compiledStudentsShow(copperheads.students[objIndex]);
            });
        })

// hit "/students/:id (show) route"
var getShowPage = function(type, url) {
    return _$().request(type, url)
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
            // add compiled html to page
            contentArea.innerHTML = compiledStudentsShow(copperhead);
        })
    }



