export const dist = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

export const getMedianXCoord = (points) => {
  let sum = 0;
  for (let i = 0; i < points.length; ++i) sum += points[i].x;
  return sum / points.length;
};

export const getPointsLeftOf = (points, val) => {
  let left = [];
  for (let i = 0; i < points.length; ++i)
    if (points[i].x <= val) left.push(points[i]);
  return left;
};

export const getPointsRightOf = (points, val) => {
  let right = [];
  for (let i = 0; i < points.length; ++i)
    if (points[i].x > val) right.push(points[i]);
  return right;
};

export const getPointsInDeltaStrip = (points, m, delta) => {
  let strip = [];
  for (let i = 0; i < points.length; ++i)
    if (Math.abs(points[i].x - m) <= delta) strip.push(points[i]);
  console.log("strip", points, strip);

  return strip;
};

export const bruteForceCP = (points) => {
  let min = Infinity;
  let bestPoints = [];
  for (let i = 0; i < points.length; ++i) {
    for (let j = 0; j < points.length; ++j) {
      if (i === j) continue;
      if (dist(points[i], points[j]) < min) {
        min = dist(points[i], points[j]);
        bestPoints = [points[i], points[j]];
      }
    }
  }
  return bestPoints;
};

export const getClosestPairInSet = (setOfPairs) => {
  console.log("setPairs", setOfPairs);
  let min = Infinity;
  let best = [];
  for (let i = 0; i < setOfPairs.length; ++i) {
    if (setOfPairs[i].length < 2) continue;
    const points = setOfPairs[i];
    console.log(points);
    if (dist(points[0], points[1]) < min) {
      console.log("__HERE__", min, points, dist(points[0], points[1]));
      min = dist(points[0], points[1]);
      best = points;
    }
  }
  return best;
};
