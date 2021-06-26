// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sightings data from data.js
console.log(data);

// Refactor to use Arrow Functions!
data.forEach((sightingsReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Clear current table
  d3.selectAll("tbody").html("")  

  // // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Filter sightings by date
  var filteredData = data.filter(d => d.datetime === inputValue);

  console.log(filteredData);

  // Rebuild table
  filteredData.forEach((selections) => {
    var row = tbody.append("tr");
    Object.entries(selections).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


};
