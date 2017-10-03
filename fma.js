function CreateViz() {

	//Import data
	d3.json("fma.json", function(data){
		Viz(data);
	})

}

function Viz(incomingdata){
	var treemap = d3.layout.treemap()
	.size([500,500])
	.nodes(data)

	console.log(treemap);


}