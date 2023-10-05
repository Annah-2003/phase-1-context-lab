/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arrOfArrs) {
    return arrOfArrs.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
    return employee;createTimeInEvent(employee, "2023-10-01 0800");
    
    // The first timeInEvent date should be "2023-10-01"
    expect(employee.timeInEvents[0].date).to.equal("2023-10-01");
  };

  
  
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
    return employee;
  }
  
  function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
    
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    const payRate = employee.payPerHour;
    return hoursWorked * payRate;
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0); 
    
  }
  
const allWagesFor = function () {
   const eligibleDates = this.timeInEvents.map(function (e) {
       return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const employees = [
    {
      firstName: "Irene",
      familyName: "Kimanu",
      title: "Engineer",
      payPerHour: 25,
      timeInEvents: [{ type: "TimeIn", hour: 800, date: "2023-10-01" }],
      timeOutEvents: [{ type: "TimeOut", hour: 1600, date: "2023-10-01" }]
    },
    // Add more employee records as needed
  ];
  
  // Calculate the total payroll using the calculatePayroll function
  const totalPayroll = calculatePayroll(employees);
  
  console.log("Total Payroll: $" + totalPayroll); // Output the total payroll
  