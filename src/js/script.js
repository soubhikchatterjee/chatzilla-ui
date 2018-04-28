$(document).ready(function() {
  // Initializes and creates emoji set from sprite sheet
  window.emojiPicker = new EmojiPicker({
    emojiable_selector: "[data-emojiable=true]",
    assetsPath: "/vendors/emoji-picker/lib/img/",
    popupButtonClasses: "far fa-smile"
  });
  // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
  // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
  // It can be called as many times as necessary; previously converted input fields will not be converted again
  window.emojiPicker.discover();

  $("#translate").html(unicodeToImage(":scream:") + " welxom");
});

function unicodeToImage(input) {
  if (!input) {
    return "";
  }
  if (!Config.rx_colons) {
    Config.init_unified();
  }
  return input.replace(Config.rx_codes, function(m) {
    var $img;
    if (m) {
      $img = $.emojiarea.createIcon(
        $.emojiarea.icons[":" + Config.reversemap[m] + ":"]
      );
      return $img;
    } else {
      return "";
    }
  });
}
