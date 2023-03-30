const getdate = () => {
  document.getElementById("date").innerHTML = Date();
  document.getElementById("name").innerHTML = "Jaydeep Sondagar";
};

const address = () => {
  document.getElementById("address").innerHTML = "121,Surat";
  document.getElementById("address").style.fontSize = "30px";
  //   document.getElementById("address").style.display = "block";
};

const data = { name: "BMW", model: 2014, color: "Red" };
data.year = 2014;
