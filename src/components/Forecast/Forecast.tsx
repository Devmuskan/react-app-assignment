import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import Pagination from '../Pagination/Pagination';
import ForecastItem from './ForecastItem';
import { ForecastContainer, ForecastItems, SectionTitle } from './styled';

const Forecast: React.FC = () => {
  const { forecast, isInitial } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    isInitial: state.app.isInitial,
    forecast: state.weather.extendedWeatherData,
  }));

   const data = forecast;
   console.log("forecast", forecast);
   const [loading, setLoading] = useState(true);

   const [currentPage, setCurrentPage] = useState(1);
   const [recordsPerPage] = useState(6);

   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
   const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
   const nPages = Math.ceil(data.length / recordsPerPage)

  if (isInitial) return <></>;
  //  console.log('currentRecords', currentRecords); 

   const paginationDay = data.map(item => item.day);
   let uniquePaginationDay = paginationDay.filter((c, index) => {
    return paginationDay.indexOf(c) === index;
   });
  //  console.log("paginationDAy", uniquePaginationDay);
  return (
    <ForecastContainer>
      <SectionTitle>Extended Forecast</SectionTitle>
       <div className='container mt-5'>
       <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginationDay={uniquePaginationDay}
        />
      {currentRecords.map((item, i) => {
          
          return (
            <ForecastItems>
            <ForecastItem
              key={i}
              day={item.day}
              time={item.time}
              high={item.temp.temp_max}
              low={item.temp.temp_min}
              weatherCode={item.weather.id}
              main={item.weather.main}
            />
            </ForecastItems>
          );
          
        })}
            
        </div>
      
    </ForecastContainer>
  );
  
};



export default Forecast;
