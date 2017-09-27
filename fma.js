function createSoccerViz() {

	//Import data
	d3.csv("wordcup.csv", function(data){
		overallTeamViz(data);
	})
}