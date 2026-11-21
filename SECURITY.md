# Security — event gap check

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Next event inside the gap | refused |
| Equal times (even gap 0) | refused (`times must increase`) |
| Exact boundary `previous + gap` | **ok** (inclusive) |
| Gap above **86400** | refused |
| Empty list / more than **20** events | refused |
| Blank / multiline title | refused |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Source of times | Arguments are not block times |
| Storage | Nothing is written |
| Auth | No account signs this list |
| HTML titles | Not sanitized for display |

## Attack angles

1. Presenting a client-sorted list as an on-chain sequence.  
2. Claiming gap compliance after inserting synthetic beats.  
3. Allowing multiline titles as if they were safe HTML.  
4. Using a half-open gap that rejects the exact boundary.  
5. Citing this file as a Hyperion query result.

## Honesty limits

No network. No wasm. No persistence.

| Sibling | Distinction |
| --- | --- |
| [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log) | Id append, hard stop 20 |
| [learning path](https://github.com/pixel-journey/wax-on-chain-learning-path-visualizer) | Prerequisite graph |

[docs.wax.io](https://docs.wax.io/).
