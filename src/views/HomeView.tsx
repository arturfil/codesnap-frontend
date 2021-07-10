import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state'
import { getForecasts } from '../state/action-creators';

const HomeView = () => {
  const forecastData = useSelector((state: RootState) => state.forecasts.forecasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecasts());
  }, [dispatch])



  return (
    <div className="container mt-4">
      <h1>Home View</h1>
      {forecastData ? forecastData.map((f, i) => (
        <div key={i} style={{textAlign: 'left', margin: '0 30%'}}>
          {f.summary}
        </div>
      ))
        : (
          <h2>No current Forecasts</h2>
        )
      }
    </div>
  )
}

export default HomeView
