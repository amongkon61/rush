$(document).ready(function() {
    $("#social").mouseenter(function () {
        $(this).css({"background-color":"#62b7fd"});
    }).mouseleave(function () {
        $(this).css({"background-color":"#1c97fd"});
    });

    $("#experience").mouseenter(function () {
        $(this).css({"background-color":"#50affd"});
    }).mouseleave(function () {
        $(this).css({"background-color":""});
    });

    $("#skill").mouseenter(function () {
        $(this).css({"background-color":"#ff8c00"});
    }).mouseleave(function () {
        $(this).css({"background-color":""});
    });

    $("#exp-nav").click(function () {
        $(this).css({"color":"#fdaf32"});
        $("#contact-nav").css({"color":"white"});
        $("#skill-nav").css({"color":"white"});
        $("#experience").css({"background-color":"#50affd"});
        $("#skill").css({"background-color":""});
    });

    $("#skill-nav").click(function () {
        $(this).css({"color":"#fdaf32"});
        $("#exp-nav").css({"color":"white"});
        $("#contact-nav").css({"color":"white"});
        $("#skill").css({"background-color":"#ff8c00"});
        $("#experience").css({"background-color":""});
    });

    $("#contact-nav").click(function () {
        $(this).css({"color":"#fdaf32"});
        $("#exp-nav").css({"color":"white"});
        $("#skill-nav").css({"color":"white"});
        $("#skill").css({"background-color":""});
        $("#experience").css({"background-color":""});
    });
});

function linkPerson1() {
    window.location.href = 'person1.html';
}

function linkPerson2() {
    window.location.href = 'person2.html';
}