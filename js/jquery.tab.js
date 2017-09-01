/**
 * Created by Administrator on 2017/8/31.
 */

(function($){

    $.fn.tab = function (options) {

        var dft = {
            labelList: 'label-list',
            labelItem: 'label-item',
            contentList: 'content-list',
            contentItem: 'content-item',
            eventName: 'mouseover'
        };

        var opt = $.extend(dft, options);

        var labelItem = $(this).find("." + opt.labelList + " ." + opt.labelItem)
        var contentItem = $(this).find("." + opt.contentList + " ." + opt.contentItem)

        //console.log(labelItem);
        //console.log(contentItem);

        //初始化
        labelItem.first().addClass('active');
        contentItem.first().css({ display: 'block' });

        labelItem.each(function(i, o) {
            $(this).on(opt.eventName, function() {
                labelItem.removeClass('active');
                $(this).addClass('active');

                contentItem.each(function(j, k) {
                    if(i == j) {
                        $(this).css({
                            display: 'block'
                        });
                    } else {
                        $(this).css({
                            display: 'none'
                        });
                    }
                })
            })
        })

    }

})(window.jQuery);