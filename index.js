const returnFirstTwoDrivers = driverNames => driverNames.slice(0, 2);

const returnLastTwoDrivers = driverNames => driverNames.slice(driverNames.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = integer => fare => fare * integer;

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

const selectDifferentDrivers = (driverNames, returnFirstTwoDrivers) => returnFirstTwoDrivers(driverNames);