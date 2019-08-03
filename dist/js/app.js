$(document).ready(function () {

    pschtacket($('select[name="vshtype"]','#metalshtaketform'),'#metalshtaketform');
    
    $( ".tab-pane input, .tab-pane select" ).change(function() {
        var obj = $(this);
        var form_id = obj[0].form.id;
        var field_name = $(this).attr("name");
        var field_val = $(this).val();

        $.post("/save_session.php", {fid: form_id, fname: field_name, fvalue: field_val})
            .done(function( data ) {
            console.log( "Data Loaded: " + data );
        });
    });
    // Checkboxes and Radio Buttons
    $(':radio, :checkbox').radiocheck();

    $(".anchor_link").on("click", function () {
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: $($(this).attr('href')).position().top - 5
        }, 500);
        return false;
    });

    var PhotoSwipe = window.PhotoSwipe;
    var PhotoSwipeUI_Default = window.PhotoSwipeUI_Default;
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var gallery = {};
    var options = {
        index: 0,
        shareEl: false
    };

    var galleries = [
        [
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_dsc_4205.jpg',
                w: 640,
                h: 432,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_dsc_4208.jpg',
                w: 640,
                h: 432,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p5140084.jpg',
                w: 640,
                h: 389,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p5140086.jpg',
                w: 640,
                h: 450,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p5140090.jpg',
                w: 640,
                h: 419,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p5140092.jpg',
                w: 640,
                h: 451,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p5170093.jpg',
                w: 630,
                h: 480,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p5170096.jpg',
                w: 625,
                h: 480,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p6230140.jpg',
                w: 640,
                h: 441,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p6230141.jpg',
                w: 640,
                h: 447,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_p6280144.jpg',
                w: 640,
                h: 408,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_02.jpg',
                w: 640,
                h: 480,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_13.jpg',
                w: 640,
                h: 480,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_14.jpg',
                w: 360,
                h: 479,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_15.jpg',
                w: 660,
                h: 479,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_16.jpg',
                w: 640,
                h: 480,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_17.jpg',
                w: 640,
                h: 480,
                title: 'Деревянные заборы'
            },
            {
                src: 'dist/img/gallery/derevo/phoca_thumb_l_pinokio_18.jpg',
                w: 640,
                h: 480,
                title: 'Деревянные заборы'
            }
        ],
        [
            {
                src: 'dist/img/gallery/zabor-metal/0002.jpg',
                w: 800,
                h: 600,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0003.jpg',
                w: 625,
                h: 625,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0005.jpg',
                w: 600,
                h: 400,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0006.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0007.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0008.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0009.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0010.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0011.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0012.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0013.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0014.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0015.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0016.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0017.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0018.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            },
            {
                src: 'dist/img/gallery/zabor-metal/0019.jpg',
                w: 1000,
                h: 750,
                title: 'Металлический штакетник FinFold'
            }
        ],
        [
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_1.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_2.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_3.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_4.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_5.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_6.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_7.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_8.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_9.jpg',
                w: 640,
                h: 480,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_10.jpg',
                w: 640,
                h: 389,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_11.jpg',
                w: 640,
                h: 412,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_12.jpg',
                w: 640,
                h: 426,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_13.jpg',
                w: 622,
                h: 460,
                title: 'Заборы из сетки рабица'
            },
            {
                src: 'dist/img/gallery/setka/phoca_thumb_l_setka_14.jpg',
                w: 622,
                h: 460,
                title: 'Заборы из сетки рабица'
            }
        ],
        [
            {
                src: 'dist/img/gallery/profnastil/dsc_3964.jpg',
                w: 800,
                h: 540,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4022.jpg',
                w: 800,
                h: 540,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4026.jpg',
                w: 800,
                h: 540,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4076.jpg',
                w: 800,
                h: 506,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4077.jpg',
                w: 800,
                h: 539,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4097.jpg',
                w: 800,
                h: 540,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4110.jpg',
                w: 800,
                h: 540,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4111.jpg',
                w: 800,
                h: 503,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4133.jpg',
                w: 800,
                h: 446,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4140.jpg',
                w: 800,
                h: 470,
                title: 'Заборы из профнастила'
            },
            {
                src: 'dist/img/gallery/profnastil/dsc_4208_1.jpg',
                w: 800,
                h: 540,
                title: 'Заборы из профнастила'
            }
        ],
        [
            {
                src: 'dist/img/blag-pisimo-1-big.jpg',
                w: 771,
                h: 1080,
                title: 'Благодарственное письмо от 1 канала'
            }
        ],
        [
            {
                src: 'dist/img/blag-pisimo-2-big.jpg',
                w: 833,
                h: 1200,
                title: 'Благодарственное письмо от 1 канала'
            }
        ],
        [
            {
                src: 'dist/img/gallery/monolit/1.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/2.jpg',
                w: 360,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/3.jpg',
                w: 640,
                h: 479,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/4.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/5.jpg',
                w: 617,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/6.jpg',
                w: 640,
                h: 426,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/7.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/8.jpg',
                w: 360,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/9.jpg',
                w: 365,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/10.jpg',
                w: 362,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/11.jpg',
                w: 360,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/12.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/13.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/14.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/15.jpg',
                w: 640,
                h: 480,
                title: 'Заборы на монолитном основании'
            },
            {
                src: 'dist/img/gallery/monolit/16.jpg',
                w: 360,
                h: 480,
                title: 'Заборы на монолитном основании'
            }
        ]
    ];

    $('.js-toggle-gallery').on('click', function (e) {
        e.preventDefault();

        var galleryItems = galleries[$(this).data('gallery-id')];

        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
        gallery.init();
    });

    if (location.hash.length) {
        var hash = location.hash.substr(0);
        if (hash == '#setka' || hash == '#proflist' || hash == '#derevo' || hash == '#metalshtaket') {
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: $('#calc').position().top - 5
            }, 500);
            $('#myTab a[href="' + hash + '"]').tab('show');
        }
    }

    $("#calcprof, #calcset").on("click", function () {
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: $('#calc').position().top - 5
        }, 500);

        var id = $(this).data('calc');
        $('#myTab a[href="#' + id + '"]').tab('show');
        return false;
    });

    $('#usubn').click(function (e) {
        e.preventDefault();
        if ($('#uteln').val().length > 0) {
            $.ajax({
                type: 'POST',
                url: 'ajax.php',
                data: {
                    ftype: 'backcallmail',
                    uname: $('#unamen').val(),
                    utel: $('#uteln').val(),
                    utext: $('#utextn').val()
                },
                dataType: 'json',
                success: function (data) {
                    fbq('track', 'Lead');
                    alert(data.msg);
                }
            });
        } else {
            alert('Не заполнено поле "Телефон"');
        }
    });

    $('#usub1, #usub2, #usub3').click(function (e) {
        e.preventDefault();
        if ($(this).attr('id') == 'usub1') {
            SubmitRequest(1);
        } else if ($(this).attr('id') == 'usub2') {
            SubmitRequest(2);
        } else if ($(this).attr('id') == 'usub3') {
            SubmitRequest(3);
        }
    });

    function SubmitRequest(id) {
        if ($('#utel' + id).val().length > 0) {
            $.ajax({
                type: 'POST',
                url: 'ajax.php',
                data: {
                    ftype: 'backcall',
                    uname: $('#uname' + id).val(),
                    utel: $('#utel' + id).val(),
                    utext: $('#utext' + id).val()
                },
                dataType: 'json',
                success: function (data) {
                    fbq('track', 'Lead');
                    alert(data.msg);
                }
            });
        } else {
            alert('Не заполнено поле "Телефон"');
        }
    }

    $('.reset_setka').click(function (e) {
        var setka_valid = $( "#setkaform" ).validate();
        setka_valid.resetForm();
    });
    $('.reset_metalshtaket').click(function (e) {
        var metalshtaket_valid = $( "#metalshtaketform" ).validate();
        metalshtaket_valid.resetForm();
    });
    $('.reset_proflist').click(function (e) {
        var proflist_valid = $( "#proflistform" ).validate();
        proflist_valid.resetForm();
    });
    $('.reset_derevo').click(function (e) {
        var derevo_valid = $( "#derevoform" ).validate();
        derevo_valid.resetForm();
    }); 

    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '0');
    }, "Необходимо указать высоту забора.");

    $("#setkaform").validate({

        submitHandler: function() {
                var datastring = $("#setkaform").serialize();
                $.ajax({
                    type: 'POST',
                    url: 'setka/ajax.php',
                    data: datastring,
                    dataType: 'html',
                    success: function (data) {
                        fbq('track', 'ViewContent');
                        $('#setkaresult').html(data);
                        PrintHandler();
                        MailHandler("setkaemail", "setkaOrder");

                        goTo('#setkaresult');


                    }
                });
        }
    }); 
   

    // $('#setkaformresultget').click(function (e) {
    //     e.preventDefault();

    //     var datastring = $("#setkaform").serialize();

    //     $.ajax({
    //         type: 'POST',
    //         url: 'setka/ajax.php',
    //         data: datastring,
    //         dataType: 'html',
    //         success: function (data) {
    //             $('#setkaresult').html(data);
    //             PrintHandler();
    //             MailHandler();

    //             goTo('#setkaresult');
    //         }
    //     });
    // });
    
    $("#proflistform").validate({
        submitHandler: function() {
                var datastring = $("#proflistform").serialize();
                $.ajax({
                    type: 'POST',
                    url: 'proflist/ajax.php',
                    data: datastring,
                    dataType: 'html',
                    success: function (data) {
                        fbq('track', 'ViewContent');
                        $('#proflistresult').html(data);
                        $(".phone").mask("?(999) 999-9999");

                        PrintHandler();
                        
                        MailHandler("proflistemail", "proflistOrder");
                        

                        goTo('#proflistresult');                      
                        
                    }
                });
        }
    });   

    // $('#proflistformresultget').click(function (e) {
    //     e.preventDefault();

    //     var datastring = $("#proflistform").serialize();

    //     $.ajax({
    //         type: 'POST',
    //         url: 'proflist/ajax.php',
    //         data: datastring,
    //         dataType: 'html',
    //         success: function (data) {
    //             $('#proflistresult').html(data);
    //             PrintHandler();
    //             MailHandler();

    //             goTo('#proflistresult');
    //         }
    //     });
    // });

    $("#derevoform").validate({
        submitHandler: function() {
            // e.preventDefault();

            var datastring = $("#derevoform").serialize();

            $.ajax({
                type: 'POST',
                url: 'derevo/ajax.php',
                data: datastring,
                dataType: 'html',
                success: function (data) {
                    $('#derevoresult').html(data);
                    PrintHandler();
                    MailHandler("derevoemail", "derevoOrder");
                    fbq('track', 'ViewContent');
                    goTo('#derevoresult');
                    
                }
            });
        }
    }); 
    // $('#derevoformresultget').click(function (e) {
    //     e.preventDefault();

    //     var datastring = $("#derevoform").serialize();

    //     $.ajax({
    //         type: 'POST',
    //         url: 'derevo/ajax.php',
    //         data: datastring,
    //         dataType: 'html',
    //         success: function (data) {
    //             $('#derevoresult').html(data);
    //             PrintHandler();
    //             MailHandler();

    //             goTo('#derevoresult');
    //         }
    //     });
    // });
    $("#metalshtaketform").validate({
        submitHandler: function() {
            // e.preventDefault();

            var datastring = $("#metalshtaketform").serialize();

            $.ajax({
                type: 'POST',
                url: 'metalshtaket/ajax.php',
                data: datastring,
                dataType: 'html',
                success: function (data) {
                    $('#metalshtaketresult').html(data);
                    PrintHandler();
                    MailHandler("metalshtaketemail", "metalshtaketOrder");
                    fbq('track', 'ViewContent');
                    goTo('#metalshtaketresult');

                    // $(".metalshtaketemail").validate();
                }
            });
        }
    }); 

    // $('#metalshtaketformresultget').click(function (e) {
    //     e.preventDefault();

    //     var datastring = $("#metalshtaketform").serialize();

    //     $.ajax({
    //         type: 'POST',
    //         url: 'metalshtaket/ajax.php',
    //         data: datastring,
    //         dataType: 'html',
    //         success: function (data) {
    //             $('#metalshtaketresult').html(data);
    //             PrintHandler();
    //             MailHandler();

    //             goTo('#metalshtaketresult');
    //         }
    //     });
    // });



    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(isMobile.any()){
        $('.help').tipTip({
            delay: 1,
            fadeIn: 1,
            fadeOut: 1,
            attribute: "html",
            defaultPosition: 'bottom',
            keepAlive: false
        });
    } else {
        $('.tiptip').tipTip({
            delay: 1,
            fadeIn: 1,
            fadeOut: 1,
            attribute: "html",
            defaultPosition: 'bottom',
            keepAlive: false
        });
    }


});

