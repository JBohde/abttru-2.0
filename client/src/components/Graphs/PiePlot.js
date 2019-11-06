import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { Button } from 'reactstrap';
import './PiePlot.css';
// import plotConfig from './Plots.js';

class PiePlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      plotObjects: [],
      showingPlot: [],
      plotLayout: {},
      recipeIndex: 0,
      nutrientIndex: 0,
    };
  }

  componentDidMount() {
    const { data, recipeIndex } = this.props;
    this.setState({ data, recipeIndex }, () => this.createPlot());
  }

  componentDidUpdate(nextProps) {
    const { data, recipeIndex } = this.props;
    if (nextProps.data !== data) {
      this.createPlot();
    }
    if (nextProps.recipeIndex !== recipeIndex) {
      this.nextRecipe();
    }
  }

  createPlot = () => {
    const { data } = this.state;
    // for each recipe, extract the 'digest' property within the 'recipe' property as well as the yield by recipe
    const recipeDigest = data.map(result => result.recipe.digest);
    const recipeYield = data.map(result => result.recipe.yield);
    const plotObjects = [];
    data.forEach(() => {
      // create object that will contain the 'data' property for each distinct plot (macros, fats, minerals, vitamins)

      let plots = [
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
            height: 275,
            width: 275,
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
            height: 275,
            width: 275,
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
            height: 275,
            width: 275,
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
            height: 275,
            width: 275,
            margin: {
              l: 20,
              r: 20,
              t: 20,
              b: 20,
            },
          },
        },
      ];
      plotObjects.push(plots);
    });

    recipeDigest.forEach((digest, index) => {
      digest.forEach((nutrient, i) => {
        if (
          nutrient.label === 'Fat' ||
          nutrient.label === 'Carbs' ||
          nutrient.label === 'Protein'
        ) {
          plotObjects[index][0].data.values.push(
            nutrient.total / recipeYield[index],
          );
          plotObjects[index][0].data.labels.push(nutrient.label);

          if (nutrient.label === 'Fat') {
            nutrient.sub.forEach(fat => {
              plotObjects[index][1].data.values.push(
                fat.total / recipeYield[index],
              );
              plotObjects[index][1].data.labels.push(fat.label);
            });
          }
        } else if ((i > 3) & (i < 11)) {
          plotObjects[index][2].data.values.push(
            nutrient.total / recipeYield[index],
          );
          plotObjects[index][2].data.labels.push(nutrient.label);
        } else if ((i > 10) & (i < 24)) {
          plotObjects[index][3].data.values.push(
            nutrient.total / recipeYield[index],
          );
          plotObjects[index][3].data.labels.push(nutrient.label);
        }
      });
    });

    this.setState({
      plotObjects,
      showingPlot: plotObjects[0][0].data,
      plotLayout: plotObjects[0][0].layout,
    });
  };

  nextRecipe = () => {
    const { data, plotObjects, recipeIndex, nutrientIndex } = this.state;
    const newRecipeIndex = recipeIndex === data.length - 1 ? 0 : recipeIndex + 1;
    this.setState({
      recipeIndex: newRecipeIndex,
      showingPlot: plotObjects[newRecipeIndex][nutrientIndex].data,
    });
  };

  switchPlot = event => {
    const { plotObjects, recipeIndex } = this.state;
    let nutrientIndex = event.target.value;
    this.setState({
      showingPlot: plotObjects[recipeIndex][nutrientIndex].data,
      plotLayout: plotObjects[recipeIndex][nutrientIndex].layout,
      nutrientIndex,
    });
  };

  render() {
    return (
      <div className='plot-wrapper'>
        <div className="graph-buttons">
          <Button className='btn-sm' onClick={this.switchPlot} value={0}>
            Macros
          </Button>
          <Button className='btn-sm' onClick={this.switchPlot} value={1}>
            Lipids
          </Button>
          <Button className='btn-sm' onClick={this.switchPlot} value={2}>
            Minerals
          </Button>
          <Button className='btn-sm' onClick={this.switchPlot} value={3}>
            Vitamins
          </Button>
        </div>
        <Plot
          data={[this.state.showingPlot]}
          // data={this.state.data[0][0].data}
          layout={this.state.plotLayout}
        />
      </div>
    );
  }
}

export default PiePlot;
