//----- Part 1

var myChart = d3.select("#myChart");

var svg = myChart.append("svg").attr('width', 50).attr("height", 50);

svg.append("circle")
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 25)
    .attr("fill", "red");