function PrintHandler() {
    $('#printsetka, #printderevo, #printmetalshtaket, #printproflist').on("click", function (e) {
        var id = '#' + $(this).attr('id').replace('print','');
        
        var toprint = $('<div/>', {
            'html': $('div.calc-result',id).html()
        });

        toprint.printElement();
    });
}

function MailHandler(vform, voform) {    
    OrderHandler(voform);         
    var toprint = lbtoa($('.calc-result .send-result').html());
    $("#" + vform).ajaxForm({
        url: '/i.php',
        type: 'post',
        beforeSubmit: function(arr, $form, options) {
            arr.push({name:'dataprint', value:toprint})
            $("#" + vform).validate({
                rules: {
                    fmail: {
                        required: true,
                        email: true
                    },
                },
            });
            return $("#" + vform).valid();
        },
        success: function(resp) {
            $('#successModal').modal('show');
            setTimeout(function() {
               $('#successModal').modal('hide');
            }, 4000);   
            console.log(resp)
        }
    }); 
}

function OrderHandler(vform) {      
    jQuery(function($){
       $("input.phone",document).mask("+7 (999) 999-9999");
    });
    var toprint = lbtoa($('.calc-result .send-result').html());
    $("#" + vform).ajaxForm({
        url: '/i_order.php',
        type: 'post',
        beforeSubmit: function(arr, $form, options) {
            arr.push({name:'dataprint', value:toprint})
            $("#" + vform).validate();
            return $("#" + vform).valid();
        },
        success: function(resp) {
            fbq('track', 'Lead');
            $('#successOrderModal').modal('show');
            setTimeout(function() {
               $('#successOrderModal').modal('hide');
            }, 4000);   
        	console.log(resp)
        }
    }); 
}




