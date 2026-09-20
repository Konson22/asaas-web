import type { Topology } from '@/lib/pricingPath'

/**
 * Small node-and-line diagrams standing in for each deployment option's actual network
 * topology (single machine, LAN server + clients, desktop syncing to the cloud, dedicated
 * multi-node infrastructure) — the real thing that tells these options apart, ahead of the
 * price or the feature list.
 */
export function DeploymentTopology({ topology, className }: { topology: Topology; className?: string }) {
  return (
    <svg viewBox="0 0 200 64" className={className} aria-hidden="true">
      {topology === 'cloud' ? (
        <>
          <path
            d="M70 38a14 14 0 0114-14 16 16 0 0131 3 12 12 0 01-2 24H74a12 12 0 01-4-13z"
            fill="none"
            className="stroke-primary"
            strokeWidth={1.5}
          />
          <circle cx="30" cy="16" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <circle cx="30" cy="48" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <circle cx="168" cy="32" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <line x1="35" y1="18" x2="72" y2="30" className="stroke-cyan" strokeDasharray="3 3" strokeWidth={1.4} />
          <line x1="35" y1="46" x2="72" y2="36" className="stroke-cyan" strokeDasharray="3 3" strokeWidth={1.4} />
          <line x1="163" y1="32" x2="128" y2="32" className="stroke-cyan" strokeDasharray="3 3" strokeWidth={1.4} />
        </>
      ) : null}

      {topology === 'single' ? <circle cx="100" cy="32" r="9" className="fill-primary" /> : null}

      {topology === 'sync' ? (
        <>
          <rect x="86" y="34" width="28" height="18" rx="2" className="fill-none stroke-primary" strokeWidth={1.5} />
          <path
            d="M92 22a10 10 0 0110-9 11 11 0 0110 6 8 8 0 01-1 16H96a7 7 0 01-4-13z"
            className="fill-none stroke-border"
            strokeWidth={1.4}
          />
          <line x1="100" y1="34" x2="100" y2="24" className="stroke-cyan" strokeDasharray="2 3" strokeWidth={1.6} />
        </>
      ) : null}

      {topology === 'server' ? (
        <>
          <rect x="88" y="22" width="24" height="20" rx="2" className="fill-primary" />
          <line x1="92" y1="27" x2="108" y2="27" className="stroke-white" strokeWidth={1.2} />
          <line x1="92" y1="32" x2="108" y2="32" className="stroke-white" strokeWidth={1.2} />
          <circle cx="34" cy="14" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <circle cx="34" cy="50" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <circle cx="166" cy="32" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <line x1="39" y1="16" x2="86" y2="26" className="stroke-primary/60" strokeWidth={1.4} />
          <line x1="39" y1="48" x2="86" y2="38" className="stroke-primary/60" strokeWidth={1.4} />
          <line x1="112" y1="32" x2="161" y2="32" className="stroke-primary/60" strokeWidth={1.4} />
        </>
      ) : null}

      {topology === 'enterprise' ? (
        <>
          <rect x="58" y="24" width="16" height="16" rx="2" className="fill-primary" />
          <rect x="80" y="24" width="16" height="16" rx="2" className="fill-primary" />
          <path
            d="M126 30a12 12 0 0112-11 13 13 0 0112 8 9 9 0 01-2 18h-20a8 8 0 01-2-15z"
            className="fill-none stroke-cyan"
            strokeWidth={1.5}
          />
          <circle cx="150" cy="50" r="5" className="fill-none stroke-border" strokeWidth={1.4} />
          <line x1="97" y1="30" x2="126" y2="26" className="stroke-primary/60" strokeWidth={1.4} />
          <line x1="97" y1="36" x2="146" y2="47" className="stroke-primary/60" strokeWidth={1.4} strokeDasharray="3 3" />
        </>
      ) : null}
    </svg>
  )
}
