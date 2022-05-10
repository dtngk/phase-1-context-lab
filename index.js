/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


// Your code here
function createEmployeeRecord(empArray){

    const employeeArray = {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return employeeArray;
}

function createEmployeeRecords(empArray){

    const employeeRecords = [];

    for (let i = 0; i < empArray.length; i++){
        employeeRecords.push(createEmployeeRecord(empArray[i]));
    }    

    return employeeRecords;
}

function createTimeInEvent(timeStamp){
    const time = timeStamp.split(' ');
    const timeCard = {
        type: "TimeIn",
        hour: parseInt(time[1]),
        date: time[0],  
    }    

    this.timeInEvents.push(timeCard);

    return this;
}

function createTimeOutEvent(timeStamp){
    const time = timeStamp.split(' ');
    const timeCard = {
         type: "TimeOut",
         hour: parseInt(time[1]),
         date: time[0],  
    }    

    this.timeOutEvents.push(timeCard);
 
    return this;
}

function hoursWorkedOnDate(date){

    for (let i = 0; i < this.timeOutEvents.length; i++){
        if (this.timeOutEvents[i].date === date){
            return ((this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100);
        }
    }

    return null;
}

function wagesEarnedOnDate(timeStamp){
    const hours = hoursWorkedOnDate.call(this, timeStamp);
    
    return (hours * this.payPerHour);
}

function findEmployeeByFirstName(empArray, firstname){

    return empArray.find(ele => ele.firstName === firstname);
}

function calculatePayroll(empObj){
    let total = 0;

    for (let index = 0; index < empObj.length; index++){
       total += allWagesFor.call(empObj[index]);
    }
    
    return total;
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

