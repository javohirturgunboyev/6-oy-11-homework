import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import chartData from './assets/chart.json'
import './App.css'
const Tableau10 = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab',
];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};

export default function BasicColor() {
  const [color, setColor] = React.useState('#4e79a7');
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [data3, setData3] = React.useState([]);

  React.useEffect(() => {
    const formattedData = chartData.map(item => ({
      x: new Date(item.time).getTime(), 
      y: item.value
    }));
    setData(formattedData);

    const xValues = formattedData.map(item => item.x);
    setData2(xValues);
     const xValue = formattedData.map(item => item.y);
    setData3(xValue);
  }, []);

  const handleChange = (event, nextColor) => {
    if (nextColor !== null) {
      setColor(nextColor);
    }
  };

  console.log(data3);
  console.log(data2); 
  console.log(data); 

  return (
    <Stack 
      className='div-1' 
      direction="column" 
      spacing={2} 
      alignItems="center" 
      sx={{ width: '1200px', mx: 'auto',my:"auto" }} 
    >
      <LineChart
        {...chartsParams}
        series={[
          {
            data: data3, 
            label: 'Exchange Rate',
            color, 
          },
        ]}
      />
      <ToggleButtonGroup
        value={color}
        exclusive
        onChange={handleChange}
      >
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: 'inline-block',
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}