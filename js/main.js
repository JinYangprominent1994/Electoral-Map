/*
 * Root file that handles instances of all the charts and loads the visualization
 */
(function(){
    var instance = null;

    /**
     * Creates instances for every chart (classes created to handle each chart;
     * the classes are defined in the respective javascript files.
     */
    function init() {
        //Creating instances for each visualization
        csvFilePath = "data/election-results-1940.csv";
        selectedState = [];

        var electoralVoteChart = new ElectoralVoteChart(csvFilePath);

        var votePercentageChart = new VotePercentageChart(csvFilePath);

        var tileChart = new TileChart(csvFilePath, selectedState);

        //var shiftChart = new ShiftChart();

        //var electoralVoteChart = new ElectoralVoteChart(shiftChart);


        //load the data corresponding to all the election years
        //pass this data and instances of all the charts that update on year selection to yearChart's constructor
        d3.csv("data/yearwise-winner.csv", function (error, electionWinners) {
          if(error){
            throw error;
          } else {
            electionWinners.forEach(function(d){
              d.YEAR = d.YEAR;
              d.PARTY = d.PARTY;
            })

            //pass the instances of all the charts that update on selection change in YearChart
            //var yearChart = new YearChart(electoralVoteChart, tileChart, votePercentageChart, electionWinners);
            var yearChart = new YearChart(electionWinners);
            //yearChart.update();
          }
        });
    }

    /**
     *
     * @constructor
     */
    function Main(){
        if(instance  !== null){
            throw new Error("Cannot instantiate more than one Class");
        }
    }

    /**
     *
     * @returns {Main singleton class |*}
     */
    Main.getInstance = function(){
        var self = this
        if(self.instance == null){
            self.instance = new Main();

            //called only once when the class is initialized
            init();
        }
        return instance;
    }

    Main.getInstance();
})();
