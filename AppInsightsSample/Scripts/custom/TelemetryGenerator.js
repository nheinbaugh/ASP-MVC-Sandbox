$(function () {

    $("p, div, a, input, span").click(function (e) {
        const eName = $(this).data("event-name");
        const eText = $(this).data("event-text");
        if (eName) {
            debugger;
            e.stopPropagation();
        }
        debugger;
    });
})