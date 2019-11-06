let plotConfig = [
  {
    data: {
      values: [],
      labels: [],
      name: 'Macronutrients',
      hoverinfo: 'label+percent+name',
      hole: 0.6,
      type: 'pie',
    },
    layout: {
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      annotations: [
        {
          font: {
            size: 14,
          },
          showarrow: false,
          text: 'Macros',
          x: 0.5,
          y: 0.5,
        },
      ],
      showlegend: false,
      height: 300,
      width: 300,
      margin: {
        l: 20,
        r: 20,
        t: 20,
        b: 20,
      },
    },
  },
  {
    data: {
      values: [],
      labels: [],
      text: 'Fats',
      textposition: 'inside',
      name: 'Lipids',
      hoverinfo: 'label+percent+name',
      hole: 0.6,
      type: 'pie',
    },
    layout: {
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      annotations: [
        {
          font: {
            size: 14,
          },
          showarrow: false,
          text: 'Fats',
          x: 0.5,
          y: 0.5,
        },
      ],
      showlegend: false,
      height: 300,
      width: 300,
      margin: {
        l: 20,
        r: 20,
        t: 20,
        b: 20,
      },
    },
  },
  {
    data: {
      values: [],
      labels: [],
      name: 'Minerals',
      hoverinfo: 'label+percent+name',
      hole: 0.6,
      type: 'pie',
    },
    layout: {
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      annotations: [
        {
          font: {
            size: 14,
          },
          showarrow: false,
          text: 'Minerals',
          x: 0.5,
          y: 0.5,
        },
      ],
      showlegend: false,
      height: 300,
      width: 300,
      margin: {
        l: 20,
        r: 20,
        t: 20,
        b: 20,
      },
    },
  },
  {
    data: {
      values: [],
      labels: [],
      name: 'Vitamins',
      hoverinfo: 'label+percent+name',
      hole: 0.6,
      type: 'pie',
    },
    layout: {
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      annotations: [
        {
          font: {
            size: 14,
          },
          showarrow: false,
          text: 'Vitamins',
          x: 0.5,
          y: 0.5,
        },
      ],
      showlegend: false,
      height: 300,
      width: 300,
      margin: {
        l: 20,
        r: 20,
        t: 20,
        b: 20,
      },
    },
  },
];

export default plotConfig;