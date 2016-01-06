// bind body tag
var contentArea = document.getElementById("content");

// bind template scripts
var studentsIndexTemplate = document.getElementById("students-index-template").innerHTML;
var studentsShowTemplate = document.getElementById("students-show-template").innerHTML;

// compile template
var compiledStudentsIndex = Handlebars.compile(studentsIndexTemplate);
var compiledStudentsShow = Handlebars.compile(studentsShowTemplate);

// set copperheads object
var copperheads;

_$().request("get", "http://localhost:3000/students")
.then(
    function(data) {
        // bind copperheads to server data
        copperheads = {students: JSON.parse(data)};
    },
    function(err) {
        alert(err);
    })
.then(
    function() {
        // add compiled html to page
        contentArea.innerHTML = compiledStudentsIndex(copperheads);

        _$(".student-link").on("click", function(e) {
            e.preventDefault();
            objIndex = this.id - 1;
            contentArea.innerHTML = compiledStudentsShow(copperheads.students[objIndex]);
        })


    })
