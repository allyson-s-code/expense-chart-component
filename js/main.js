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
      borderRadius: 2.5,
      datalabels: {
        display: true,
      },
    },
  ],
};

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
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    },
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const spendingChart = new Chart(canvasElement, config);
