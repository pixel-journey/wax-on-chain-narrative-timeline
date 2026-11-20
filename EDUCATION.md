# Education — the gap is inclusive

> **Rung:** `npm test` passes. The list is an argument. Nothing is stored.  
> **The test is the rule.** Official context: [docs.wax.io](https://docs.wax.io/).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Show that 100 then 130 passes a gap of 30, and 129 fails |
| Intermediate | Explain gap 0 still refuses ties, and title bounds |
| Masterclass | Refuse to call this a Hyperion timeline |

---

## Beginner — one scene

A gap of 30 seconds means the next `at` must be at least `previous + 30`.

| Call | Locked result |
| --- | --- |
| times `100` then `130`, gap `30` | ok, count `2` |
| times `100` then `129`, gap `30` | not ok. Reason: `the next event is inside the gap` |
| the same time twice, gap `0` | not ok. Reason: `times must increase`. A gap of 0 still refuses a tie. |
| gap `86401` | not ok. The maximum gap is `86400`. |
| an empty list | not ok. Pass 1 to 20 events. |

```bash
npm test
```

---

## Intermediate — bounds

| Input | Rule |
| --- | --- |
| `minGapSec` | integer 0 .. 86400 |
| event count | 1 .. 20 |
| `at` | non-negative integer |
| `title` | trimmed length 1 .. 80, no newline |

The check is **inclusive of the gap**: next must be ≥ previous + gap. At the exact boundary (100 + 30 = 130) the second event is allowed.

Equal times always fail. When the gap is 0, the reason is `times must increase`. When the gap is positive, an equal time fails as inside the gap.

Titles are trimmed. A blank title after trim is refused.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Half-open gap rejecting exact boundary | exact previous+gap is **ok** |
| Gap 0 same second | `times must increase` |
| 21 events | refused |
| Blank title | refused |

---

## Masterclass

### Common mistakes

1. Treating this as a stored chain log. The list is an argument; nothing is written.  
2. Using a half-open gap that rejects the exact `previous + gap` boundary.  
3. Allowing two events at the same second when the product said "gap zero means back-to-back." Here gap zero still demands a strict increase.  
4. Fetching Hyperion actions and citing this file as the query.

### Exercises

1. Gap 30, times 100 and 130 — ok? (**Yes**.)  
2. Gap 0, times 50 and 50 — reason? (`times must increase`.)  
3. Does a 21-event list succeed? (**No**.)

---

## What this course will not teach

- Hyperion or history API calls
- Persistence of beats
- That a title is an Antelope memo
