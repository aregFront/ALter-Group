$('.work-view-arrow').click(function () {

    let max = 13; // Количество изображений

    let title = [
        "УСТАНОВКА\nЗНАКОВ",
        "РАЗМЕТКА\nДОРОГ",
        "РАЗМЕТКА\nПАРКОВОК",
        "НАНЕСЕНИЕ\nРАЗМЕТКИ\nХОЛОДНЫМ\nПЛАСТИКОМ",
        "НАНЕСЕНИЕ\nРАЗМЕТКИ\nГОРЯЧИМ\nПЛАСТИКОМ",
        "ДЕМАРКИРОВКА\nДОРОЖНОЙ\nРАЗМЕТКИ",
        "НАНЕСЕНИЕ\nАНТИСКОЛЬЗЯЩЕГО\nДОРОЖНОГО\nПОКРЫТИЯ",
        "НАНЕСЕНИЕ\nРАЗМЕТКИ\nЭПОКСИДНОЙ\nКРАСКОЙ",
        "МОНТАЖ\nЛЕЖАЧИХ\nПОЛИЦЕЙСКИХ",
        "НАНЕСЕНИЕ\nВАФЕЛЬНОЙ\nРАЗМЕТКИ",
        "УСТАНОВКА\nСВЕТОФОРОВ",
        "МОНТАЖ\nОГРАНИЧИТЕЛЕЙ\nИ\nКОЛЕСООТБОЙНИКОВ",
        "МОНТАЖ\nДЕЛИНИАТОРОВ"
    ];

    let way = $(this).attr('class');
    if (way == "work-view-arrow work-view-arrow-right") {

        for (let i = 0; i < 3; i++) {

            let value = $('.work-view-card-child')
                .eq(i)
                .attr('value');

            if (value == max) {
                value = 1;
            } else {
                value++;
            }

            setTimeout(function () {
                $('.work-view-card-child')
                    .eq(i)
                    .attr('value', value);
                $('.work-view-card-child')
                    .eq(i)
                    .attr('src', 'img/work-view/card-' + value + '.png');
                $('.work-view-card-child-title')
                    .eq(i)
                    .text(title[value - 1]);
            }, 0)

        }

    } else {
        for (let i = 0; i < 3; i++) {
            let value = $('.work-view-card-child')
                .eq(i)
                .attr('value');

            if (value == 1) {
                value = max;
            } else {
                value--;
            }

            $('.work-view-card-child')
                .eq(i)
                .attr('value', value);
            $('.work-view-card-child')
                .eq(i)
                .attr('src', 'img/work-view/card-' + value + '.png');
            $('.work-view-card-child-title')
                .eq(i)
                .text(title[value - 1]);

        }
    }

});

$('.work-view-card').on('click', function () {

    let value = $(this)
        .children('img')
        .attr('value');
    let selector = ".val-" + value;

    let scrollSize = $(selector)
        .offset()
        .top;

    $('html, body')
        .stop()
        .animate({
            scrollTop: scrollSize
        }, 1000, 'swing');

    if (value != 2) {
        $('.arrow-up').show(1000);
    }

});

$('.arrow-up').click(function () {

    let scrollSize = $('.work-view-slaider')
        .offset()
        .top;

    $('html, body')
        .stop()
        .animate({
            scrollTop: scrollSize
        }, 1000, 'swing');

    $('.arrow-up').hide(1000);

});

$(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    const height = $(window).height();

    if (scrollTop > height) {
        $('.arrow-up').fadeIn();
    } else {
        $('.arrow-up').fadeOut();
    }

});
