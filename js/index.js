AOS.init();

var slider = $("#slider");
var ul = $("#work");

$("#close_slider").on("click", function () {
    slider.fadeOut();
});
$("#screen_close").on("click", function () {
    slider.fadeOut();
});

ul.find("li").on({
    "mouseover": function () {
        ul.find("li").css("cursor", "zoom-in");
    },
    "click": function () {
        slider.fadeIn().css("display", "flex");
    }
});

var index = 1;
var title = "";

$('#work li').on('click', function () {

    title = $(this, 'p').text();
    $('#title').text(title);
});

$('#work li img').on('click', function () {

    index = $(this).parent('li').index();
    $("#num_photo").html(++index);

    var i = $(this).attr('src');
    $("#image").attr("src", i);
});

var back = $("#back");
var next = $("#next");

back.on("click", function () {
    --index;
    if (index < 1) {
        index = 6;
    }
    $("#image").attr("src", "../Image/img/works/large/" + index + ".jpg");
    $("#num_photo").html(index);
    title = $('#work li:nth-child(' + index + ') p').text();
    $('#title').text(title);
});
next.on("click", function () {
    ++index;
    if (index > 6) {
        index = 1;
    }
    $("#image").attr("src", "../Image/img/works/large/" + index + ".jpg");
    $("#num_photo").html(index);
    title = $('#work li:nth-child(' + index + ') p').text();
    $('#title').text(title);
});