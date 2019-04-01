// check off the spacific todo by clicking
$("ul").on("click", "li" , function(){

$(this).toggleClass("completed");
});

// click on X to delete the todo
$("ul").on("click", "span" , function(event){
$(this).parent().fadeOut(function(){
    $(this).remove();
});
// we use stopPropagation not to include the entire list
event.stopPropagation();
});
//adding new todo here
$("input").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from the input
        // creating new todo
        var todotext = $(this).val();
        // this is how we clear our new todo
        $(this).val("");
        // creating a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todotext + "</li>")
    }
});

$(".fa-plus").click(function(){
$("input").fadeToggle();
});