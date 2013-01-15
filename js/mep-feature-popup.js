(function ($) {
    // markers

    $.extend(mejs.MepDefaults, {
        popupText: mejs.i18n.t('Popup'),
        popupImage: 'popup.gif',
        popupClick: function (player) {

            $(player.container.parent()).dialog({
                height: 'auto',
                width: 'auto',
                title: 'Popup',
                modal: true,
                close: function () {
                    $(this).dialog('destroy');
                    $(player.container.parent()).show();
                }
            });
        }
    });

    $.extend(MediaElementPlayer.prototype, {
        buildpopup: function (player, controls, layers, media) {
            var t = this,
                popupBtn = $('<div class="mejs-button mejs-popup-button">' +
                    '<button type="button" style="background:url(' + player.options.popupImage + ') no-repeat;" aria-controls="' + t.id + '" title="' + t.options.popupText + '"></button>' +
                    '</div>').appendTo(controls);


            popupBtn.on('click', function (e) {
                player.options.popupClick(player);

            });

        }
    });

})(mejs.$);