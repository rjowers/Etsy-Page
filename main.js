


var putImages;
for (var count = 0; count < items.results.length; count++) {
    putImages = $(".alltheitems").html();
    putImages +=
    `<div class="image">
    <div class="icons">
    <img class="heart" src="heart.png"/>
    <img class="hamburger" src="hamburger.png"/>
    </div>
    <a href = "${items.results[count].url}"><img src="${items.results[count].Images[0].url_170x135}" width = "225"/></a>
    <p class="title">${items.results[count].title}</p>
    <p class="shopname">${items.results[count].Shop.shop_name}</p>
    <p class="money">$${items.results[count].price}</p>

   </div>`;
    $(".alltheitems").html(putImages);
};

//.hover jquery functon

$(".image").hover(function(event) {
  $(".heart").addClass("appear");
  $(".hamburger").addClass("appear");
}, function(event) {
  $(".heart").removeClass("appear");
  $(".hamburger").removeClass("appear");

});

function cleartext(){
  $('.input').value= '';
}
function settext(){
  if($('.input').value=== ''){
    $('.input').value= 'search for items or shops'
  }
}
