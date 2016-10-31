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

// submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    //make a request to the server and send the name
    //capture a list of name and render it as a list
var names = ["name1","name2","name3","name4"];
var list ='';
for(var i=0; i<names.length; i++){
    list += '<li>'+names[i]+'</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML=list;
};
