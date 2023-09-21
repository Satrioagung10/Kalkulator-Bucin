function calculate() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore);
    if (loveScore >= 90) {
      document.getElementById("result").innerHTML = " Kamu " + name1 + " dan pasangan mu " + name2 + " couple goals ";
    } else if (loveScore >= 70) {
      document.getElementById("result").innerHTML = " Kamu " + name1 + " dan pasangan mu " + name2 + " cocok banget ";
    } else if (loveScore >= 50) {
      document.getElementById("result").innerHTML = " Kamu " + name1 + " dan pasangan mu " + name2 + " kurang PDKT ";
    } else {
      document.getElementById("result").innerHTML = " Kamu " + name1 + " dan pasangan mu " + name2 + " masih asing ";
    }

    newFunction();

    function newFunction() {
        document.getElementById("results").innerHTML = loveScore + "%";
    }
  }