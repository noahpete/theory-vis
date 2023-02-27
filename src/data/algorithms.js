import { NumberUtils } from "utils";

export function NaiveClosestPair(Pairs) {
  let dMin = Infinity;
  for (let i = 0; i < Pairs.length; ++i) {
    for (let j = i + 1; j < Pairs.length; ++j) {
      if (NumberUtils.dist(Pairs[i], Pairs[j]) < dMin) {
        dMin = NumberUtils.dist(Pairs[i], Pairs[j]);
      }
    }
  }
  return dMin;
}
