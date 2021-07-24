const hq = 42;
const feet = 264;
function distanceFromHqInBlocks(blocks) {
  if (blocks > hq) {
    return blocks - hq;
  } else if (blocks < hq) {
    return hq - blocks;
  }
  return blocks;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(blocks) {
  let inFeet = distanceFromHqInBlocks(blocks) * feet;
  return inFeet;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, end) {
  if (start > hq) {
    return (end - start) * feet;
  } else start < hq;
  return (start - end) * feet;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, end) {
  let farePrice = distanceTravelledInFeet(start, end);
  if (farePrice < 400) {
    return 0;
  } else if (farePrice > 400 && farePrice < 2000) {
    return (farePrice - 400) * 0.02;
  } else if (2500 > farePrice && farePrice > 2000) {
    return 25;
  } else if (farePrice > 2500) {
    return "cannot travel that far";
  }
}
calculatesFarePrice();
