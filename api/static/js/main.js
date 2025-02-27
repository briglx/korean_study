$('.corner')
  .popup()
;

$('.ui.dropdown')
  .dropdown()
;

function showModal(el) {
  $('.ui.long.modal', function(){
    let card = $(el).parent().parent().parent(),
    category = card.find(".category").text(),
    question = card.find(".question").text(),
    modaltitle = document.querySelector(".modaltitle")

    console.log(card);


    modaltitle.textContent = question;
    // console.log(modaltitle.textContent);

    $(".highlight").remove();
    $(".modalcontent").text("").append(category)
  })
  .modal('show');
}

function showDescription(element) {
  $(element).find(".floated").toggleClass("toggle");
}
