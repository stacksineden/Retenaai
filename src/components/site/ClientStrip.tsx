import { clients } from "../../content";

/**
 * Businesses we've worked with, as names.
 *
 * Set as type, not as logos: we don't have their logo files, and a wordmark we
 * set ourselves isn't their mark. Names carry the proof on their own.
 *
 * Renders nothing when no client is published.
 */
export function ClientStrip({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  if (clients.length === 0) return null;

  return (
    <div className={className}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/40">
          {label}
        </p>
      )}
      <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
        {clients.map((client) => (
          <li
            key={client.name}
            className="font-display text-lg font-semibold tracking-tight text-navy/45 sm:text-xl"
          >
            {client.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
