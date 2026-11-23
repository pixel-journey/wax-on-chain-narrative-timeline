# AI handoff — narrative timeline

## Non-negotiables

1. Next `at` must be ≥ `previous + minGapSec` (inclusive boundary).
2. 100 then 130 with gap 30 → ok. 100 then 129 → inside the gap.
3. Equal times are refused even when gap is 0 (`times must increase`).
4. `minGapSec` is 0 .. **86400**. Event count is 1 .. **20**.
5. Titles are one line, trimmed length 1 .. 80.
6. The list is an argument. **Nothing is stored.**

## Prompt seeds

- "Gap 30: is 100→130 ok and 100→129 refused?"
- "Gap 0 with equal timestamps — accepted or refused?"
- "Contrast with quest-log id completion (different product)."

## Do not

- Persist events or call a chain from unit tests.
- Treat readiness on the learning-path visualizer as a time gap.
