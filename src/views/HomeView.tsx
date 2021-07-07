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
    <div style={{display: 'felx', textAlign: 'center'}}>
      <h1>Home View</h1>
      {forecastData ?
        (
          <h2>{JSON.stringify(forecastData)}</h2>
        ) : (
          <h2>No current Forecasts</h2>
        )
      }
    </div>
  )
}

export default HomeView
