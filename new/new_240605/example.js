const endPoint = `
  http://apis.data.go.kr/6300000/eventDataService
`;

const keyName = `
  se%2Be7mPdWCb0fBl1Vh0%2BKK6NbrNzHDbTsjqUpCMu5rT0SNgXCwIyfTz3x%2BQU6GQJ8fCy0GOMMbor6S%2FoFZzPWw%3D%3D
`;

const example = `
  http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?
  serviceKey=${keyName}
  &
  numOfRows=10
  &
  pageNo=1
`;

console.log(example);
