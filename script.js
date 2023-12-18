//your JS code here. If required.

function functionName() {
  alert(arguments.callee.name);
}

function AccioJob() {
  alert(arguments.callee.name);
}

// Test the functions
functionName(); // This will display an alert with the text "functionName"
AccioJob(); // This will display an alert with the text "AccioJob"
