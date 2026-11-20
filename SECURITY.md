# Security — event gap check

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Next event inside the gap | refused |
| Equal times (even gap 0) | refused |
| Gap above 86400 | refused |
| Empty list / more than 20 events | refused |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Source of times | Arguments are not block times |
| Storage | Nothing is written |
| Auth | No account signs this list |

## Attack angles

1. Presenting a client-sorted list as an on-chain sequence.  
2. Claiming gap compliance after inserting synthetic beats.  
3. Allowing multiline titles as if they were safe HTML.

## Honesty limits

No network. No wasm. [docs.wax.io](https://docs.wax.io/).
