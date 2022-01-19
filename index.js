import { program } from "commander";

import { replace, sortArray } from "./utils.js";

program
  .option("-t, --task <task>", "task number")
  .option("-w, --words [words...]", "array of words");

program.parse(process.argv);

const options = program.opts();

if (!options.task || options.task === "1") {
  if (options.words) {
      const answer = replace(options.words);
      console.log(` ${options.words} => ${answer}`);
  } else {
    const answer1 = replace(["abracadabra", "allottee", "assessee"]);
    console.log(
      answer1.join("") === ["abracadabra", "alote", "asese"].join("")
    );

    const answer2 = replace([
      "ccooddddddewwwaaaaarrrrsssss",
      "piccaninny",
      "hubbubbubboo",
    ]);
    console.log(
      answer2.join("") === ["codewars", "picaniny", "hubububo"].join("")
    );

    const answer3 = replace(["abracadabra", "allottee", "assessee"]);
    console.log(
      answer3.join("") === ["abracadabra", "alote", "asese"].join("")
    );

    const answer4 = replace(["kelless", "keenness"]);
    console.log(answer4.join("") === ["keles", "kenes"].join(""));

    const answer5 = replace(["adanac", "soonness", "toolless", "ppellee"]);
    console.log(
      answer5.join("") === ["adanac", "sones", "toles", "pele"].join("")
    );

    const answer6 = replace(["callalloo", "feelless", "heelless"]);
    console.log(answer6.join("") === ["calalo", "feles", "heles"].join(""));

    const answer7 = replace(["kelless", "voorraaddoosspullen", "achcha"]);
    console.log(
      answer7.join("") === ["keles", "voradospulen", "achcha"].join("")
    );
  }
} else if (options.task === '2') {
  if (options.words) {
    const sortedArray = sortArray(options.words);
    console.log(sortedArray); 
  } else {
    const answer1 = sortArray([7, 1]);
    console.log('[7, 1] => ', answer1);

    const answer2 = sortArray([5, 8, 6, 3, 4]);
    console.log('[5, 8, 6, 3, 4] => ', answer2);

    const answer3 = sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    console.log('[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => ', answer3);
  }
}
