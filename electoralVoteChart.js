function ElectoralVoteChart(csvFile){
  d3.select("#electoral-vote").select("svg").remove();
  d3.select("#stateList").select("svg").remove();
  var margin = {top: 20, right: 10, bottom: 20, left: 10};

  var width = 1000 - margin.left - margin.right,
      height = 100 - margin.top - margin.bottom;

  var svg = d3.select("#electoral-vote").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var D_Total_EV = 0;
  var R_Total_EV = 0;
  var I_Total_EV = 0;
  d3.csv(csvFile, function (error, electionData) {
    if(error){
      throw error;
    } else {
      electionData.forEach(function(d){
        d.State = d.State;
        d.Total_EV = +d.Total_EV;
        d.D_Percentage = +d.D_Percentage;
        d.R_Percentage = +d.R_Percentage;
        d.I_Percentage = +d.I_Percentage;
        if(d.D_Percentage > d.R_Percentage){
          if(d.D_Percentage > d.I_Percentage){
            D_Total_EV = D_Total_EV + d.Total_EV;
          }
        }
        if (d.R_Percentage > d.D_Percentage){
          if(d.R_Percentage > d.I_Percentage){
            R_Total_EV = R_Total_EV + d.Total_EV;
          }
        }
        if (d.I_Percentage > d.D_Percentage){
          if(d.I_Percentage > d.R_Percentage){
            I_Total_EV = I_Total_EV + d.Total_EV;
          }
        }
      })
      All_EV = D_Total_EV + R_Total_EV + I_Total_EV + electionData.length;

      var electoralVoteScale = d3.scaleLinear()
      .domain([0,All_EV])
      .range([0,1000]);

      //Domain definition for global color scale
      var domain = [-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60];

      //Color range for global color scale
      var range = ["#0066CC", "#0080FF", "#3399FF", "#66B2FF", "#99ccff", "#CCE5FF", "#ffcccc", "#ff9999", "#ff6666", "#ff3333", "#FF0000", "#CC0000"];

      //Global colorScale to be used consistently by all the charts
      var colorScale = d3.scaleQuantile()
      .domain(domain)
      .range(range);

      if(I_Total_EV === 0){
        electionData.sort(function(a, b) { return (b.D_Percentage - b.R_Percentage) - (a.D_Percentage - a.R_Percentage); });

        var old_Total_EV = 0;
        var cul_Total_EV = 0;
        var electoralVoteBar = svg.selectAll("rect")
        .data(electionData);

        electoralVoteBar.enter()
        .append("rect")
        .attr("x", function(d){
           cul_Total_EV = old_Total_EV;
           old_Total_EV = old_Total_EV + d.Total_EV + 1;
          return (electoralVoteScale(cul_Total_EV));
        })
        .attr("y", 30)
        .attr("width", function(d){return electoralVoteScale(d.Total_EV);})
        .attr("height", 30)
        .attr("fill", function(d){return colorScale(d.R_Percentage - d.D_Percentage);});

        var textD_Total_EV = svg.append("text")
        .attr("x", 50)
        .attr("y", 15)
        .style("stroke","black")
        .text(D_Total_EV);

        var textR_Total_EV = svg.append("text")
        .attr("x", 900)
        .attr("y", 15)
        .style("stroke","black")
        .text(R_Total_EV);

      } else {
        var I_data = [];
        var index = [];
        for(var i = 0; i < electionData.length;i++){
          if (electionData[i].I_Percentage > electionData[i].D_Percentage){
            if(electionData[i].I_Percentage > electionData[i].R_Percentage){
              I_data.push(electionData[i]);
            }
          }
        }

        electionData.sort(function(a, b){ return (b.D_Percentage - b.R_Percentage) - (a.D_Percentage - a.R_Percentage);});

        var old_Total_EV = 0;
        var cul_Total_EV = 0;

        var I_electoralVoteBar = svg.selectAll("rect")
        .data(I_data);

        I_electoralVoteBar.enter()
        .append("rect")
        .attr("x", function(d){
          cul_Total_EV = old_Total_EV;
          old_Total_EV = old_Total_EV + d.Total_EV + 1;
          return electoralVoteScale(cul_Total_EV);})
        .attr("y", 30)
        .attr("width", function(d){return electoralVoteScale(d.Total_EV);})
        .attr("height", 30)
        .attr("fill", "green");

        var DE_electoralVoteBar = svg.selectAll("rect")
        .data(electionData);

        DE_electoralVoteBar.enter()
        .append("rect")
        .attr("x", function(d){
          cul_Total_EV = old_Total_EV;
          old_Total_EV = old_Total_EV + d.Total_EV + 1;
          return electoralVoteScale(cul_Total_EV);})
        .attr("y", 30)
        .attr("width", function(d){return electoralVoteScale(d.Total_EV);})
        .attr("height", 30)
        .attr("fill", function(d){return colorScale(d.R_Percentage - d.D_Percentage);});

        var textD_Total_EV = svg.append("text")
        .attr("x", 20)
        .attr("y", 15)
        .style("stroke","black")
        .text(I_Total_EV);

        var textD_Total_EV = svg.append("text")
        .attr("x", 150)
        .attr("y", 15)
        .style("stroke","black")
        .text(D_Total_EV);

        var textR_Total_EV = svg.append("text")
        .attr("x", 900)
        .attr("y", 15)
        .style("stroke","black")
        .text(R_Total_EV);
      }

      var divideLine = svg.append("line")
      .attr("x1", width/2)
      .attr("x2", width/2)
      .attr("y1", 25)
      .attr("y2", 65)
      .style("stroke-width", 3)
      .style("stroke", "black");

      var divideText = svg.append("text")
      .attr("x", 380)
      .attr("y", 15)
      .text("Electoral Vote(270 needed to win)");

      svg.append("g")
      .attr("class", "brush")
      .call(d3.brushX().extent([[0,20],[990,70]]).on("end", brushended));

      function brushended(){
        d3.select("#stateList").select("svg").remove();
        if(!d3.event.sourceEvent) return;
        if(!d3.event.selection) return;
        var da = d3.event.selection;

        var cul_EV = 0;
        var old_EV = 0;
        var selectedState = [];
        for(var i = 0; i < electionData.length; i++){
          cul_EV = old_EV;
          old_EV = electionData[i].Total_EV + old_EV + 1;
          if(electoralVoteScale(cul_EV) >= da[0] && electoralVoteScale(old_EV) <= da[1]){
              selectedState.push(electionData[i]);
          } else if(electoralVoteScale(cul_EV) <= da[0] && electoralVoteScale(old_EV) >= da[0]){
             selectedState.push(electionData[i]);
          } else if(electoralVoteScale(cul_EV) <= da[1] && electoralVoteScale(old_EV) >= da[1]){
             selectedState.push(electionData[i]);
         }
       }
      var selectedStateList = d3.select("#stateList").append("svg")
      .attr("width", 200)
      .attr("height", 1000)
      for(var i = 0; i < selectedState.length; i++){
        selectedStateList.append("text")
        .attr("x", 10)
        .attr("y", 30 + 30 * i)
        .attr("stroke-width", 2)
        .attr("font-size", 15)
        .text("●   " + selectedState[i].State);
      }
      var tileChart = new TileChart(csvFilePath,selectedState);
    }
  }
  });
}
