import { ATOMIC_ORIGIN } from "./api";
import { spaced } from "./gap";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const line = spaced(
  [
    { at: 100, title: "A" },
    { at: 130, title: "B" },
  ],
  30,
);
if (!line.ok) throw new Error(line.reason);
const events = line;

export const USE_CASES: UseCase[] = [
  {
    title: "A template is not an event time",
    detail: `${events.count} events, 30 seconds apart. 129 would be refused. The template request is not sent.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/templates/pixeljourney/1`, executed: false },
    transaction: null,
  },
  {
    title: "An asset is not a gap",
    detail: "No narrative action is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (events.count !== 2) throw new Error("gap");
}
