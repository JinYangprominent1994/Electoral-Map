function TileChart(csvFile,selectedData){
  d3.select("#tiles").select("svg").remove();
  d3.select("#legend").select("svg").remove();
  var margin = {top: 20, right: 10, bottom: 20, left: 10};

  var width = 1000 - margin.left - margin.right,
      height = 80 - margin.top - margin.bottom;

  var svg = d3.select("#tileChart").select("#legend").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var legend1 = svg.append("rect")
  .attr("x", 70)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#0066CC");
  var text1 = svg.append("text")
  .attr("x", 70)
  .attr("y", 35)
  .style("font-size","11px")
  .text("-60.0 to -50.0");

  var legend2 = svg.append("rect")
  .attr("x", 140)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#0080FF");
  var text2 = svg.append("text")
  .attr("x", 140)
  .attr("y", 35)
  .style("font-size","11px")
  .text("-50.0 to -40.0");

  var legend3 = svg.append("rect")
  .attr("x", 210)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#3399FF");
  var text3 = svg.append("text")
  .attr("x", 210)
  .attr("y", 35)
  .style("font-size","11px")
  .text("-40.0 to -30.0");

  var legend4 = svg.append("rect")
  .attr("x", 280)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#66B2FF");
  var text4 = svg.append("text")
  .attr("x", 280)
  .attr("y", 35)
  .style("font-size","11px")
  .text("-30.0 to -20.0");

  var legend5 = svg.append("rect")
  .attr("x", 350)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#99ccff");
  var text5 = svg.append("text")
  .attr("x", 350)
  .attr("y", 35)
  .style("font-size","11px")
  .text("-20.0 to -10.0");

  var legend6 = svg.append("rect")
  .attr("x", 420)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#CCE5FF");
  var text6 = svg.append("text")
  .attr("x", 425)
  .attr("y", 35)
  .style("font-size","11px")
  .text("-10.0 to 0.0");

  var legend7 = svg.append("rect")
  .attr("x", 490)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#ffcccc");
  var text7 = svg.append("text")
  .attr("x", 495)
  .attr("y", 35)
  .style("font-size","11px")
  .text("0.0 to 10.0");

  var legend8 = svg.append("rect")
  .attr("x", 560)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#ff9999");
  var text8 = svg.append("text")
  .attr("x", 565)
  .attr("y", 35)
  .style("font-size","11px")
  .text("10.0 to 20.0");

  var legend9 = svg.append("rect")
  .attr("x", 630)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#ff6666");
  var text9 = svg.append("text")
  .attr("x", 635)
  .attr("y", 35)
  .style("font-size","11px")
  .text("20.0 to 30.0");

  var legend10 = svg.append("rect")
  .attr("x", 700)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#ff3333");
  var text10 = svg.append("text")
  .attr("x", 705)
  .attr("y", 35)
  .style("font-size","11px")
  .text("30.0 to 40.0");

  var legend11 = svg.append("rect")
  .attr("x", 770)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#FF0000");
  var text11 = svg.append("text")
  .attr("x", 775)
  .attr("y", 35)
  .style("font-size","11px")
  .text("40.0 to 50.0");

  var legend12 = svg.append("rect")
  .attr("x", 840)
  .attr("y", 10)
  .attr("width", 70)
  .attr("height", 10)
  .style("fill", "#CC0000");
  var text12 = svg.append("text")
  .attr("x", 845)
  .attr("y", 35)
  .style("font-size","11px")
  .text("50.0 to 60.0");

  var stateWidth = 80;
  var stateHeight = 80;
  var totalWidth = 1200 - margin.left - margin.right;
  var totalHeight = 700 - margin.top - margin.bottom;
  var mapWidth = 12 * stateWidth;
  var mapHeight = 8 * stateHeight;

  var map = d3.select("#tiles").append("svg")
  .attr("width", totalWidth)
  .attr("height", totalHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var I_Nom = "";
  d3.csv(csvFilePath, function (error, electionData) {
    if(error){
      throw error;
    } else {
    electionData.forEach(function(d){
      d.State = d.State;
      d.Abbreviation = d.Abbreviation;
      d.Total_EV = +d.Total_EV;
      d.D_Nominee = d.D_Nominee;
      d.D_Percentage = d.D_Percentage;
      d.D_Votes = +d.D_Votes;
      d.R_Nominee = d.R_Nominee;
      d.R_Percentage = d.R_Percentage;
      d.R_Votes = +d.R_Votes;
      d.I_Nominee = d.I_Nominee;
      d.I_Percentage = d.I_Percentage;
      d.I_Votes = +d.I_Votes;
      d.Year = d.Year;
      I_Nom = d.I_Nominee;
    })

    var xCoordinate = d3.scaleLinear()
    .domain([0,1,2,3,4,5,6,7,8,9,10,11])
    .range([20,100,180,260,340,420,500,580,660,740,820,900]);

    var yCoordinate = d3.scaleLinear()
    .domain([0,1,2,3,4,5,6,7])
    .range([0,80,160,240,320,400,480,560]);

    var tooltip = d3.select("#tiles").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0.9);

    var winnerMap = new Map();
    var domain = [-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60];
    var range = ["#0066CC", "#0080FF", "#3399FF", "#66B2FF", "#99ccff", "#CCE5FF", "#ffcccc", "#ff9999", "#ff6666", "#ff3333", "#FF0000", "#CC0000"];

    var colorScale = d3.scaleQuantile()
    .domain(domain)
    .range(range);

  if(I_Nom === ""){
    var states = map.selectAll("rect")
    .data(electionData)

    states.enter()
    .append("rect")
    .attr("class", "rect")
    .attr("x", function(d){
      var coordinates = USMapArray.get(d.State);
      var x = coordinates[0];
      return xCoordinate(x);
    })
    .attr("y", function(d){
      var coordinates = USMapArray.get(d.State);
      var y = coordinates[1];
      return yCoordinate(y);
    })
    .attr("width",stateWidth)
    .attr("height",stateHeight)
    .attr("stroke-width", "1px")
    .attr("stroke", "black")
    .attr("fill", function(d){return colorScale(d.R_Percentage - d.D_Percentage);})
    .on("mouseenter", function(d){
      tooltip.transition()
      .duration(500)
      .style("opacity", 0.9)
      tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
      "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\"> &nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
      "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
      "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
      )
    .style("position", "absolute")
    .style("border", "black")
    .style("border-style", "solid")
    .style("border-width","1px")
    .style("left", (d3.event.pageX + 20)+"px")
    .style("top", (d3.event.pageY + 20)+"px")
    .style("background-color", "white");
  })
    .on("mouseleave", function(d){
      tooltip.transition()
      .duration(500)
      .style("opacity", 0.0);
    });

    var stateNameText = map.selectAll(".nameText")
    .data(electionData)
    .enter()
    .append("text")
    .attr("class", "nameText")
    .attr("color","black")
    .attr("x", function(d){
      var coordinates = USMapArray.get(d.State);
      var x = coordinates[0];
      return xCoordinate(x) + 40;
    })
     .attr("y",function(d){
       var coordinates = USMapArray.get(d.State);
       var y = coordinates[1];
       return yCoordinate(y) + 35;
     })
     .style("text-align", "center")
     .style("text-anchor", "middle")

     .text(function(d){return d.Abbreviation;})
     .on("mouseenter", function(d){
       tooltip.transition()
       .duration(500)
       tooltip.style("opacity", 0.9);
       tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
       "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\"> &nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
       "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
       "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
       )
     .style("position", "absolute")
     .style("border", "black")
     .style("border-style", "solid")
     .style("border-width","1px")
     .style("background-color", "white")
     .style("left", (d3.event.pageX + 20)+"px")
     .style("top", (d3.event.pageY + 20)+"px");
   })
     .on("mouseleave", function(d){
       tooltip.transition()
       .duration(500)
       .style("opacity", 0.0);
     });

     var stateNameText = map.selectAll(".EVText")
     .data(electionData)
     .enter()
     .append("text")
     .attr("class", "EV")
     .attr("color","black")
     .attr("x", function(d){
       var coordinates = USMapArray.get(d.State);
       var x = coordinates[0];
       return xCoordinate(x) + 40;
     })
      .attr("y",function(d){
        var coordinates = USMapArray.get(d.State);
        var y = coordinates[1];
        return yCoordinate(y) + 55;
      })
      .style("text-align", "center")
      .style("text-anchor", "middle")
      .text(function(d){return d.Total_EV;})
      .on("mouseenter", function(d){
        tooltip.transition()
        .duration(500)
        tooltip.style("opacity", 0.9);
        tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
        "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\"> &nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
        "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
        "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
        )
      .style("position", "absolute")
      .style("border", "black")
      .style("border-style", "solid")
      .style("border-width","1px")
      .style("background-color", "white")
      .style("left", (d3.event.pageX + 20)+"px")
      .style("top", (d3.event.pageY + 20)+"px");
    })
      .on("mouseleave", function(d){
        tooltip.transition()
        .duration(500)
        .style("opacity", 0.0);
      });

       var highlightedStates = map.selectAll(".rectangle")
       .data(selectedData)
       .enter()
       .append("rect")
       .attr("class", "rectangle")
       .attr("x", function(d){
         var coordinates = USMapArray.get(d.State);
         var x = coordinates[0];
         return xCoordinate(x);
       })
       .attr("y", function(d){
         var coordinates = USMapArray.get(d.State);
         var y = coordinates[1];
         return yCoordinate(y);
       })
       .attr("width",stateWidth)
       .attr("height",stateHeight)
       .attr("stroke-width", 4)
       .attr("stroke", "#404040")
       .attr("fill", function(d){return colorScale(d.R_Percentage - d.D_Percentage);})
       .on("mouseenter", function(d){
         tooltip.transition()
         .duration(500)
         .style("opacity", 0.9)
         tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
         "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\"> &nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
         "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
         "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
         )
       .style("position", "absolute")
       .style("border", "black")
       .style("border-style", "solid")
       .style("border-width","1px")
       .style("left", (d3.event.pageX + 20)+"px")
       .style("top", (d3.event.pageY + 20)+"px")
       .style("background-color", "white");
     })
       .on("mouseleave", function(d){
         tooltip.transition()
         .duration(500)
         .style("opacity", 0.0);
       });

       var stateNameText = map.selectAll(".selectedName")
       .data(electionData)
       .enter()
       .append("text")
       .attr("class", "selectedName")
       .attr("color", "black")
       .attr("x", function(d){
         var coordinates = USMapArray.get(d.State);
         var x = coordinates[0];
         return xCoordinate(x) + 40;
       })
        .attr("y",function(d){
          var coordinates = USMapArray.get(d.State);
          var y = coordinates[1];
          return yCoordinate(y) + 35;
        })
        .style("text-align", "center")
        .style("text-anchor", "middle")
        .text(function(d){return d.Abbreviation;})
        .on("mouseenter", function(d){
          tooltip.transition()
          .duration(500)
          tooltip.style("opacity", 0.9);
          tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
          "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\"> &nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
          "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
          "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
          )
        .style("position", "absolute")
        .style("border", "black")
        .style("border-style", "solid")
        .style("border-width","1px")
        .style("background-color", "white")
        .style("left", (d3.event.pageX + 20)+"px")
        .style("top", (d3.event.pageY + 20)+"px");
      })
        .on("mouseleave", function(d){
          tooltip.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

       var stateNameText = map.selectAll(".EVText")
       .data(electionData)
       .enter()
       .append("text")
       .attr("class", "EV")
       .attr("color","#404040")
       .style("stroke-width", 4)
       .attr("x", function(d){
         var coordinates = USMapArray.get(d.State);
         var x = coordinates[0];
         return xCoordinate(x) + 40;
       })
        .attr("y",function(d){
          var coordinates = USMapArray.get(d.State);
          var y = coordinates[1];
          return yCoordinate(y) + 55;
        })
        .style("text-align", "center")
        .style("text-anchor", "middle")
        .text(function(d){return d.Total_EV;})
        .on("mouseenter", function(d){
          tooltip.transition()
          .duration(500)
          tooltip.style("opacity", 0.9);
          tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
          "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\"> &nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
          "<ul style=\"font-size: 75%;\"><li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
          "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
          )
        .style("position", "absolute")
        .style("border", "black")
        .style("border-style", "solid")
        .style("border-width","1px")
        .style("background-color", "white")
        .style("left", (d3.event.pageX + 20)+"px")
        .style("top", (d3.event.pageY + 20)+"px");
      })
        .on("mouseleave", function(d){
          tooltip.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

  } else {
    var states = map.selectAll("rect")
    .data(electionData)

    states.enter()
    .append("rect")
    .attr("class", "rect")
    .attr("x", function(d){
      var coordinates = USMapArray.get(d.State);
      var x = coordinates[0];
      return xCoordinate(x);
    })
    .attr("y", function(d){
      var coordinates = USMapArray.get(d.State);
      var y = coordinates[1];
      return yCoordinate(y);
    })
    .attr("width",stateWidth)
    .attr("height",stateHeight)
    .attr("stroke-width", "1px")
    .attr("stroke", "black")
    .attr("fill", function(d){return colorScale(d.R_Percentage - d.D_Percentage);})
    .on("mouseenter", function(d){
      tooltip.transition()
      .duration(500)
      tooltip.style("opacity", 0.9);
      tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
      "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
      "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:5; text-align:left;\">" + d.I_Nominee + ": " + d.I_Votes + "(" + d.I_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
      "<li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
      "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
      )
    .style("position", "absolute")
    .style("border", "black")
    .style("border-style", "solid")
    .style("border-width","1px")
    .style("background-color", "white")
    .style("left", (d3.event.pageX + 20)+"px")
    .style("top", (d3.event.pageY + 20)+"px");
    })
    .on("mouseleave", function(d){
      tooltip.transition()
      .duration(500)
      .style("opacity", 0.0);
    });

    var stateNameText = map.selectAll(".nameText")
    .data(electionData)
    .enter()
    .append("text")
    .attr("class", "nameText")
    .attr("color","black")
    .attr("x", function(d){
      var coordinates = USMapArray.get(d.State);
      var x = coordinates[0];
      return xCoordinate(x) + 40;
    })
     .attr("y",function(d){
       var coordinates = USMapArray.get(d.State);
       var y = coordinates[1];
       return yCoordinate(y) + 35;
     })
     .style("text-align", "center")
     .style("text-anchor", "middle")
     .text(function(d){return d.Abbreviation;})
     .on("mouseenter", function(d){
       tooltip.transition()
       .duration(500)
       tooltip.style("opacity", 0.9);
       tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
       "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
       "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:5; text-align:left;\">" + d.I_Nominee + ": " + d.I_Votes + "(" + d.I_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
       "<li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
       "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
       )
     .style("position", "absolute")
     .style("border", "black")
     .style("border-style", "solid")
     .style("border-width","1px")
     .style("background-color", "white")
     .style("left", (d3.event.pageX + 20)+"px")
     .style("top", (d3.event.pageY + 20)+"px");
   })
     .on("mouseleave", function(d){
       tooltip.transition()
       .duration(500)
       .style("opacity", 0.0);
     });

     var stateNameText = map.selectAll(".EVText")
     .data(electionData)
     .enter()
     .append("text")
     .attr("class", "EV")
     .attr("color","black")
     .attr("x", function(d){
       var coordinates = USMapArray.get(d.State);
       var x = coordinates[0];
       return xCoordinate(x) + 40;
     })
      .attr("y",function(d){
        var coordinates = USMapArray.get(d.State);
        var y = coordinates[1];
        return yCoordinate(y) + 55;
      })
      .style("text-align", "center")
      .style("text-anchor", "middle")
      .text(function(d){return d.Total_EV;})
      .on("mouseenter", function(d){
        tooltip.transition()
        .duration(500)
        tooltip.style("opacity", 0.9);
        tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
        "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
        "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:5; text-align:left;\">" + d.I_Nominee + ": " + d.I_Votes + "(" + d.I_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
        "<li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
        "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
        )
      .style("position", "absolute")
      .style("border", "black")
      .style("border-style", "solid")
      .style("border-width","1px")
      .style("background-color", "white")
      .style("left", (d3.event.pageX + 20)+"px")
      .style("top", (d3.event.pageY + 20)+"px");
    })
      .on("mouseleave", function(d){
        tooltip.transition()
        .duration(500)
        .style("opacity", 0.0);
      });

      var highlightedState = map.selectAll(".rectangle")
      .data(selectedData)
      .enter()
      .append("rect")
      .attr("class", "rectangle")
      .attr("x", function(d){
        var coordinates = USMapArray.get(d.State);
        var x = coordinates[0];
        return xCoordinate(x);
      })
      .attr("y", function(d){
        var coordinates = USMapArray.get(d.State);
        var y = coordinates[1];
        return yCoordinate(y);
      })
      .attr("width",stateWidth)
      .attr("height",stateHeight)
      .attr("stroke-width", 4)
      .attr("stroke", "#404040")
      .attr("fill", function(d){return colorScale(d.R_Percentage - d.D_Percentage);})
      .on("mouseenter", function(d){
        tooltip.transition()
        .duration(500)
        tooltip.style("opacity", 0.9);
        tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
        "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
        "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:5; text-align:left;\">" + d.I_Nominee + ": " + d.I_Votes + "(" + d.I_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
        "<li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
        "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
        )
      .style("position", "absolute")
      .style("border", "black")
      .style("border-style", "solid")
      .style("border-width","1px")
      .style("background-color", "white")
      .style("left", (d3.event.pageX + 20)+"px")
      .style("top", (d3.event.pageY + 20)+"px");
      })
      .on("mouseleave", function(d){
        tooltip.transition()
        .duration(500)
        .style("opacity", 0.0);
      });

      var stateNameText = map.selectAll(".selectedName")
      .data(selectedData)
      .enter()
      .append("text")
      .attr("class", "selectedName")
      .attr("color","black")
      .attr("x", function(d){
        var coordinates = USMapArray.get(d.State);
        var x = coordinates[0];
        return xCoordinate(x) + 40;
      })
       .attr("y",function(d){
         var coordinates = USMapArray.get(d.State);
         var y = coordinates[1];
         return yCoordinate(y) + 35;
       })
       .style("text-align", "center")
       .style("text-anchor", "middle")
       .text(function(d){return d.Abbreviation;})
       .on("mouseenter", function(d){
         tooltip.transition()
         .duration(500)
         tooltip.style("opacity", 0.9);
         tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
         "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
         "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:5; text-align:left;\">" + d.I_Nominee + ": " + d.I_Votes + "(" + d.I_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
         "<li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
         "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
         )
       .style("position", "absolute")
       .style("border", "black")
       .style("border-style", "solid")
       .style("border-width","1px")
       .style("background-color", "white")
       .style("left", (d3.event.pageX + 20)+"px")
       .style("top", (d3.event.pageY + 20)+"px");
     })
       .on("mouseleave", function(d){
         tooltip.transition()
         .duration(500)
         .style("opacity", 0.0);
       });

       var stateNameText = map.selectAll(".EVText")
       .data(electionData)
       .enter()
       .append("text")
       .attr("class", "EVText")
       .attr("color","black")
       .attr("x", function(d){
         var coordinates = USMapArray.get(d.State);
         var x = coordinates[0];
         return xCoordinate(x) + 40;
       })
        .attr("y",function(d){
          var coordinates = USMapArray.get(d.State);
          var y = coordinates[1];
          return yCoordinate(y) + 55;
        })
        .style("text-align", "center")
        .style("text-anchor", "middle")
        .text(function(d){return d.Total_EV;})
        .on("mouseenter", function(d){
          tooltip.transition()
          .duration(500)
          tooltip.style("opacity", 0.9);
          tooltip.html("<p style=\"font-size: 90%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp" + d.State + "</p>" +
          "<p style=\"font-size: 80%; color:black; font-size:5; text-align:left;\">&nbsp&nbsp&nbsp&nbsp Electoral Votes:" + d.Total_EV + "</p>" +
          "<ul style=\"font-size: 75%;\"><li style=\"color:green; font-size:5; text-align:left;\">" + d.I_Nominee + ": " + d.I_Votes + "(" + d.I_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
          "<li style=\"color:#3399FF; font-size:5; text-align:left;\">" + d.D_Nominee + ": " + d.D_Votes + "(" + d.D_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li>" +
          "<li style=\"color:#ff3333; font-size:5; text-align:left;\">" + d.R_Nominee + ": " + d.R_Votes + "(" + d.R_Percentage + "%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li></ul>"
          )
        .style("position", "absolute")
        .style("border", "black")
        .style("border-style", "solid")
        .style("border-width","1px")
        .style("background-color", "white")
        .style("left", (d3.event.pageX + 20)+"px")
        .style("top", (d3.event.pageY + 20)+"px");
      })
        .on("mouseleave", function(d){
          tooltip.transition()
          .duration(500)
          .style("opacity", 0.0);
        });

    }
    }
  });
}
