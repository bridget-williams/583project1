// Globas Variables
/* global Chart */

// client-side js

// Document Ready Function
document.addEventListener("DOMContentLoaded", function(){
  
  console.log('hello world :o');
  
  let characterName = '';
  let characterPhoto = '';
  
  //API Responses
  fetch('/characters')
    .then((resp) => resp.json())
    .then((data) => {
    console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log('Data:' + data.name);
   characterName=data.name;
    characterPhoto = data.thumbnail.path+;
    console.log(characterPhoto, characterName);


    
    console.groupEnd();
    return(data);
  });

let img = document.createElement('img');
    img.setAttribute('src', characterPhoto);
    document.getElementById('intro-section').append(img);
  
  
  
  
  // chart
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
});