$(".header-right>a").click(function() {
    $(".hamburger-menu").addClass("active");
})

//ho selezionato .close invece del più specifico i perché mi sembra più pratico per l'utente (più spazio per cliccare).
$(".close").click(function() {
    $(".hamburger-menu").removeClass("active");
})