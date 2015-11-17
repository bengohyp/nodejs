function DFA_membership(n, rules, F, W) {
  var currentState;
    var result = new Array(W.length);
    for (var a = 0; a < result.length; a += 1) {
      result[a] = false;
    }
    for (var i = 0; i < W.length; i += 1) {
        currentState = 0;
        var inputSteps = W[i].split("");
        for (var j = 0; j < inputSteps.length; j += 1) {
            if (inputSteps[j] === "a") {
                currentState = rules[currentState][0];
            } else {
                currentState = rules[currentState][1];
            }
        }
        for (var k = 0; k < F.length; k += 1) {
            if (F[k] === currentState) {
                result[i] = true;
            }
        }
    }
  return result;
}

console.log(DFA_membership(4, [[3,2],[0,3],[0,1],[3,3]],[1,2],["b", "bb", "bbab", "bbb", "ab", "baba"]));