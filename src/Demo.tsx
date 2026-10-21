"use client";

import { spaced } from "./gap";

const events = [
  { at: 100, title: "A" },
  { at: 130, title: "B" },
];

export function Demo() {
  const line = spaced(events, 30);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Thirty seconds between events</h1>
      <p className="lede">100 then 130 is kept. 129 is refused. Nothing is written on chain.</p>
      <ol>
        {events.map((event) => (
          <li key={event.at}>
            {event.at}: {event.title}
          </li>
        ))}
      </ol>
      {line.ok ? <p>{line.count} events.</p> : <p>{line.reason}</p>}
    </main>
  );
}
