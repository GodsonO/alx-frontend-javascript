export default function createIteratorObject(report) {
  let myarray = [];
  for (const value of Object.values(report.allEmployees)) {
    myarray = [...myarray, ...value];
  }

  return myarray;
}
