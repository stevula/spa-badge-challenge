var miniQuery = (function(selector) {
    var selected = document.querySelectorAll(selector);

    return {
        // DOM Manipulation
        hide: function() {
            for(var i in selected) {
                if(selected.hasOwnProperty(i)) {
                    selected[i].style.visibility = "hidden";
                }
            }
        },
        show: function() {
            for(var i in selected) {
                if(selected.hasOwnProperty(i)) {
                    selected[i].style.visibility = "visible";
                }
            }
        },
        addClass: function(className) {
            for(var i in selected) {
                if(selected.hasOwnProperty(i)) {
                    selected[i].classList.add(className);
                }
            }
        },
        removeClass: function(className) {
            for(var i in selected) {
                if(selected.hasOwnProperty(i)) {
                    selected[i].classList.remove(className);
                }
            }
        },

        // Event Dispatching
        on: function(eventName, eventHandler) {
            for(var i in selected) {
                if(selected.hasOwnProperty(i)) {
                    selected[i].addEventListener(eventName, eventHandler);
                }
            }
        },
        trigger: function(eventName) {
            var e = new Event(eventName)
            for(var i in selected) {
                if(selected.hasOwnProperty(i)) {
                    selected[i].dispatchEvent(e);
                }
            }
        },

        // AJAX Requests
        request: function(type, url, data) {

            var promise = new Promise(function(resolve, reject) {
                var req = new XMLHttpRequest();
                req.open(type, url, true);

                req.onload = function() {
                    if(req.status >= 200 && req.status < 400) {
                        // success
                        resolve(req.response);
                    }
                    else {
                        // failure
                        reject(req.response);
                    }
                }
                req.send(data);
            });

            return promise;
        }
    }
})

var _$ = function(selector) {
    return miniQuery(selector);
}
