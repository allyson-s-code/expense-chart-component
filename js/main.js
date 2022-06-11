const canvasElement = document.getElementById("myChart");

const data = {
  labels: ["mon", "tues", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
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

//tooltip
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

/*const tooltipFont = function (context) {
    let width = context.chart.width;
    let size = Math.round(width / 32);
    return {
      size: size,
    };
  }; */

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
          size: 16,
          color: "hsl(10, 79%, 65%)",
        },
        callbacks: {
          title: (context) => {
            return "";
          },
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
}

//create chart
const myChart = new Chart(canvasElement, config);
