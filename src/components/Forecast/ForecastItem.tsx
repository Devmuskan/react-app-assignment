import React from 'react';
import Temperature from '../CurrentWeather/Temperature';
import WeatherIcon from '../CurrentWeather/WeatherIcon';
import { ForecastItemContainer } from './styled';

interface IForecastItemProps {
  day: string;
  time: string;
  weatherCode: number;
  high: number;
  low: number;
  main: string;
}
const ForecastItem: React.FC<IForecastItemProps> = (props) => {
  return (
    <ForecastItemContainer>
      <div>{props.day}</div>
      <div>{props.time}</div>
      <WeatherIcon code={props.weatherCode} />
      <div>{props.main}</div>
      <div>
        <Temperature value={props.high} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={props.low} />
        <sup>&deg;</sup>
      </div>
    </ForecastItemContainer>
  );
};

export default ForecastItem;
