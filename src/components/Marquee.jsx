import { skillGroups } from '../data/profile'
import { Sparkle } from './ui/Icons'

export default function Marquee() {
  const items = skillGroups.marquee

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {items.map((item) => (
              <span className="marquee-item" key={`${copy}-${item}`}>
                {item}
                <Sparkle size={11} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
