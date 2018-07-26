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

//AboutUs.html
var HeadDownImg_width = document.documentElement.clientWidth;//获取页面可见宽度
