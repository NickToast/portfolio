function openLinkedIn() {
    window.open("https://www.linkedin.com/in/ntangsouvanh/")
}

function openGitHub() {
    window.open("https://github.com/NickToast")
}

// var text = document.querySelector("#text")

// var img = document.createElement("img");
// img.src = "./images/pfp.JPG";

// function over(element) {
//     text.remove();
//     document.pfp.appendChild(img);
// }


//on scroll fade in

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

