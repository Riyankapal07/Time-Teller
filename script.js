const url='https://stark-plateau-00189.herokuapp.com/posts'
fetch('https://stark-plateau-00189.herokuapp.com/posts')
  .then(d=>d.json())
  .then(data=>{
    document.getElementById("algo-text").innerText = `Do you know the Time Complexity of ${data[0].title} ?` 
    document.getElementById("Avg-time-complexity-text").innerText = data[0].avg_time
    document.getElementById("best-time-complexity-text").innerText = data[0].best_time
    document.getElementById("Worst-time-complexity-text").innerText = data[0].worst_time
    document.getElementById("main-container").style.visibility="visible"
  })
.catch(err => err);
document.getElementById("next").addEventListener("click", myFunction); 
function myFunction() {
    fetch(url)
    .then(result=>{
        return result.json();
    })
    .then(data=>{
      document.getElementById("algo-text").innerText = `Do you know the Time Complexity of ${data[0].title} ?` 
      document.getElementById("Avg-time-complexity-text").innerText = data[0].avg_time
      document.getElementById("best-time-complexity-text").innerText = data[0].best_time
      document.getElementById("Worst-time-complexity-text").innerText = data[0].worst_time
    })
}
