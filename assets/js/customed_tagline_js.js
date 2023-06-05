var input = './taglines';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

fetch(input)
  .then(response => {
    if (!response.ok) {
      throw new Error('File not found');
    }
    return response.text();
  })
  .then(data => {
    const lines = data.split('\n');
    lines.forEach(line => {
      // Do something with each line
    //   console.log(line);
    });
    var i = getRandomInt(0, lines.length);
    var selectedline = lines[i];
    document.getElementById("taglineh2").innerHTML = selectedline;
  })
  .catch(error => {
    console.error('Error:', error);
  });
