let content = '';
let contact = document.getElementById("contact");
let about= document.getElementById("about");
let moreInfo = document.getElementById('intro');
// Use jquery to change the text when hover project name
$('.projects').mouseenter(function() {
    content = $(this).children('.projectName').html();
    $(this).children('.projectName').html("<span>< </span>" + content + "<span> /></span>");
    $('span').css('color','orange');
});
$('.projects').mouseleave(function() {
    $(this).children('.projectName').text(content);
})


