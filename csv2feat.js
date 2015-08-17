require('./catchUnhandledPromiseRejections');

import fs from 'fs';
import csv from 'csv';
import WordFreq from 'wordfreq';
import path from 'path';

const wordfreqOption = {
  minimumCount: 1, maxiumPhraseLength: 3, filterSubstring: false
};

var inName = process.argv[2];

csv.parse(fs.readFileSync(inName, {encoding: 'utf-8'}), (err, rows) => {
  var processedRows = rows.map(row => {
    var content = row.slice(0, 6).concat(row[9]).join(' '),
        ngramArr = WordFreq(wordfreqOption).process(content),
        ngram = {};

    ngramArr.forEach(gram => {ngram[gram[0]] = +gram[1];});

    return {
      id: `${row[6]}(${parseFloat(row[7]).toFixed(0)},${parseFloat(row[7]).toFixed(0)})`,
      length: Math.sqrt(ngramArr.reduce((sum, gram) => sum + gram[1]*gram[1], 0)),
      count: ngramArr.length,
      content, ngram
    };
  });

  fs.writeFile(`feat/${path.basename(inName, '.csv')}.ngram.json`,
    JSON.stringify(processedRows, null, '  '));
});