function latob(str) {
    var key_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", output = '', i = 0, len = str.length;
    var enc1, enc2, enc3, enc4;
    var chr1, chr2, chr3;
    str = str.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < len) {
        enc1 = key_str.indexOf(str.charAt(i++));
        enc2 = key_str.indexOf(str.charAt(i++));
        enc3 = key_str.indexOf(str.charAt(i++));
        enc4 = key_str.indexOf(str.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output += String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    }
    return utf8Decode(output);
}

function lbtoa(str) {
    var key_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", output = '', chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    str = utf8Encode(str);
    while (i < str.length) {
        chr1 = str.charCodeAt(i++);
        chr2 = str.charCodeAt(i++);
        chr3 = str.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += key_str.charAt(enc1) + key_str.charAt(enc2) +
                key_str.charAt(enc3) + key_str.charAt(enc4);
    }
    return output;
}

function utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "", n;
    for (n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}

function utf8Decode(utftext) {
    var string = "";
    var i = 0, c, c3, c2;
    c = c3 = c2 = 0;
    while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    return string;
}

(function (window, undefined) {
    var document = window["document"];
    var $ = window["jQuery"];
    $.fn["printElement"] = function (options) {
        var mainOptions = $.extend({}, $.fn["printElement"]["defaults"], options);
        mainOptions["printMode"] = 'popup';
        $("[id^='printElement_']").remove();

        return this.each(function () {
            var opts = $.meta ? $.extend({}, mainOptions, $(this).data()) : mainOptions;
            _printElement($(this), opts);
        });
    };
    $.fn["printElement"]["defaults"] = {
        "printMode": 'iframe',
        "pageTitle": '',
        "overrideElementCSS": null,
        "printBodyOptions": {
            "styleToAdd": 'padding:10px;margin:10px;',
            "classNameToAdd": ''
        },
        "leaveOpen": false,
        "iframeElementOptions": {
            "styleToAdd": 'border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;',
            "classNameToAdd": ''
        }
    };
    $.fn["printElement"]["cssElement"] = {
        "href": '',
        "media": ''
    };
    function _printElement(element, opts) {
        var html = _getMarkup(element, opts);
        var popupOrIframe = null;
        var documentToWriteTo = null;
        if (opts["printMode"].toLowerCase() == 'popup') {
            popupOrIframe = window.open('about:blank', 'printElementWindow', 'width=' + $(window).width() + ',height=' + $(document).height() + ',scrollbars=yes');
            documentToWriteTo = popupOrIframe.document;
        }
        else {
            var printElementID = "printElement_" + (Math.round(Math.random() * 99999)).toString();
            var iframe = document.createElement('IFRAME');
            $(iframe).attr({
                style: opts["iframeElementOptions"]["styleToAdd"],
                id: printElementID,
                className: opts["iframeElementOptions"]["classNameToAdd"],
                frameBorder: 0,
                scrolling: 'no',
                src: 'about:blank'
            });
            document.body.appendChild(iframe);
            documentToWriteTo = (iframe.contentWindow || iframe.contentDocument);
            if (documentToWriteTo.document)
                documentToWriteTo = documentToWriteTo.document;
            iframe = document.frames ? document.frames[printElementID] : document.getElementById(printElementID);
            popupOrIframe = iframe.contentWindow || iframe;
        }
        focus();
        documentToWriteTo.open();
        documentToWriteTo.write(html);
        documentToWriteTo.close();
        _callPrint(popupOrIframe);
    }

    function _callPrint(element) {
        if (element && element["printPage"])
            element["printPage"]();
        else
            setTimeout(function () {
                _callPrint(element);
            }, 50);
    }

    function _getElementHTMLIncludingFormElements(element) {
        var $element = $(element);
        $(":checked", $element).each(function () {
            this.setAttribute('checked', 'checked');
        });
        $("input[type='text']", $element).each(function () {
            this.setAttribute('value', $(this).val());
        });
        $("select", $element).each(function () {
            var $select = $(this);
            $("option", $select).each(function () {
                if ($select.val() == $(this).val())
                    this.setAttribute('selected', 'selected');
            });
        });
        $("textarea", $element).each(function () {
            var value = $(this).attr('value');
            if ($.browser.mozilla && this.firstChild)
                this.firstChild.textContent = value;
            else
                this.innerHTML = value;
        });
        var elementHtml = $('<div></div>').append($element.clone()).html();
        return elementHtml;
    }

    function _getBaseHref() {
        var port = (window.location.port) ? ':' + window.location.port : '';
        return window.location.protocol + '//' + window.location.hostname + port + window.location.pathname;
    }

    function _getMarkup(element, opts) {
        var $element = $(element);
        var elementHtml = _getElementHTMLIncludingFormElements(element);

        var html = new Array();
        html.push('<html><head><title>' + opts["pageTitle"] + '</title>');
        if (opts["overrideElementCSS"]) {
            if (opts["overrideElementCSS"].length > 0) {
                for (var x = 0; x < opts["overrideElementCSS"].length; x++) {
                    var current = opts["overrideElementCSS"][x];
                    if (typeof (current) == 'string')
                        html.push('<link type="text/css" rel="stylesheet" href="' + current + '" >');
                    else
                        html.push('<link type="text/css" rel="stylesheet" href="' + current["href"] + '" media="' + current["media"] + '" >');
                }
            }
        }
        else {
            $("link", document).filter(function () {
                return $(this).attr("rel").toLowerCase() == "stylesheet";
            }).each(function () {
                html.push('<link type="text/css" rel="stylesheet" href="' + $(this).attr("href") + '" media="' + $(this).attr('media') + '" >');
            });
        }
        html.push('<base href="' + _getBaseHref() + '" />');
        html.push('</head><body style="' + opts["printBodyOptions"]["styleToAdd"] + '" class="' + opts["printBodyOptions"]["classNameToAdd"] + '">');
        html.push('<div class="' + $element.attr('class') + '">' + elementHtml + '</div>');
        html.push('<script type="text/javascript">function printPage(){focus();print();' + ((!opts["leaveOpen"] && opts["printMode"].toLowerCase() == 'popup') ? 'close();' : '') + '}</script>');
        html.push('</body></html>');

        return html.join('');
    }
})(window);

