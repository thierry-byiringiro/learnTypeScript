interface Employee{
    name: string;
    employeeID : number;
}

interface Manager{
    teamSize: number;
}
type ManagerEmployee = Employee & Manager;

function describeManagerEmployee(me : ManagerEmployee) {
  return `${me.name} (ID: ${me.employeeID}) manages a team of ${me.teamSize} people`;
}

console.log(describeManagerEmployee({ name: "Bob", employeeID: 123, teamSize: 5 }))