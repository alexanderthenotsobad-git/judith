import { profile } from '../data/profile'
import Reveal from './ui/Reveal'
import { ArrowUp, ArrowUpRight, LinkedIn, Sparkle } from './ui/Icons'

export default function Contact() {
  return (
    <section className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <span className="contact-mark" aria-hidden="true">
            JM
          </span>

          <p className="eyebrow eyebrow--center">
            <Sparkle size={12} />
            Let&rsquo;s connect
          </p>

          <h2 id="contact-title" className="contact-title">
            Good systems start with <em>good conversations</em>.
          </h2>

          <p className="contact-body">
            Whether it&rsquo;s AWS architecture, Kafka, enterprise integrations, or building a
            stronger tech community in Los Angeles — I&rsquo;m always glad to talk.
          </p>

          <div className="contact-actions">
            <a
              className="btn btn-dark"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn size={17} />
              Connect on LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-ghost" href="#top">
              Back to top
              <ArrowUp size={16} />
            </a>
          </div>

          <p className="contact-note">Find me at the next AWS Los Angeles user group meetup.</p>
        </Reveal>
      </div>
    </section>
  )
}
