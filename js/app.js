// bind body tag
var body = document.getElementsByTagName("body")[0];

// bind template script
var templateScript = document.getElementById("students-template").innerHTML;

// compile template
var template = Handlebars.compile(templateScript);


// populate copperheads objects with data from server
var promise = _$().request("get", "http://localhost:3000/students").then(
    function(data) {
      // set copperheads object
      var copperheads = {students: JSON.parse(data)};

      // add compiled html to page
      body.innerHTML = template(copperheads);
    },
    function(err) {
      alert(err);
    }
  );


