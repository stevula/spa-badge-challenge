// bind body tag
var contentArea = document.getElementById("content");

// bind template script
var templateScript = document.getElementById("students-template").innerHTML;

// compile template
var template = Handlebars.compile(templateScript);

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
        contentArea.innerHTML = template(copperheads);

        _$("a").on("click", function(e) {
            e.preventDefault();
            contentArea.innerHTML = "";
        })
    })
