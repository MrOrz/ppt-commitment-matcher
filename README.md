ppt-commitment-matcher
======================

Produces similarity matrix for all commitment pairs between two parsed progress report.

Install
-------
No node package available. Just clone it.

After cloning, add `data/` and `feat/` under the project directory.


Usage
-----

```
$ npm run feat <parsed_progress_report.csv>
```

Extracts features from `parsed_progress_report.csv` and write to `feat/parsed_progress_report.ngram.json`.

```
$ npm run cross <feature_file1> <feature_file2>
```

Generates similarity matrix of the two feature files. Writes to `data/feature_file1-feature_file2.csv`.

