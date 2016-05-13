function getOffset(obj,dir){
	var rect=obj.getBoundingClientRect();
	if(dir=='top'){
		return rect.top+(window.pageYOffset || document.documentElement.scrollTop)-(document.documentElement.clientTop || 0);
	}else if(dir=='left'){
		return rect.left+(window.pageXOffset || document.documentElement.scrollLeft)-(document.documentElement.clientLeft || 0);
	}
}
function position(o,relative,dir,offset){
	var relative_w=parseInt(relative.offsetWidth),
		relative_ot=parseInt(getOffset(relative,'top')),
		relative_ol=parseInt(getOffset(relative,'left')),
		o_w=parseInt(o.offsetWidth);
	if(!offset) offset=0;
	o.style.position="absolute";
	o.style.top=relative_ot+'px';
	if(dir=='left'){
		o.style.left=relative_ol-o_w-offset+'px';
	}else if(dir=='right'){
		o.style.left=relative_ol+relative_w+offset+'px';
	}
}