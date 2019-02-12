function VotePercentageChart(csvFilePath){
  d3.select("#votes-percentage").select("svg").remove();
  var margin = {top: 20, right: 10, bottom: 20, left: 10};

  var width = 1000 - margin.left - margin.right,
      height = 120 - margin.top - margin.bottom;

  var svg = d3.select("#votes-percentage").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var D_Total_Votes = 0;
  var R_Total_Votes = 0;
  var I_Total_Votes = 0;
  var I_No = "";
  var D_No = "";
  var R_No = "";
  d3.csv(csvFilePath, function (error, electionData) {
    if(error){
      throw error;
    } else {
      electionData.forEach(function(d){
        d.D_Votes = +d.D_Votes;
        d.R_Votes = +d.R_Votes;
        d.I_Votes = +d.I_Votes;
        d.D_Nominee = d.D_Nominee;
        d.R_Nominee = d.R_Nominee;
        d.I_Nominee = d.I_Nominee;
        D_Total_Votes = D_Total_Votes + d.D_Votes;
        R_Total_Votes = R_Total_Votes + d.R_Votes;
        I_Total_Votes = I_Total_Votes + d.I_Votes;
        I_No = d.I_Nominee;
        D_No = d.D_Nominee;
        R_No = d.R_Nominee;
      })
      var Total_Votes = D_Total_Votes + R_Total_Votes + I_Total_Votes;
      I_per = I_Total_Votes / Total_Votes * 100;
      I_per = I_per.toFixed(1);
      D_per = D_Total_Votes / Total_Votes * 100;
      D_per = D_per.toFixed(1);
      R_per = R_Total_Votes / Total_Votes * 100;
      R_per = R_per.toFixed(1);

      var hoverInfo = d3.select("#votes-percentage").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

      var xScale = d3.scaleLinear()
      .domain([0,Total_Votes])
      .range([0,1000]);

      if(I_Total_Votes !== 0){
         var votePercentageChart_I = svg.append("rect")
         .attr("x", 0)
         .attr("y", 60)
         .attr("width", xScale(I_Total_Votes))
         .attr("height", 20)
         .style("fill", "green")
         .on("mouseover",function(d){
           hoverInfo.transition()
           .duration(500)
           .style("opacity", 10);
           hoverInfo.html(
             "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:8; text-align:left;\">" + I_No + ": " + I_Total_Votes + "(" + I_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
             "<li style=\"color:#3399FF; font-size:8; text-align:left;\">" + D_No + ": " + D_Total_Votes + "(" + D_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
             "<li style=\"color:#ff3333; font-size:8; text-align:left;\">" + R_No + ": " + R_Total_Votes + "(" + R_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
             )
             .style("position", "absolute")
             .style("border", "black")
             .style("background-color", "white")
             .style("left", (d3.event.pageX) + "px")
             .style("top", (d3.event.pageY + 20) + "px")
             .style("border-style", "solid")
             .style("border-width","1px");
         })
         .on("mousemove", function(d){
           hoverInfo.style("left", (d3.event.pageX) + "px")
           .style("top", (d3.event.pageY + 20) + "px");
         })
         .on("mouseout", function(d){
           hoverInfo.transition()
           .duration(500)
           .style("opacity", 0.0);
         });

        var text_I = svg.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .style("stroke","green")
        .text(I_No);

        var text_Iper = svg.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .style("stroke", "green")
        .text(I_per + "%");

        var votePercentageChart_D = svg.append("rect")
        .attr("x", xScale(I_Total_Votes))
        .attr("y", 60)
        .attr("width", xScale(D_Total_Votes))
        .attr("height", 20)
        .style("fill", "#3399FF")
        .on("mouseover",function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 10);
          hoverInfo.html(
            "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:8; text-align:left;\">" + I_No + ": " + I_Total_Votes + "(" + I_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
            "<li style=\"color:#3399FF; font-size:8; text-align:left;\">" + D_No + ": " + D_Total_Votes + "(" + D_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
            "<li style=\"color:#ff3333; font-size:8; text-align:left;\">" + R_No + ": " + R_Total_Votes + "(" + R_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
            )
            .style("position", "absolute")
            .style("border", "black")
            .style("background-color", "white")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 20) + "px")
            .style("border-style", "solid")
            .style("border-width","1px");
        })
        .on("mousemove", function(d){
          hoverInfo.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

        var text_D = svg.append("text")
        .attr("x", 200)
        .attr("y", 20)
        .style("stroke","#3399FF")
        .text(D_No);

        var text_Iper = svg.append("text")
        .attr("x", 200)
        .attr("y", 40)
        .style("stroke", "#3399FF")
        .text(D_per + "%");

        var votePercentageChart_R = svg.append("rect")
        .attr("x", xScale(I_Total_Votes + D_Total_Votes))
        .attr("y", 60)
        .attr("width", xScale(R_Total_Votes))
        .attr("height", 20)
        .style("fill", "#ff3333")
        .on("mouseover",function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 10);
          hoverInfo.html(
            "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:8; text-align:left;\">" + I_No + ": " + I_Total_Votes + "(" + I_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
            "<li style=\"color:#3399FF; font-size:8; text-align:left;\">" + D_No + ": " + D_Total_Votes + "(" + D_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
            "<li style=\"color:#ff3333; font-size:8; text-align:left;\">" + R_No + ": " + R_Total_Votes + "(" + R_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
            )
            .style("position", "absolute")
            .style("border", "black")
            .style("background-color", "white")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 20) + "px")
            .style("border-style", "solid")
            .style("border-width","1px");
        })
        .on("mousemove", function(d){
          hoverInfo.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

        var text_I = svg.append("text")
        .attr("x", 700)
        .attr("y", 20)
        .style("stroke","#ff3333")
        .text(R_No);

        var text_Iper = svg.append("text")
        .attr("x", 940)
        .attr("y", 40)
        .style("stroke", "#ff3333")
        .text(R_per + "%");

    } else {
        var votePercentageChart_D = svg.append("rect")
        .attr("x", 0)
        .attr("y", 60)
        .attr("width", xScale(D_Total_Votes))
        .attr("height", 20)
        .style("fill", "#3399FF")
        .on("mouseover",function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 10);
          hoverInfo.html(
            "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:8; text-align:left;\">" + D_No + ": " + D_Total_Votes + "(" + D_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
            "<li style=\"color:#ff3333; font-size:8; text-align:left;\">" + R_No + ": " + R_Total_Votes + "(" + R_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
            )
            .style("border", "black")
            .style("background-color", "white")
            .style("position", "absolute")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 20) + "px")
            .style("border-style", "solid")
            .style("border-width","1px");
        })
        .on("mousemove", function(d){
          hoverInfo.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

        var text_D = svg.append("text")
        .attr("x", 150)
        .attr("y", 20)
        .style("stroke","#3399FF")
        .text(D_No);

        var text_Iper = svg.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .style("stroke", "#3399FF")
        .text(D_per + "%");

        var votePercentageChart_R = svg.append("rect")
        .attr("x", xScale(D_Total_Votes))
        .attr("y", 60)
        .attr("width", xScale(R_Total_Votes))
        .attr("height", 20)
        .style("fill", "#ff3333")
        .on("mouseover",function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 10);
          hoverInfo.html(
            "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:8; text-align:left;\">" + D_No + ": " + D_Total_Votes + "(" + D_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
            "<li style=\"color:#ff3333; font-size:8; text-align:left;\">" + R_No + ": " + R_Total_Votes + "(" + R_per + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
            )
            .style("border", "black")
            .style("background-color", "white")
            .style("position", "absolute")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 20) + "px")
            .style("border-style", "solid")
            .style("border-width","1px");
        })
        .on("mousemove", function(d){
          hoverInfo.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function(d){
          hoverInfo.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

        var text_I = svg.append("text")
        .attr("x", 700)
        .attr("y", 20)
        .style("stroke","#ff3333")
        .text(R_No);

        var text_Iper = svg.append("text")
        .attr("x", 940)
        .attr("y", 40)
        .style("stroke", "#ff3333")
        .text(R_per + "%");
      }

     var divideL = svg.append("line")
     .attr("x1", width/2)
     .attr("x2", width/2)
     .attr("y1", 55)
     .attr("y2", 85)
     .style("stroke", "black")
     .style("stroke-width", 3);

     var divideT = svg.append("text")
     .attr("x", 420)
     .attr("y", 50)
     .text("Popular Vote(50%)");
   }
 });
}
