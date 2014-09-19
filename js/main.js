jQuery.event.props.push( "dataTransfer" );
$(".drop-zone").on("dragenter",function(e){
    $(this).addClass("drag");
});
$(".drop-zone").on("dragleave",function(e){
    $(this).removeClass("drag");
});
$(".drop-zone").on("dragover",function(e){
    e.preventDefault();
});
$(".drop-zone").on("drop",function(ev){
    ev.preventDefault();
    $(".drop-zone").removeClass("drag");
    var data = ev.dataTransfer.getData("text/html");
    console.log(data);
    $(ev.target).parent().after($("#"+data))
});
$("[draggable=true]").on("dragstart",function(e){
    console.log(e.target);
    e.dataTransfer.setData("text/html", e.target.id);
});
$(".user-story").on("click",function(e){
    console.log(e);
});
$("#chat").on("click", function(e){
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".chat").addClass("active");
});
$("#project").on("click", function(e){
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".board-page").addClass("active");
});