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

// Source: FAO.org: Greenhouse gas emissions from ruminant supply chains
// http://www.fao.org/3/i3461e/i3461e03.pdf
// Numbers from source: Global Livestock Environmental Assessment Model (GLEAM)

function CO2ToKgProducedBeefFromCattleProducingBeefButNotDairy(kgCO2) {
  const CO2PerKgBeef = 67.8;
  return kgCO2 / CO2PerKgBeef;
}

function CO2ToKgProducedBeefFromCattleProducingBothBeefAndDairy(kgCO2) {
  const CO2PerKgBeef = 18.4;
  return kgCO2 / CO2PerKgBeef;
}

function CO2ToKgProducedMilk(kgCO2) {
  const CO2PerKgMilk = 2.8;
  return kgCO2 / CO2PerKgMilk;
}

function CO2ToLitresProducedMilk(kgCO2) {
  const CO2PerKgMilk = 2.8;
  const litresPerKgMilk = 0.970873786407767;

  return (kgCO2 / CO2PerKgMilk) * litresPerKgMilk;
}

// Source: Acre for acre, urban trees can store as much carbon as tropical forest
// https://anthropocenemagazine.org/2018/07/acre-for-acre-urban-trees-can-store-as-much-carbon-as-tropical-forest/
// Source: Wilkes P. et al. “Estimating urban above ground biomass with multi-scale LiDAR.” Carbon Balance and Management. 2018.
// https://cbmjournal.biomedcentral.com/articles/10.1186/s13021-018-0098-0
function CO2ToHectaresRainforest(kgCO2) {
  const kgCO2PerHectareRainforest = 190 * 1000;
  return kgCO2 / kgCO2PerHectareRainforest;
}

function CO2ToSquareMetersRainforest(kgCO2) {
  return CO2ToHectaresRainforest(kgCO2) * 10000;
}

// Source: https://www.worldbank.org/en/news/feature/2019/09/23/costo-moda-medio-ambiente
// Using numbers from: United Nations Environment Programme (UNEP)
function CO2ToJeans(kgCO2) {
  const kgCO2PerJeans = 33.4;
  return kgCO2 / kgCO2PerJeans;
}

module.exports = {
  CO2ToKmTraveledByCoach,
  CO2ToKmTraveledByScooter,
  CO2ToKmTraveledByPlanePerPassenger,
  CO2ToKmTraveledByTrainPerPassenger,
  CO2ToKmTraveledByCarAlone,
  CO2ToKgProducedBeefFromCattleProducingBeefButNotDairy,
  CO2ToKgProducedBeefFromCattleProducingBothBeefAndDairy,
  CO2ToLitresProducedMilk,
  CO2ToHectaresRainforest,
  CO2ToSquareMetersRainforest,
  CO2ToJeans
}
