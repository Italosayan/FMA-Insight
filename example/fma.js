function CreateViz() {

	//Import data
	d3.json("fma.json", function(data){
		console.log(data)
		Viz(data);
	})

}

function Viz(incomingdata){
	var treeLayout = d3.treemap()
		.size([400, 200])
		.padding(16);

	var rootNode = d3.hierarchy(incomingdata)
	

	rootNode.sum(function(d) {
		return d.value;
	});
	treeLayout(rootNode);

	var nodes = d3.select('svg g')
	.selectAll('g')
	.data(rootNode.descendants())
	.enter()
	.append('g')
	.attr('transform', function(d){console.log([d.x0, d.y0]);return 'translate('+ [d.x0, d.y0] + ')'})

	nodes
	.append('rect')
	.attr('width', function(d) { return d.x1 - d.x0; })
	.attr('height', function(d) { return d.y1 - d.y0; })

	nodes
	.append('text')
	.attr('dx', 4)
	.attr('dy', 14)
	.text(function(d) { return d.data.name;})


}