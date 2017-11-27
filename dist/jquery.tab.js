(function($){
	$.fn.tab=function(options){
		var dft={
			title:'tab-title',
			titleItem:"tab-title-item",
			content:'tab-content',
			contentItem:'tab-content-item',
			eventName:'click',
			layout: 0,  //布局样式 0-竖排,1-横排,
			plusClass: ''
		}
		
		//合并配置(如果有相同属性，则外部传入的将覆盖内部配置属性)
		var opt=$.extend(dft,options);
		
		//当横排时
		if(opt.layout == 1){
			$(this).addClass('tab-horizontal');
		}
		
		if(opt.plusClass != ''){
			$(this).addClass(opt.plusClass);
		}
		

		
		//找到标题集合 
		var titleItem = $(this).children('.tab-title-area').children('.' + opt.title).children('.' + opt.titleItem);

		//找到内容集合 
		var content = $(this).children('.tab-content-area').children('.' + opt.content);
		var contentItem = $(this).children('.tab-content-area').children('.' + opt.content).children('.' + opt.contentItem);
		
		//激活第一个
		titleItem.first().addClass('active')
		contentItem.first().css({display:'block'})
		content.css({
			'height': contentItem.first().css('height')
		});
		
		titleItem.each(function(i,o){
			$(this).on(opt.eventName,function(){
				titleItem.removeClass('active');
				$(this).addClass('active');

				contentItem.each(function(j,k){
					if(i==j){
						$(this).css({display: 'block'});
					}else{
						$(this).css({display: 'none'});
					}
				})
				content.css({
					'height': contentItem.eq(i).css('height')
				});
			})
		})
	}
})(jQuery);
