import { profile, skillGroups, stats } from '../data/profile'
import AnimatedNumber from './ui/AnimatedNumber'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { Cloud, Compass, Sparkle, Stream, Users } from './ui/Icons'

const focusIcons = {
  cloud: Cloud,
  stream: Stream,
  compass: Compass,
  spark: Sparkle,
  users: Users,
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              Enterprise systems, <em>human</em> connections.
            </>
          }
        >
          A software engineer who lives in the seams between platforms — and spends just as much
          energy on the people around them.
        </SectionHeader>

        <div className="about-grid">
          <div className="about-story">
            {profile.about.map((paragraph, index) => (
              <Reveal as="p" className="body-lg" key={paragraph} delay={index * 70}>
                {paragraph}
              </Reveal>
            ))}

            <Reveal className="quote-card" delay={180}>
              <span className="quote-glyph" aria-hidden="true">
                &ldquo;
              </span>
              <p>{profile.quote}</p>
              <cite>{profile.quoteAttribution}</cite>
            </Reveal>
          </div>

          <div className="focus-list">
            {skillGroups.about.map((focus, index) => {
              const Icon = focusIcons[focus.icon] ?? Sparkle
              return (
                <Reveal className="focus-item" key={focus.title} delay={index * 80}>
                  <span className="focus-icon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{focus.title}</h3>
                    <p>{focus.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <div className="stats">
          {stats.map((stat, index) => (
            <Reveal className="stat" key={stat.label} delay={index * 80}>
              <span className="stat-value">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
