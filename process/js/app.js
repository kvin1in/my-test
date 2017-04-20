var $ = jQuery = require('jquery');
require('jquery-ui-browserify');
require('../../bower_components/jQuery-ui-Slider-Pips/dist/jquery-ui-slider-pips');
require('./bootstrap.js');

require('./mobile.js');
require('./browser.js');
require('./dragndrop.js');


$(function() {
    var step;
    var slider = $('.slider');
    var slider2 = $('.slider2');
    var forcheck;


    $.extend($.ui.slider.prototype.options, {
        animate: 300
    });


    step = slider.val();

    // RANGE SLIDER FIRST

    slider.slider({
            min: 1,
            value: 1,
            max: 21,
            slide: function(event, ui) {
                slider.val(ui.value);
            },
            change: function(event, ui) {
                slider.val(ui.value);
            }
        })
        .slider("pips", {
            rest: "label"
        });

    // RANGE SLIDER SECOND

    slider2.slider({
            min: 1,
            max: 21
        })
        .slider("pips", {
            rest: "label"
        });


    // BUTTON

    $('#btnAdd').on('click', function() {
        step = slider.val();
        console.log(step);
        slider2.slider('value', step);
        slider2.slider("disable");
        if ($('#bad').hasClass('hidden')) {
            $('#bad').addClass("hidden");
        }
        var checked = document.querySelector('[name="optradio"]:checked');
        var checked2 = document.querySelector('[name="optradio2"]:checked');
        forcheck = checked ? checked.value : 'Not selected';
        $("#" + forcheck).prop("checked", true);

    });

    // END BUTTON


    // // DRAG AND DROP

    // var drake = dragula([document.querySelector('.dragTo'), document.querySelector('.dragFrom')])
    // drake.on('drag', function(el, source) {
    //     if (source.className === 'dragTo') {
    //         source.style.transform = 'rotate(0deg)';
    //     }
    // });

    // drake.on('drop', function(el, target) {
    //     if (target.className === 'dragTo') {
    //         document.getElementById('draggable').classList.add('bye');
    //         document.getElementsByClassName('dragTo')[0].classList.add('bye');
    //         document.getElementById('bad').classList.add('hidden');
    //         document.getElementById('good').classList.remove('hidden');
    //         window.setTimeout(function() {

    //             document.getElementsByClassName('dragTo')[0].classList.add('hi');
    //         }, 1000);


    //     }
    // });


    // END DRAG AND DROP
});