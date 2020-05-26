$('.feedback-arrow').click(function () {

    let j;
    let max = 2; // Количество изображений
    let title = ["Владимир Путин", "Сергей Собянин"];
    let descr = [
        "Во всех регионах отлично расчерчена разметка, спасибо Альтер групп за это!", "Знаки стоят даже в центре Москвы! А всё благодоря Альтер групп. Плюс бонусом н" +
                "ачертили разметку у Кремля для наших вертолётов. Огромное спасибо будем обраща" +
                "ться ещё!"
    ];

    let way = $(this).attr('class');
    if (way == "feedback-arrow feedback-arrow-right") {

        for (let i = 0; i < 2; i++) {

            let value = $('.feedback-card-child')
                .eq(i)
                .attr('value');

            if (value == max) {
                value = 1;
            } else {
                value++;
            }

            setTimeout(function () {
                $('.feedback-card-child')
                    .eq(i)
                    .attr('value', value);
                $('.feedback-card-child')
                    .eq(i)
                    .attr('src', 'img/feedback/' + value + '.png');

                $(".feedback-human-title")
                    .eq(i)
                    .text(title[value - 1]);
                $(".feedback-human-descr")
                    .eq(i)
                    .text(descr[value - 1]);

            }, 0)

        }

    } else {
        for (let i = 0; i < 2; i++) {
            let value = $('.feedback-card-child')
                .eq(i)
                .attr('value');

            if (value == 1) {
                value = max;
            } else {
                value--;
            }

            $('.feedback-card-child')
                .eq(i)
                .attr('value', value);
            $('.feedback-card-child')
                .eq(i)
                .attr('src', 'img/feedback/' + value + '.png');

            $(".feedback-human-title")
                .eq(i)
                .text(title[value - 1]);
            $(".feedback-human-descr")
                .eq(i)
                .text(descr[value - 1]);
        }
    }

});
