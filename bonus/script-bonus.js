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

//chaining ad dbclick on button to add a class smw else
$("button")
    .mouseenter(function() {
        $(this).addClass("highlight");
    })
    .mouseleave(function() {
        $(this).removeClass("highlight");
    });

$("button:first-child()").click(function() {
// !!!! non ho potuto usare !==, altrimenti nn riconosce la condizione 0
    if(document.querySelector("h1").style.opacity != 0) {
        $("h1").fadeTo(250, 0);
    } else {
        $("h1").fadeTo(250, 1);
    }
})

$("button:nth-child(2)")
    .dblclick(function() {
        $(".target:nth-child(2)").hide();
        setTimeout(
            function() {
                $(".target:nth-child(2)").show()
            }, 540)
    });
