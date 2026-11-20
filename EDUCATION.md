# Education — the gap is inclusive

> **Rung:** `npm test` passes. The list is an argument. Nothing is stored.  
> **The test is the rule.**

## Predict, then run

A gap of 30 seconds means the next `at` must be at least `previous + 30`.

| Call | Locked result |
| --- | --- |
| times `100` then `130`, gap `30` | ok, count `2` |
| times `100` then `129`, gap `30` | not ok. Reason: `the next event is inside the gap` |
| the same time twice, gap `0` | not ok. Reason: `times must increase`. A gap of 0 still refuses a tie. |
| gap `86401` | not ok. The maximum gap is `86400`. |
| an empty list | not ok. Pass 1 to 20 events. |
