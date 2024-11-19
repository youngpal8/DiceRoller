document.getElementById("roll-btn").addEventListener("click", function () {
    const diceFaces = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  
    // Generate random numbers for both dice
    const randomIndex1 = Math.floor(Math.random() * 6) + 1;
    const randomIndex2 = Math.floor(Math.random() * 6) + 1;
  
    // Update the dice elements with the corresponding face
    document.getElementById("dice1").textContent = diceFaces[randomIndex1];
    document.getElementById("dice2").textContent = diceFaces[randomIndex2];
  });
  