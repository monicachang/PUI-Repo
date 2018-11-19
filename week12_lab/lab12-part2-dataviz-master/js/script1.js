//----- Part 1

var myChart = d3.select("#myChart");

var svg = myChart.append("svg").attr('width', 105).attr("height", 105);

//Group
d3.select("#myChart")
  .append("svg")
  .attr("width", 200).attr("height", 200)
  .append("g")
  .attr("transform", "translate(0, 0)")
  .append("circle")
  .attr("cx", 25).attr("cy", 25)
  .attr("r", 25)
  .attr("fill", "red")
 
d3.select("g")
  .append("circle")
  .attr("cx", 80).attr("cy", 80)
 .attr("r", 25)
 .attr("fill", "yellow");


d3.selectAll("circle")
    .on("mouseover", mouseover);

function mouseover(d) {
     d3.select(this)
         .transition()
         .attr("transform", "translate(20, 20)");

    tooltip.text(d3.select(this).attr("fill"))
     .style("visibility", "visible")
     .style("top", event.pageY+"px")
     .style("left", event.pageX+"px");
}

var tooltip = d3.select("#myChart")
             .append("div")
             .style("position", "absolute")
             .style("z-index", "10")
             .style("visibility", "hidden");