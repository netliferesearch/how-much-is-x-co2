import React from 'react';
import './App.css';

import {
  CO2ToKmTraveledByCarAlone,
  CO2ToKmTraveledByPlanePerPassenger,
  CO2ToKmTraveledByTrainPerPassenger,
  CO2ToKgProducedBeefFromCattleProducingBeefButNotDairy,
  CO2ToKgProducedBeefFromCattleProducingBothBeefAndDairy,
  CO2ToLitresProducedMilk,
  CO2ToRainforestTrees,
  CO2ToJeans,
} from "@netlifedesign/how-much-is-x-co2";


function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const kg = urlParams.get('kg') || 1;

  // const kg = window.location.pathname.slice(1) || 1;

  const decimals = 2;

  return (
    <div className="App">
      <h1>How much is { kg } kg CO2?</h1>
      <ul>
        <li>Emissions from traveling <strong>{ CO2ToKmTraveledByCarAlone(kg).toFixed(0) }km</strong> by car alone</li>
        <li>Emissions from traveling <strong>{ CO2ToKmTraveledByPlanePerPassenger(kg).toFixed(0) }km</strong> by plane (per passenger)</li>
        <li>Emissions from traveling <strong>{ CO2ToKmTraveledByTrainPerPassenger(kg).toFixed(0) }km</strong> by train (per passenger)</li>
        <li>Emissions from producing <strong>{ CO2ToKgProducedBeefFromCattleProducingBeefButNotDairy(kg).toFixed(decimals) }kg</strong> beef (from cattle producing beef, but not dairy)</li>
        <li>Emissions from producing <strong>{ CO2ToKgProducedBeefFromCattleProducingBothBeefAndDairy(kg).toFixed(decimals) }kg</strong> beef (from cattle producing both beef and dairy)</li>
        <li>Emissions from producing <strong>{ CO2ToLitresProducedMilk(kg).toFixed(1) } litres</strong> of milk</li>
        <li>Carbon stored in <strong>{ CO2ToRainforestTrees(kg).toFixed(2) } trees</strong> in a tropical rainforest</li>
        <li>Emissions to make <strong>{ CO2ToJeans(kg).toFixed(2) } pairs of jeans</strong></li>
      </ul>
    </div>
  );
}

export default App;
