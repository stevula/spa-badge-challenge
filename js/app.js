var students;
var resp = _$().request("get", "http://localhost:3000/students").then(function(resp) {
                students = JSON.parse(resp);
            },
            function(err) {
                alert(err);
            });

console.log(students)
