console.log("Request data...");

setTimeout(() => {
  console.log("Prepairing data...");
}, 2000);

const backendData = {
  server: "aws",
  port: 1500,
  status: "working",
};

setTimeout(() => {
  backendData.modified = true;
  console.log("Data received", backendData);
}, 3000);

const person = { 
  name:'Abdulloh',
  age:20,
  married:true,
  family:{
    son:'Jumanazar',
    daughter:'Gurl'
  }
}