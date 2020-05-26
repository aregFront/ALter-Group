$('.examples-arrow').click(function () {

    let max = 3; // Количество изображений 

    let way = $(this).attr('class');
    if (way == "examples-arrow examples-arrow-right") {

        for (let i = 0; i < 3; i++) {

            let value = $('.examples-slaider-group-child')
                .eq(i)
                .attr('value');

            if (value == max) {
                value = 1;
            } else {
                value++;
            }

            setTimeout(function () {
                $('.examples-slaider-group-child')
                    .eq(i)
                    .attr('value', value);
                $('.examples-slaider-group-child')
                    .eq(i)
                    .attr('src', 'img/examples/'+ value + '.png');

            }, 0)

        }

    } else {
        for (let i = 0; i < 3; i++) {
            let value = $('.examples-slaider-group-child')
                .eq(i)
                .attr('value');

            if (value == 1) {
                value = max;
            } else {
                value--;
            }

            $('.examples-slaider-group-child')
                .eq(i)
                .attr('value', value);
            $('.examples-slaider-group-child')
                .eq(i)
                .attr('src', 'img/examples/'+ value + '.png');

        }
    }

});

