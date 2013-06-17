var func = function()
{
		
	
		var seq = 0;
		var rotate = function () {
			$('.sbox').eq(seq).fadeOut(function() {
				seq = (seq + 1) % 4;
				$('.sbox').eq(seq).fadeIn();
			});
		};
		var handler = setInterval(rotate, 7000);
		$('.sbox a[class^=stop_banner_]').click(function(){
			if (this.className.match(/stop_banner_(\d+)/)) {
				var stop = RegExp.$1;
				$('.sbox').hide().eq(stop - 1).show();
				clearInterval(handler);
				return false;
			}
		});
		

		$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.slide-box').find('div.sbox').hide().eq($(this).index()).fadeIn(550);
			return false;
		});
		
		$('ul.atabs').delegate('li:not(.current)', 'hover', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.about-box').find('div.abox').hide().eq($(this).index()).fadeIn(750);
			return false;
		});

		$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });
		
		$(".radioclass").click(function(){
			 if($(this).is(":checked")){
            $(".radioselected:not(:checked)").removeClass("radioselected");
            $(this).next("label").addClass("radioselected");
			  }
    });


	$(".summary-box3 .line01").eq(0).addClass("active");
	$(".summary-box3 div.line01-bot").eq(0).show();

	$(".summary-box3 .line01").click(function(){
		$(this).next("div.line01-bot").slideToggle("slow")
		.siblings("div.line01-bot:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings(".line01").removeClass("active");
		return false;
	});

	var params = {
    changedEl: ".lineForm select"
    }
    cuSel(params);

};

$(func);

