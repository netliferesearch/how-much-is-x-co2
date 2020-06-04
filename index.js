// Source:
// https://www.energuide.be/en/questions-answers/what-exactly-is-a-tonne-of-co2/2141/
// Which uses numbers from European Environment Agency

function CO2ToKmTraveledByCoach(kgCO2) {
  return (100/6.8) * kgCO2;
}

function CO2ToKmTraveledByScooter(kgCO2) {
  return (100/7.2) * kgCO2;
}

function CO2ToKmTraveledByPlanePerPassenger(kgCO2) {
  return (100/28.5) * kgCO2;
}

function CO2ToKmTraveledByTrainPerPassenger(kgCO2) {
  return (100/1.4) * kgCO2;
}

function CO2ToKmTraveledByCarAlone(kgCO2) {
  // Driving 100 km alone by car = 10,4 kg CO2/passenger

  return (100/10.4) * kgCO2;
}

module.exports = {
  CO2ToKmTraveledByCoach,
  CO2ToKmTraveledByScooter,
  CO2ToKmTraveledByPlanePerPassenger,
  CO2ToKmTraveledByTrainPerPassenger,
  CO2ToKmTraveledByCarAlone
}
