function YearChart(electionWinners){
  electionWinners.forEach(function(d){
    d.YEAR = d.YEAR;
    d.PARTY = d.PARTY;
  });

  var margin = {top: 20, right: 10, bottom: 20, left: 10};

  var width = 1200 - margin.left - margin.right,
      height = 100 - margin.top - margin.bottom;

  var svg = d3.select("#year-chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var timeline = svg.append("line")
  .attr("x1",0)
  .attr("x2",1200)
  .attr("y1",20)
  .attr("y2",20)
  .style("stroke-dasharray", "5")
  .style("stroke","black")
  .style("stroke-width",3);

  var colorScale = d3.scaleOrdinal()
  .domain(["D","R"])
  .range(["blue","red"]);

  var circle1940 = svg.append("circle")
  .attr("r", 15)
  .attr("cx", 30)
  .attr("cy", 20)
  .style("stroke", "yellow")
  .style("stroke-width", 3)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1940.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1940.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1940 = svg.append("text")
  .attr("x", 10)
  .attr("y", 55)
  .style("stroke","black")
  .text("1940");

  var circle1944 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 1 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1944.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1944.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1944 = svg.append("text")
  .attr("x", 10 + 1 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1944");

  var circle1948 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 2 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1948.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1948.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1948 = svg.append("text")
  .attr("x", 10 + 2 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1948");

  var circle1952 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 3 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1952.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1952.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1952 = svg.append("text")
  .attr("x", 10 + 3 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1952");

  var circle1956 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 4 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1956.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1956.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1956 = svg.append("text")
  .attr("x", 10 + 4 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1956");

  var circle1960 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 5 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1960.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1960.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1960 = svg.append("text")
  .attr("x", 10 + 5 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1960");

  var circle1964 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 6 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1964.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1964.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1964 = svg.append("text")
  .attr("x", 10 + 6 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1964");

  var circle1968 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 7 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1968.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1968.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1968 = svg.append("text")
  .attr("x", 10 + 7 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1968");

  var circle1972 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 8 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1972.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1972.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
    });

  var text1972 = svg.append("text")
  .attr("x", 10 + 8 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1972");

  var circle1976 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 9 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1976.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1976.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text1976 = svg.append("text")
  .attr("x", 10 + 9 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1976");

  var circle1980 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 10 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1980.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1980.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text1980 = svg.append("text")
  .attr("x", 10 + 10 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1980");

  var circle1984 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 11 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1984.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1984.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text1984 = svg.append("text")
  .attr("x", 10 + 11 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1984");

  var circle1988 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 12 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-1988.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1988.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text1988 = svg.append("text")
  .attr("x", 10 + 12 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1988");

  var circle1992 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 13 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1992.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1992.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text1992 = svg.append("text")
  .attr("x", 10 + 13 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1992");

  var circle1996 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 14 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-1996.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle1996.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text1996 = svg.append("text")
  .attr("x", 10 + 14 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("1996");

  var circle2000 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 15 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-2000.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle2000.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text2000 = svg.append("text")
  .attr("x", 10 + 15 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("2000");

  var circle2004 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 16 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
      csvFilePath = "data/election-results-2004.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle2004.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text2004 = svg.append("text")
  .attr("x", 10 + 16 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("2004");

  var circle2008 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 17 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-2008.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle2008.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text2008 = svg.append("text")
  .attr("x", 10 + 17 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("2008");

  var circle2012 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 18 * 60)
  .attr("cy", 20)
  .style("fill", "blue")
  .on("click", function(){
      csvFilePath = "data/election-results-2012.csv";

      var circles = svg.selectAll("circle")
      .attr("r", 10)
      .style("stroke", "none");

      circle2012.attr("r", 15)
      .style("stroke", "yellow")
      .style("stroke-width", 3);

      var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
      var votePercentageChart = new VotePercentageChart(csvFilePath);
      var tileChart = new TileChart(csvFilePath);
  });

  var text2012 = svg.append("text")
  .attr("x", 10 + 18 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("2012");

  var circle2016 = svg.append("circle")
  .attr("r", 10)
  .attr("cx", 30 + 19 * 60)
  .attr("cy", 20)
  .style("fill", "red")
  .on("click", function(){
    csvFilePath = "data/election-results-2016.csv";

    var circles = svg.selectAll("circle")
    .attr("r", 10)
    .style("stroke", "none");

    circle2016.attr("r", 15)
    .style("stroke", "yellow")
    .style("stroke-width", 3);

    var electoralVoteChart = new ElectoralVoteChart(csvFilePath);
    var votePercentageChart = new VotePercentageChart(csvFilePath);
    var tileChart = new TileChart(csvFilePath);
  });

  var text2016 = svg.append("text")
  .attr("x", 10 + 19 * 60)
  .attr("y", 55)
  .style("stroke","black")
  .text("2016");

}
