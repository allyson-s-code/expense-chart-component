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
      borderRadius: 3,
      datalabels: {
        display: true,
      },
    },
  ],
};

//tooltip
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
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        caretSize: 0,
        yAlign: "bottom",
        displayColors: false,
        bodyFont: {
          weight: 700,
          size: 14,
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

//create chart
const spendingChart = new Chart(canvasElement, config);
