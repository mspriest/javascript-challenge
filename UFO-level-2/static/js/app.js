// from data.js
var tableData = data;

// Create References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var buildTable = (dataAdd) => {
  dataAdd.forEach(sightings => {
      var row = $tbody.append("tr");
      columns.forEach(column => row.append("td").text(sightings[column])
      )
  });
}

buildTable(tableData);



// Create event handlers 
button.on("click", () => {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = inputField1.property("value");
  var inputCity = inputField2.property("value");

  // Get the value property of the input element
  var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
  // console.log(filterDate);

  var filterCity = tableData.filter (tableData => tableData.city === inputCity);
  // console.log(filterCity);

  var filterData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
  // console.log(filterData);

  // Clear table
  $tbody.html("");

  // Filter sightings by date
	let response = {
		filterData, filterCity, filterDate
	}

	if (response.filterData.length !== 0) {
		BuildTable(filterData);
	}
		else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
			BuildTable(filterCity) || BuildTable(filterDate);
	
		}
		else {
			$tbody.append("tr").append("td").text("No matches found. Try again."); 
        }
})

