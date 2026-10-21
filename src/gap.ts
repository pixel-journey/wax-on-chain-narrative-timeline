/**
 * Events whose times increase by at least a gap.
 * The list is an argument. Nothing is stored.
 */

export type Beat = { at: number; title: string };

export function spaced(events: readonly Beat[], minGapSec: number): { ok: false; reason: string } | { ok: true; count: number } {
  if (!Number.isInteger(minGapSec) || minGapSec < 0 || minGapSec > 86_400) return { ok: false, reason: "minGapSec must be an integer from 0 to 86400" };
  if (events.length < 1 || events.length > 20) return { ok: false, reason: "pass 1 to 20 events" };
  let previous = -1;
  for (const event of events) {
    if (!Number.isInteger(event.at) || event.at < 0) return { ok: false, reason: "at must be a non-negative integer" };
    if (previous >= 0 && event.at < previous + minGapSec) return { ok: false, reason: "the next event is inside the gap" };
    if (previous >= 0 && event.at === previous && minGapSec === 0) return { ok: false, reason: "times must increase" };
    const title = event.title.trim();
    if (title.length < 1 || title.length > 80 || title.includes("\n")) return { ok: false, reason: "title must be one line of 1 to 80 characters" };
    previous = event.at;
  }
  return { ok: true, count: events.length };
}
