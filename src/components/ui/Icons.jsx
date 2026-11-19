const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

function Icon({ children, size = 20, className, ...rest }) {
  return (
    <svg {...svgProps} width={size} height={size} className={className} {...rest}>
      {children}
    </svg>
  )
}

export const ArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
)

export const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M4 12h15m0 0-6-6m6 6-6 6" />
  </Icon>
)

export const ArrowDown = (p) => (
  <Icon {...p}>
    <path d="M12 4v15m0 0 6-6m-6 6-6-6" />
  </Icon>
)

export const ArrowUp = (p) => (
  <Icon {...p}>
    <path d="M12 20V5m0 0 6 6m-6-6-6 6" />
  </Icon>
)

export const Sparkle = ({ size = 16, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
    <path d="M12 1.8l2.35 6.85L21.2 11l-6.85 2.35L12 20.2l-2.35-6.85L2.8 11l6.85-2.35L12 1.8Z" />
  </svg>
)

export const Cloud = (p) => (
  <Icon {...p}>
    <path d="M17.4 19H7.2a4.2 4.2 0 0 1-.6-8.36A6.2 6.2 0 0 1 18.2 11.3 3.9 3.9 0 0 1 17.4 19Z" />
  </Icon>
)

export const Stream = (p) => (
  <Icon {...p}>
    <path d="M3 8.5c3 0 3 2 6 2s3-2 6-2 3 2 6 2M3 15.5c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
  </Icon>
)

export const Compass = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m16.2 7.8-2.4 6-6 2.4 2.4-6 6-2.4Z" />
  </Icon>
)

export const Shield = (p) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.2 3 7.4 7 9 4-1.6 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2.1 2.1L15.4 10" />
  </Icon>
)

export const Database = (p) => (
  <Icon {...p}>
    <ellipse cx="12" cy="6" rx="7.5" ry="3" />
    <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
  </Icon>
)

export const Code = (p) => (
  <Icon {...p}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </Icon>
)

export const MapPin = (p) => (
  <Icon {...p}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Icon>
)

export const Calendar = (p) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 10.5h17" />
  </Icon>
)

export const Trophy = (p) => (
  <Icon {...p}>
    <path d="M8 21h8M12 16.5V21M7 4h10v4.5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4.2v1.8A3.2 3.2 0 0 0 7.4 11M17 6h2.8v1.8A3.2 3.2 0 0 1 16.6 11" />
  </Icon>
)

export const Users = (p) => (
  <Icon {...p}>
    <path d="M15.5 19.5V18a3.5 3.5 0 0 0-3.5-3.5H7.5A3.5 3.5 0 0 0 4 18v1.5" />
    <circle cx="9.7" cy="8" r="3.2" />
    <path d="M20 19.5V18a3.5 3.5 0 0 0-2.6-3.4M15.4 5.1a3.2 3.2 0 0 1 0 5.9" />
  </Icon>
)

export const Check = (p) => (
  <Icon {...p}>
    <path d="m5 12.5 4.3 4.3L19 7" />
  </Icon>
)

export const X = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
)

export const Menu = (p) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const ExternalLink = (p) => (
  <Icon {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
  </Icon>
)

export const Expand = (p) => (
  <Icon {...p}>
    <path d="M9 3H3v6M15 21h6v-6M21 3l-7.5 7.5M3 21l7.5-7.5" />
  </Icon>
)

export const GraduationCap = (p) => (
  <Icon {...p}>
    <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
    <path d="M6.5 11v4.7c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11M21.5 9v5" />
  </Icon>
)

export const Briefcase = (p) => (
  <Icon {...p}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="3" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12h18M10.5 12v2h3v-2" />
  </Icon>
)

export const LinkedIn = ({ size = 18, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.28 2.37 4.28 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)
