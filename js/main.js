const chartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const labels = chartData.map((data) => data.day);
const amount = chartData.map((data) => data.amount);
const canvasElement = document.getElementById("myChart");

if (window.outerWidth > 500) {
  Chart.defaults.font.size = 16;
}
if (window.outerWidth < 500) {
  Chart.defaults.font.size = 11;
}

const data = {
  labels: labels,
  datasets: [
    {
      data: amount,
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      hoverBackgroundColor: [
        "#ff9b87",
        "#ff9b87",
        "#b4dfe5",
        "#ff9b87",
        "#ff9b87",
        "#ff9b87",
        "#ff9b87",
      ],
      borderSkipped: false,
      borderRadius: 4,
      datalabels: {
        display: true,
      },
    },
  ],
};

//custom tooltip
const titleTooltip = (tooltipItems) => {
  return "";
};

const labelTooltip = (context) => {
  let label = context.dataset.label || "";

  if (label) {
    label += ": ";
  }
  if (context.parsed.y !== null) {
    label += new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(context.parsed.y);
  }
  return label;
};

//config
const config = {
  type: "bar",
  data,
  options: {
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? "pointer"
        : "default";
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: true,
          color: "hsl(28, 10%, 53%)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        caretSize: 0,
        yAlign: "bottom",
        displayColors: false,
        bodyFont: {
          family: "DM Sans",
          weight: 700,
          size: (context) => {
            let width = context.chart.width;
            let size = Math.round(width / 20);
            return size;
          },
          color: "hsl(10, 79%, 65%)",
        },
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
      },
    },
  },
};

//Responsive Font
function responsiveFont() {
  if (window.outerWidth > 500) {
    Chart.defaults.font.size = 16;
  }
  if (window.outerWidth < 500) {
    Chart.defaults.font.size = 11;
  }
  myChart.update();
  console.log("window resized");
}
/*window.addEventListener("resize", function () {
  if (window.outerWidth > 500) {
    Chart.defaults.font.size = 16;
  }
  if (window.outerWidth < 500) {
    Chart.defaults.font.size = 11;
  }
  myChart.update();
  console.log("window resized");
});*/

//create chart
const myChart = new Chart(canvasElement, config);