(function ($) {
    $.fn.tipTip = function (options) {
        var defaults = {
            activation: "hover",
            keepAlive: false,
            maxWidth: "400px",
            edgeOffset: 3,
            defaultPosition: "bottom",
            delay: 0,
            fadeIn: 0,
            fadeOut: 0,
            attribute: "title",
            content: false,
            enter: function () {
            },
            exit: function () {
            }
        };

        var opts = $.extend(defaults, options);
        if ($("#tiptip_holder").length <= 0) {
            var tiptip_holder = $('<div id="tiptip_holder" style="max-width:' + opts.maxWidth + ';"></div>');
            var tiptip_content = $('<div id="tiptip_content"></div>');
            var tiptip_arrow = $('<div id="tiptip_arrow"></div>');
            $("body").append(tiptip_holder.html(tiptip_content).prepend(tiptip_arrow.html('<div id="tiptip_arrow_inner"></div>')))
        } else {
            var tiptip_holder = $("#tiptip_holder");
            var tiptip_content = $("#tiptip_content");
            var tiptip_arrow = $("#tiptip_arrow");
        }
        return this.each(function () {
            var org_elem = $(this);
            var org_title = org_elem.data(opts.attribute)
            if (org_title != "") {
                var timeout = false;
                if (opts.activation == "hover") {
                    org_elem.hover(function () {
                        active_tiptip()
                    }, function () {
                        if (!opts.keepAlive) {
                            deactive_tiptip()
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function () {
                        }, function () {
                            deactive_tiptip()
                        })
                    }
                } else if (opts.activation == "focus") {
                    org_elem.focus(function () {
                        active_tiptip()
                    }).blur(function () {
                        deactive_tiptip()
                    })
                } else if (opts.activation == "click") {
                    org_elem.click(function () {
                        active_tiptip();
                        return false
                    }).hover(function () {
                    }, function () {
                        if (!opts.keepAlive) {
                            deactive_tiptip()
                        }
                    });
                    if (opts.keepAlive) {
                        tiptip_holder.hover(function () {
                        }, function () {
                            deactive_tiptip()
                        })
                    }
                }
                function active_tiptip() {
                    opts.enter.call(this);
                    tiptip_content.html(org_title);
                    tiptip_holder.hide().removeAttr("class").css("margin", "0");
                    tiptip_arrow.removeAttr("style");
                    var top = parseInt(org_elem.offset()['top']);
                    var left = parseInt(org_elem.offset()['left']);
                    var org_width = parseInt(org_elem.outerWidth());
                    var org_height = parseInt(org_elem.outerHeight());
                    var tip_w = tiptip_holder.outerWidth();
                    var tip_h = tiptip_holder.outerHeight();
                    var w_compare = Math.round((org_width - tip_w) / 2);
                    var h_compare = Math.round((org_height - tip_h) / 2);
                    var marg_left = Math.round(left + w_compare);
                    var marg_top = Math.round(top + org_height + opts.edgeOffset);
                    var t_class = "";
                    var arrow_top = "";
                    var arrow_left = Math.round(tip_w - 12) / 2;
                    if (opts.defaultPosition == "bottom") {
                        t_class = "_bottom"
                    } else if (opts.defaultPosition == "top") {
                        t_class = "_top"
                    } else if (opts.defaultPosition == "left") {
                        t_class = "_left"
                    } else if (opts.defaultPosition == "right") {
                        t_class = "_right"
                    }
                    var right_compare = (w_compare + left) < parseInt($(window).scrollLeft());
                    var left_compare = (tip_w + left) > parseInt($(window).width());
                    if ((right_compare && w_compare < 0) || (t_class == "_right" && !left_compare) || (t_class == "_left" && left < (tip_w + opts.edgeOffset + 5))) {
                        t_class = "_right";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = -12;
                        marg_left = Math.round(left + org_width + opts.edgeOffset);
                        marg_top = Math.round(top + h_compare)
                    } else if ((left_compare && w_compare < 0) || (t_class == "_left" && !right_compare)) {
                        t_class = "_left";
                        arrow_top = Math.round(tip_h - 13) / 2;
                        arrow_left = Math.round(tip_w);
                        marg_left = Math.round(left - (tip_w + opts.edgeOffset + 5));
                        marg_top = Math.round(top + h_compare)
                    }
                    var top_compare = (top + org_height + opts.edgeOffset + tip_h + 8) > parseInt($(window).height() + $(window).scrollTop());
                    var bottom_compare = ((top + org_height) - (opts.edgeOffset + tip_h + 8)) < 0;
                    if (top_compare || (t_class == "_bottom" && top_compare) || (t_class == "_top" && !bottom_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_top"
                        } else {
                            t_class = t_class + "_top"
                        }
                        arrow_top = tip_h;
                        marg_top = Math.round(top - (tip_h + 5 + opts.edgeOffset))
                    } else if (bottom_compare | (t_class == "_top" && bottom_compare) || (t_class == "_bottom" && !top_compare)) {
                        if (t_class == "_top" || t_class == "_bottom") {
                            t_class = "_bottom"
                        } else {
                            t_class = t_class + "_bottom"
                        }
                        arrow_top = -12;
                        marg_top = Math.round(top + org_height + opts.edgeOffset)
                    }
                    if (t_class == "_right_top" || t_class == "_left_top") {
                        marg_top = marg_top + 5
                    } else if (t_class == "_right_bottom" || t_class == "_left_bottom") {
                        marg_top = marg_top - 5
                    }
                    if (t_class == "_left_top" || t_class == "_left_bottom") {
                        marg_left = marg_left + 5
                    }
                    tiptip_arrow.css({
                        "margin-left": arrow_left + "px",
                        "margin-top": arrow_top + "px"
                    });
                    tiptip_holder.css({
                        "margin-left": marg_left + "px",
                        "margin-top": marg_top + "px"
                    }).attr("class", "tip" + t_class);
                    if (timeout) {
                        clearTimeout(timeout)
                    }
                    timeout = setTimeout(function () {
                        tiptip_holder.stop(true, true).fadeIn(opts.fadeIn)
                    }, opts.delay)
                }
                function deactive_tiptip() {
                    opts.exit.call(this);
                    if (timeout) {
                        clearTimeout(timeout)
                    }
                    tiptip_holder.fadeOut(opts.fadeOut)
                }
            }
        })
    }
})(jQuery);

$('#calc').find('form').on('click', '.tiptip', function () {
  // if ($('#tiptip_holder:visible')) $(this).trigger('blur');
});

function goTo(id)
{
    $('html, body').animate({ scrollTop: $(id).offset().top }, 'slow');
}

function changeProvolokaD(self)
{
    var val = $('option:selected',self).val();
    if(val == '1.5'){
        // Add
        if($('option[data-id="ds"]','select[name="provoloka"]').size() == 0)
            $('select[name="provoloka"]').append('<option value="3" data-id="ds">Диаметром 1,6 мм ТУ</option>');
    } else {
        // Remove
        $('option[data-id="ds"]','select[name="provoloka"]').remove();
    }
}

function checkmate(self,$parent)
{
    var val = $(':selected',self).val()
    if(val == 1){
        $('input[name="dzazor"]',$parent).attr('disabled','disabled');
        return ;
    }

    $('input[name="dzazor"]',$parent).removeAttr('disabled');
    return ;
}

function pschtacket(self,$parent)
{
    var val = $(':selected',self).val();
    
    if(val == 2){
        $('.ral1',$parent).show().attr('name','ral');
        $('.ral',$parent).hide().attr('name','ral1');
    } else {
        $('.ral1',$parent).hide().attr('name','ral1');
        $('.ral',$parent).show().attr('name','ral');
    }
}

function toggleDisable(id,self)
{
    var checked = $(self).prop('checked');
    $(id).attr('disabled',function(){
        return !checked;
    });
}