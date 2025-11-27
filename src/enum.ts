enum Status{
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending"
}
// Define the Status enum here

function getStatusMessage(status : Status)  : string{
  if(status == "Active"){
    return "The item is currently" + status;
  }else if(status == "Inactive"){
    return "The item is currently" + status;
  }else{
    return "The item is pending review" + status;
  }
}

console.log(getStatusMessage(Status.Active))
console.log(getStatusMessage(Status.Pending))
console.log(getStatusMessage(Status.Inactive))