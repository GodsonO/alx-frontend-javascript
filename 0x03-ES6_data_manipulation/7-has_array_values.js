export default function hasValuesFromArray(setInstance, arr) {
  for (const element of arr) {
    if (!setInstance.has(element)) {
      return false;
    }
  }
  return true;
}
