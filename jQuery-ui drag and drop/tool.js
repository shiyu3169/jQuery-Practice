$(init);

function init(){
	$(".tool").draggable({
		helper: 'clone'
	});

	$(".canvas").droppable({
		drop: (event, ui) => {
			// console.log(ui.position);
			// console.log(ui.draggable[0].innerHTML);
			var node = {
    			position: ui.position,
    			html: ui.draggable[0].innerHTML
    		};
			//console.log(node);
			if(ui.helper.hasClass('tool')){
				render(node);
			}
		}
	})
}

function render(node){
	var html = "<h3>" + node.html + "</h3>";
	var dom = $(html).css({
		position: 'absolute',
		top: node.position.top,
		left: node.position.left -= $(".canvas").position().left
	})
	// console.log(dom);

	$(".canvas").append(dom.draggable());
} 