const { plot } = require("plot");
require("@plotex/render-image");
const natural = require('natural');

let stem;
let text;

text = "one one one one two two two thee thee four four four four four four";

stem = natural.PorterStemmer.tokenizeAndStem(text);

getWordCount = (stem) => {
  let map = {};
  for (let i = 0; i < stem.length; i++) {
    let item = stem[i];
    map[item] = (map[item] + 1) || 1;
  }
  return map;
}
var groupStem = [getWordCount(stem)];
//console.log(groupStem);
const data = [...groupStem];
const chartConfig = {
  chartType: "histogram",
  x: "test",
  y: "test1",
  dataLabels: 1,
};
console.log(data);
plot(data, chartConfig).renderImage("my-chart.png");
