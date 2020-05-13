let ysr_paginationLeftPos = "20px";
let ysr_paginationOpacity = 0;
let ysr_checkPaginationClick = 0;

$(".ysr-pagination-page-number").click(function() {
    $(".ysr-pagination-page-number").removeClass("active");
    $(this).addClass("active");
    ysr_paginationLeftPos = $(this).prop("offsetLeft") + "px";
    ysr_paginationOpacity = 1;
    ysr_checkPaginationClick = 1;

    $(".ysr-pagination-hover-overlay").css({
        left: ysr_paginationLeftPos,
        backgroundColor: "#6001d2",
        opacity: ysr_paginationOpacity
    });

    $(this).css({
        color: "#fff"
    });

});

$(".ysr-pagination-page-number").hover(
    function() {
        ysr_paginationOpacity = 1;
        $(".ysr-pagination-hover-overlay").css({
            backgroundColor: "#e2d1f7",
            left: $(this).prop("offsetLeft") + "px",
            opacity: ysr_paginationOpacity
        });


        $(".ysr-pagination-page-number.active").css({
            color: "#333d45"
        });


        $(this).css({
            color: "#fff"
        });

    },
    function() {
        if (ysr_checkPaginationClick) {
            ysr_paginationOpacity = 1;
        } else {
            ysr_paginationOpacity = 0;
        }

        $(".ysr-pagination-hover-overlay").css({
            backgroundColor: "#6001d9",
            opacity: ysr_paginationOpacity,
            left: ysr_paginationLeftPos
        });


        $(this).css({
            color: "#333d45"
        });


        $(".ysr-pagination-page-number.active").css({
            color: "#fff"
        });

    });

$(document).ready(function() {
    $('.ysr-pagination-container .active').click();
});