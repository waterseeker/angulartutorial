// An AngularJS module defines an application.

// The module is a container for the different parts of an application.

// The module is a container for the application controllers.

// Controllers always belong to a module.

var app = angular.module("myApp", []); 

//The [] parameter in the module definition can be used to define dependent modules.

//Without the [] parameter, you are not creating a new module, but retrieving an existing one.

app.directive("w3TestDirective", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});


