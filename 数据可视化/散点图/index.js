let dataset;
const data = fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    dataset = res;
  })
  .then(() => [generate()]);
  var formatTime = d3.timeFormat("%M:%S")
// const xScale =
const generate = () => {
  if (dataset) {
    console.log(dataset);
    const w = 1000;
    const h = 600;
    const padding = 60;
    const xScale = d3
      .scaleLinear()
      .domain([
        d3.min(dataset, (d) =>  d['Year'])-2,
        d3.max(dataset, (d) => d.Year),
      ])
      .range([padding, w - padding]);
    const yScale = d3.scaleLinear()
      .domain([
        d3.min(dataset, (d) =>  d["Seconds"]),
        d3.max(dataset, (d) => d["Seconds"]),
      ])
      .range([h - padding, padding]);
    const xAxis = d3.axisBottom(xScale).tickFormat((d,i)=>{
      if(i==0){
        return ""
      }
      return d
  });
    const yAxis = d3.axisLeft(yScale)
    .tickFormat((d,i)=>{
        return dataset[i].Time
    })
    const kinds = ["No doping allegations","Riders with doping allegations"]
    const svg = d3
      .select(".box")
      .append("svg")
      .attr("width", w)
      .attr("height", h);
    svg
      .append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);
    svg.append("g").attr("transform", "translate(60, 0)").call(yAxis);
    
    svg.append("g")
    .attr("class","legend")


    const labels = svg.select('.legend')
    labels.selectAll('.legend-label')
    .data(kinds).enter()
    .append("g")
    .attr('class',"legend-label")
    .attr("transform",(d,i)=>`translate(0,${250-30*i})`)
    .append("rect").attr("fill",(d)=>d=="No doping allegations"?'rgb(255, 127, 14)':"rgb(31, 119, 180)")
    .attr('width',"18px")
    .attr('height',"18px")
    .attr("x","792")
    labels.selectAll('.legend-label').append("text").text(d=>d).attr("x","814").attr("y","9").attr('dy',".35em")


    svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr('r',6)
    .attr("cy",(d)=>{ 
      return h-yScale(d["Seconds"])})
    .attr("cx",(d)=>xScale(d["Year"]))
    .attr('fill',(d)=>d.Doping?"rgb(31, 119, 180)":'rgb(255, 127, 14)')
    .attr('class',"dot")
  }

};
