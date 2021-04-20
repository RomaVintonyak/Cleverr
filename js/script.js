jQuery(document).ready(function () {
  "use script";
  /*header*/
  var header = $("#header");
  $(window).on("scroll", function(){
    var scrollPos = $(this).scrollTop();
    if(scrollPos >2){
      header.addClass("header--fixed");
    }else{
      header.removeClass("header--fixed");
    }
  });
});