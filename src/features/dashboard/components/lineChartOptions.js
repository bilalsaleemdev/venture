export const options = {
    // lagend hide 
    legend: {
        show: false
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {   // Adjust the size of the chart
        left: '0%',
        top: '10%',
        containLabel: true,
        width: '100%',  // Increase the width of the chart
        height: '90%'  // Increase the height of the chart
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        color: '#000',
        areaStyle: {
            // color gradient
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'lightgray' // color at 0% position
                }, {
                    offset: 1, color: '#fff' // color at 100% position
                }],
                global: false // false by default
            }
        }
      }
    ]
  };

  // {


// //     tooltip: {
// //         trigger: 'axis'
// //     },
// //     legend: {
// //         data: ['Impressions', 'Clicks'], // Adjust legend data accordingly
// //         selected: {
// //             'Impressions': true, // Set initial visibility of series
// //             'Clicks': true
// //         }
// //     },
// //     grid: {   // Adjust the size of the chart
// //         left: '10%',
// //         right: '10%',
// //         top: '10%',
// //         bottom: '10%',
// //         containLabel: true,
// //         width: '80%',  // Increase the width of the chart
// //         height: '80%'  // Increase the height of the chart
// //     },
// //     xAxis: [{
// //         type: 'category',
// //         data: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
// //     },
// // ],
// //     yAxis: {
// //         type: 'value'
// //     },
// //     series: [
// //         // {
// //         //     name: 'Impressions',
// //         //     type: 'line',
// //         //     smooth: true,
// //         //     data: [1200, 3000, 2500, 1500, 1600, 3500, 1800] // Jan
// //         //     // Include data for other months...
// //         // },
// //         {
// //             name: 'Clicks', // Name of the new series
// //             type: 'line', // Type of the new series
// //             smooth: true,
// //             data: [800, 1800, 1500, 900, 1000, 2000, 1200] // Jan (replace with actual data)
// //             // Include data for other months...
// //         }
// //     ]

    
// };

