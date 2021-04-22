jQuery(document).ready(function () {
  "use script";
  /*header*/
  var header = $("#header");
  $(window).on("scroll", function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > 2) {
      header.addClass("header--fixed");
    } else {
      header.removeClass("header--fixed");
    }
  });
  /*teble script*/
  var count;
  var summWrite = $("._summ");
  $("[data-money]").change(function () {
    count = 0;
    var table_arr = $("[data-money]");
    for (var i = 0; i < table_arr.length; ++i) {
      if ($(table_arr[i]).prop('checked')) {
        count += parseInt($(table_arr[i]).val(), 10);
      }
    }
    summWrite.html("$" + count);
  });
});