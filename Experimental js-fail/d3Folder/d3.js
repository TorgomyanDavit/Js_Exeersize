// exersize D3
// const data = [10,12,25,15,20];
// const color = ["red","blue","orange","green","brown"];
// const allChildDiv = d3.select("#exersize");

// function run() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     const bindData = allChildDiv.selectAll("div").data(data);

//     // update already exist element 
//     bindData.transition().duration(1000)
//     .text(val => val)
//     .style("color","blue")
//     .style("background-Color",(val,i) => color[i])
//     .style("margin","10px")
//     .style("width",(val) => (val * 10) + "px");

//     // create matc of array div 
//     bindData.enter().append("div")
//     .text((val) => val)
//     .style("background-Color",(val,i) => color[i])
//     .style("margin","10px")
//     .style("width",(val) => (val * 10) + "px");

//     // Remove All single div  that donot have their pair
//     bindData.exit().remove()

//     setTimeout(() => {
//         data.shift()
//         color.shift()
//         color.push("#" + randomColor)
//         data.push(Math.floor(Math.random() * 25) + 1)
//         run()
//     },1000)
//     // console.log(color);
// }
// run()

// Join function 
// function run() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     const bindData = allChildDiv.selectAll("div").data(data);

//     bindData.join("div").transition()
//     .text(val => val)
//     .style("color","blue")
//     .style("background-Color",(val,i) => color[i])
//     .style("margin","10px")
//     .style("width",(val) => (val * 10) + "px");

//     setTimeout(() => {
//         data.shift()
//         color.shift()
//         color.push("#" + randomColor)
//         data.push(Math.floor(Math.random() * 25) + 1)
//         run()
//     },3000);
//     console.log(color);
// }
// run()



/** Svg Example */



// let Data = {
//     cord:[75,105,200,49,55,42,99,300],
//     color:[],
//     randomColor:Math.floor(Math.random()*16777215).toString(16),
//     width: 500,
//     height: 350
// }
// let {cord,width,height,color,randomColor,x,y} = Data
// function update() {

//     randomColor = Math.floor(Math.random()*16777215).toString(16)
// }

// const svg = d3
// .select("#Parent").append("svg")
// .attr("width",width)
// .attr("height",height)
// .attr("height",height)

// function run() {


   
//     const bind = svg.selectAll("rect").data(cord);

//     bind.transition().duration(1000)
//     .attr("height",val => val)
//     .attr("x",(val,i) => i * 50)
//     .attr("y",(val,i) => height - val)

//     bind.enter()
//     .append("rect")
//     .attr("width",20)
//     .attr("height",val => val)
//     .attr("x",(val,i) => i * 50)
//     .attr("y",(val,i) => height - val)
//     .attr("fill",(val,i) => {
//         update()
//         if(color[i] === undefined){color.push("#" + randomColor)}
//         return color[i]
        
//     })
//     enter.exit().remove()

//     setTimeout(() => {
//         cord.shift()
//         cord.push(Math.ceil(Math.random() * 300))
//         run()
//     },1000)
// }
// run()


























// Remove Element
// const P = d3.select("#P").remove()

// Append Data
// const data = ["js","C#","C++","Pyto"];
// const color = ["red","blue","green","orange"];
// const div = d3.select("#data");
// const bindData = div.selectAll("p").data(data);
// bindData.text((val) => val).style("color",(val,index) => color[index]);
// bindData.exit().text("did`not have data pair").remove();

// Enter function
// const data = ["am","en","ru","fr"];
// const color = ["red","blue","green","orange"];


// const enter = d3.select("#enter").selectAll("p").data(data)
// // update 
// enter.text(val => val).style("color",(val,index) => color[index])
// // enter create corresponded data element
// enter.enter().append("p").text(val => val).style("color",(val,index) => color[index])
// // remove not using element 
// enter.exit().remove()



















