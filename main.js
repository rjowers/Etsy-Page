
//for image -> items.results[0].Images[0].url_75x75


//var box = `
//    <img class="whiskey-pics" src="https://img0.etsystatic.com/126/0/11063629/il_75x75.874258770_it05.jpg">

  //  </div>
//`


//function pictures () {
  //for (var i = 0; i < result.length; i++) {
    //items[i]
  //}
  //console.log(pictures)
//}


var putImages;
for(var count = 0; count < items.results.length; count++){
  putImages = $(".alltheitems").html();
  putImages +=
  `<div class="image"><img src="${items.results[count].Images[0].url_170x135}" width = "225"/>
   <p class="title">${items.results[count].title}</p>
  <p class="shopname">${items.results[count].Shop.shop_name}</p>
  <p class="money">${items.results[count].price}</p>
   </div>`;
  $(".alltheitems").html(putImages);
};





//$('.alltheitems').html(box)

//$('.alltheitems').html(items.results[0].Images[0].url_75x75)
