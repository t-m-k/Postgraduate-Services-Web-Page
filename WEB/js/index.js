
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
var showdata = [] ;
var valuedata = [] ;
showdata[0] = [] ;
valuedata[0] = [] ;
showdata[0][0] = "上海";
valuedata[0][0] = "0101";
//showdata[0][1] = "北京";
//valuedata[0][1] = "0102";
//showdata[0][2] = "广州";
//valuedata[0][2] = "0103";

showdata[1] = [];
valuedata[1] = [];

showdata[1][0] = "纽约";
valuedata[1][0] = "0201";
showdata[1][1] = "华盛顿";
valuedata[1][1] = "0202";
showdata[1][2] = "加州";
valuedata[1][2] = "0203";

showdata[2] = [];
valuedata[2] = [];

showdata[2][0] = "伦敦";
valuedata[2][0] = "0301";
showdata[2][1] = "利物浦";
valuedata[2][1] = "0302";
showdata[2][2] = "伯明翰";                                                     
valuedata[2][2] = "0303";

function change(target) {
	var deselect = document.getElementById("deselect");
	deselect.innerHTML = null ;
	var m = target.selectedIndex ;
	if(m >= 0) {
		for(var i = 0 ; i < showdata[m].length ; i++) {
			deselect.options[i] = new Option(showdata[m][i],valuedata[m][i]);
	}
	deselect.options[0].selected = true ;
	}
}