import { experience } from '../data/profile'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { MapPin } from './ui/Icons'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title={
            <>
              Integrations that <em>hold up</em>.
            </>
          }
        >
          From enterprise APIs and Kafka pipelines at 3M to recruitment and tutoring programs at
          UCLA.
        </SectionHeader>

        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal
              className={`exp-item ${job.current ? 'is-current' : ''}`}
              key={job.id}
              delay={Math.min(index * 60, 180)}
            >
              <span className="exp-logo">
                <img
                  src={job.logo}
                  alt={job.logoAlt}
                  className={`is-${job.logoFit}`}
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <article className="exp-card">
                <header className="exp-top">
                  <div className="exp-heading">
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-org">
                      {job.company}
                      <span className="exp-type"> · {job.type}</span>
                    </p>
                  </div>

                  <div className="exp-when">
                    {job.current && <span className="pill-current">Current</span>}
                    <span className="exp-dates">
                      {job.period} <span className="exp-duration">· {job.duration}</span>
                    </span>
                    <span className="exp-loc">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </header>

                <ul className="exp-ul">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <ul className="tags" aria-label={`Skills used as ${job.role}`}>
                  {job.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
