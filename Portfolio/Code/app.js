
function arrowFunction() {
    const buttonArrow = document.querySelector("#btn-arrow-right");
    const iconArrow = document.querySelector(".bi-arrow-right");

    iconArrow.style.margin = "0px 0px 0px 10px";
}

function arrowFunction2() {
    const buttonArrow = document.querySelector("#btn-arrow-right");
    const iconArrow = document.querySelector(".bi-arrow-right");
 
    iconArrow.style.margin = "0px";
}


function cvEnter() {
    const iconArrow = document.querySelector(".bi-arrow-right");

    iconArrow.style.margin = "0px 0px 0px 10px";
}
cvEnter();

function cvLeave() {
    const iconArrow = document.querySelector(".bi-arrow-right");

    iconArrow.style.margin = "0px";
}
cvLeave();

$(document).ready(function() {
    $("#btn-load-more").click(function() {
        $("#load-projects").toggle(500);
    });
});

$(document).ready(function() {
    $("#btn-load-more").click(function() {
        $("#btn-load-more").toggle(200);
    });
});
