# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log) | Id completion (different product) |
| [learning path](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer) | Prerequisite graph |

## Product facts locked by tests

- Next `at` must be ≥ `previous + minGapSec` (inclusive boundary).
- 100 then 130 with gap 30 → ok. 100 then 129 → inside the gap.
- Equal times refused even when gap is 0 (`times must increase`).
- `minGapSec` is 0 .. **86400**. Event count is 1 .. **20**.
- Titles are one line, trimmed length 1 .. 80.
- The list is an argument. **Nothing is stored.**
