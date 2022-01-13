// const ctx = document.querySelector('#myChart').getContext('2d');

// const labels = [
//     '2012',
//     '2013',
//     '2014',
//     '2015',
//     '2016',
//     '2017',
//     '2018',
//     '2019',
//     '2020'
// ];

// const data = {
//     labels,
//     datasets: [
//         {
//             data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
//             label: "Remaining time",
//             backgroundColor: [
//                 'rgb(247, 141, 11)',
//             ],
//         },
//     ],
// };

// const config = {
//     type: 'bar',
//     data: data, 
//     options: {
//         responsive: true,
//     },
// };

// const plugin = {
//     id: 'custom_canvas_background_color',
//     beforeDraw: (chart) => {
//       const ctx = chart.canvas.getContext('2d');
//       ctx.save();
//       ctx.globalCompositeOperation = 'destination-over';
//       ctx.fillStyle = 'lightGreen';
//       ctx.fillRect(0, 0, chart.width, chart.height);
//       ctx.restore();
//     }
//   };

//   ctx.fillStyle = 'black';
//   ctx.fillRect(0, 0, ctx.width, ctx.height);

// const myChart = new Chart(ctx, config);