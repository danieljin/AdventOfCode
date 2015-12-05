function runTest(testFunc, input, iterations)
{
  var start = performance.now();
  for (i = 0; i < iterations; i++)
  {
    testFunc(input);
  }
  var end = performance.now();
  return [((end - start))];
}
function runTests(tests, input, iterations)
{
  for(var i = 0; i < tests.length; i++)
  {
    var result = runTest(tests[i], input, iterations);
    console.log( "Test " + i + ": " + tests[i].name + ", " + "Avg Time: " + result[0] + " Answer: " + result[1]);
  }
}

console.log(getAnswer1(string1) == 232);
console.log(getAnswer1b(string1b) == 1783);
console.log(getAnswer2(string2) == 1586300);
console.log(getAnswer2b(string2b) == 3737498);
console.log(getAnswer3(string3) == 2081);
console.log(getAnswer3b(string3b) == 2341);
console.log(getAnswer4(string4) == 254575);
console.log(getAnswer4b(string4b) == 1038736);
