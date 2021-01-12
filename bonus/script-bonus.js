//selectors
//hover on anything
function elOut() {
    $(this).removeClass("highlight");
}

$("ul li").hover(function() {
    $(this).addClass("highlight");
}, elOut)

//click on a p inside a div, toggle color
$("div p").click(function() {
    if(this.style.color === "lightblue") {
        this.style.color = "inherit";
    } else {
        this.style.color = "lightblue";
    }
})