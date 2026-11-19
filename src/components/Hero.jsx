import { images, profile } from '../data/profile'
import Reveal from './ui/Reveal'
import { ArrowDown, Cloud, LinkedIn, MapPin, Sparkle, Users } from './ui/Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-aura" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            <span className="hero-eyebrow-text">Software Engineer at 3M</span>
            <span className="hero-eyebrow-sep" aria-hidden="true">
              /
            </span>
            <span className="hero-eyebrow-text hero-eyebrow-text--alt">AWS community lead</span>
          </Reveal>

          <Reveal as="h1" className="hero-title" delay={80}>
            <span className="hero-first">Judith</span>{' '}
            <span className="hero-last">Mitchell</span>
          </Reveal>

          <Reveal as="p" className="hero-lead" delay={160}>
            {profile.heroLead}
          </Reveal>

          <Reveal className="hero-meta" delay={220}>
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <span>
              <Cloud size={16} />
              AWS Los Angeles User Group Lead
            </span>
          </Reveal>

          <Reveal className="hero-actions" delay={280}>
            <a href="#experience" className="btn btn-primary">
              Explore my work
              <ArrowDown size={17} />
            </a>
            <a
              href={profile.links.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn size={17} />
              Connect on LinkedIn
            </a>
          </Reveal>

          <Reveal className="hero-footnote" delay={340}>
            <span>AWS Certified Cloud Practitioner</span>
            <span>AISES</span>
            <span>UCLA Bruin</span>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={180}>
          <div className="portrait-stage">
            <div className="portrait-aura" aria-hidden="true" />
            <div className="portrait-ring" aria-hidden="true" />
            <figure className="portrait-frame">
              <img
                src={images.portrait}
                alt="Portrait of Judith Mitchell smiling in a black blazer"
                width="600"
                height="600"
                fetchPriority="high"
                decoding="async"
              />
            </figure>

            <div className="float-card float-card--cert">
              <span className="float-logo">
                <img src={images.logoAws} alt="" width="640" height="385" loading="lazy" />
              </span>
              <span className="float-copy">
                <span className="float-kicker">Certified</span>
                <strong>Cloud Practitioner</strong>
              </span>
            </div>

            <div className="float-card float-card--stat">
              <Sparkle size={18} className="float-spark" />
              <span className="float-copy">
                <strong className="float-big">255K+</strong>
                <span>events a day on Kafka</span>
              </span>
            </div>

            <div className="float-card float-card--community">
              <Users size={18} />
              <span className="float-copy">
                <strong>AWS Builders LA</strong>
                <span>User Group Lead</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
