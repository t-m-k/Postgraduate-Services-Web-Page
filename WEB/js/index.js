
 window.onload=function(){  
       changeDivWidth();  
}  
         //当浏览器窗口大小改变时，设置显示内容的高度  
window.onresize=function(){  
	 changeDivWidth();  
}  
function changeDivWidth(){               
	var screen_width = document.documentElement.clientWidth;//获取页面可见高度  
	 //alert(screen_width);
	 if(screen_width < 1200) screen_width = 1200;
	//$(".mybody").width(screen_width);
	$("#body").width(screen_width);
	$(".myfooter").width(screen_width);
}
 //$(document).ready(function(){
// var screen_width = $(document.body).width();
	// alert(screen_width);
//	if(screen_width < 1200) screen_width = 1200;
	//alert(screen_width);
//	$(".mybody").width(screen_width);
//	$(".myfooter").width(screen_width);
	
// alert($(window).height()); //浏览器当前窗口可视区域高度
// alert($(document).height()); //浏览器当前窗口文档的高度
// alert($(document.body).height());//浏览器当前窗口文档body的高度
// alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin

// alert($(window).width()); //浏览器当前窗口可视区域宽度
// alert($(document).width());//浏览器当前窗口文档对象宽度
// alert($(document.body).width());//浏览器当前窗口文档body的宽度
// alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin

 //});
