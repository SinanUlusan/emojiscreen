$(function () {
  var showObjects = $("#emojiSection");

  $.ajax({
    type: "GET",
    url: "./data.json",
    success: function (emojiItems) {
      var emojiCard = "";

      for (var i in emojiItems) {
        var type = emojiItems[i].type;
        var emojiImgs = emojiItems[i].emojiImgs;
        var year = emojiItems[i].year;
        var title = emojiItems[i].title;
        emojiCard +=
          "<div class='emoji-card'><div class='emoji-container'>\
        <i class='fas fa-question-circle'></i>\
        <p class='container-bottom'><span class='type'>" +
          type +
          "</span></p></div>\
        <div class='emoji-images'>" +
          emojiImgs +
          "</div><div class='emoji-card-title hide-card'>\
        <h3>" +
          title +
          " (" +
          year +
          ")" +
          "</h3></div></div>";
      }

      showObjects.html(emojiCard);
      twemoji.parse(document.body);
    }
  });

  $("#emojiSection").on("click", ".emoji-images", function () {
    $(this).siblings(".emoji-card-title").toggleClass("hide-card");
  });

  $("#emojiSection").on("mouseover", ".emoji-container", function () {
    $(this).find(".container-bottom").addClass("new-container");
  });

  $("#emojiSection").on("mouseleave", ".emoji-container", function () {
    $(this).find(".container-bottom").removeClass("new-container");
  });
});
