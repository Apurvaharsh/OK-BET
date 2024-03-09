function addBid() {
  var name = document.getElementById("nameInput").value;
  var bid = document.getElementById("bidInput").value;

  if (name && bid) {
    var bidList = document.getElementById("bidList");
    var bidItem = document.createElement("li");
    bidItem.textContent = name + ": " + bid;
    bidList.appendChild(bidItem);

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("bidInput").value = "";
  } else {
    alert("Please enter both name and bid amount.");
  }
}
function increment(){
  var counter=document.getElementById("counter");
  var currentvalue=parseInt(counter.value);
  counter.value=currentvalue+1;
}
function reset(){
  var counter=document.getElementById("counter");
  counter.value=0;
}

