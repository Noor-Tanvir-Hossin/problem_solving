// How do you find the key with the highest value in an object?

function findTopScorer(scores) {
    let max = -Infinity;
    let topScorer = null;
  
    for (const name in scores) {
      if (scores[name] > max) {
        max = scores[name];
        topScorer = name;
      }
    }
  
    return topScorer;
  }
  
  const scores = {
    Tanvir: 70,
    Robin: 95,
    Noor: 85
  };
  
  console.log(findTopScorer(scores)); 
  