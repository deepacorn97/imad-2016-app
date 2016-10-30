//counter code
var button = document.getElementById('search');
var counter = 0;

button.search = function(){
    
    //Make  a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('search');
    span.innerHTML = counter.toString();
};
