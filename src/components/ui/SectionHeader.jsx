import Reveal from './Reveal'

export default function SectionHeader({ index, eyebrow, title, children, className = '' }) {
  return (
    <div className={`section-head ${className}`.trim()}>
      <Reveal as="p" className="eyebrow">
        {index && <span className="eyebrow-num">{index}</span>}
        <span className="eyebrow-line" aria-hidden="true" />
        <span>{eyebrow}</span>
      </Reveal>
      <Reveal as="h2" className="section-title" delay={70}>
        {title}
      </Reveal>
      {children && (
        <Reveal as="p" className="lede" delay={140}>
          {children}
        </Reveal>
      )}
    </div>
  )
}
