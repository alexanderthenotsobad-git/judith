import { certifications, education } from '../data/profile'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { Check, GraduationCap, MapPin } from './ui/Icons'

export default function Credentials() {
  const featured = certifications.find((cert) => cert.featured)
  const rest = certifications.filter((cert) => !cert.featured)

  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Credentials"
          title={
            <>
              A foundation, <em>kept current</em>.
            </>
          }
        >
          A computer science degree from UCLA, an AWS certification, and a steady habit of learning
          in public.
        </SectionHeader>

        <div className="cred-grid">
          <Reveal className="edu-card">
            <span className="logo-tile logo-tile--lg logo-tile--ucla">
              <img src={education.logo} alt="UCLA Bruins logo" className="is-cover" loading="lazy" />
            </span>

            <div className="edu-copy">
              <span className="card-eyebrow">
                <GraduationCap size={14} />
                Education
              </span>
              <h3 className="edu-school">{education.school}</h3>
              <p className="edu-degree">
                {education.degree} · <strong>{education.field}</strong>
              </p>
              <p className="edu-meta">
                <span>{education.years}</span>
                <span className="meta-dot" aria-hidden="true" />
                <span>
                  <MapPin size={13} />
                  {education.location}
                </span>
              </p>

              <ul className="edu-highlights">
                {education.highlights.map((item) => (
                  <li key={item}>
                    <Check size={13} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {featured && (
            <Reveal className="cert-feature" delay={90}>
              <div className="cert-feature-top">
                <span className="logo-tile logo-tile--aws">
                  <img src={featured.logo} alt="Amazon Web Services logo" className="is-cover" loading="lazy" />
                </span>
                <span className="status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  Active certification
                </span>
              </div>

              <div className="cert-feature-copy">
                <span className="card-eyebrow">Amazon Web Services</span>
                <h3 className="cert-feature-name">{featured.name}</h3>
                <p className="cert-feature-meta">
                  Issued {featured.issued} <span aria-hidden="true">·</span> Valid through{' '}
                  {featured.expires}
                </p>
                <div className="cert-feature-foot">
                  <span className="tag">{featured.skill}</span>
                  <span className="cert-id">Credential listed on LinkedIn</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <div className="cert-row">
          {rest.map((cert, index) => (
            <Reveal className="cert-card" key={cert.name} delay={index * 70}>
              <span className="logo-tile cert-logo">
                {cert.monogram ? (
                  <span className="cert-mono" aria-hidden="true">
                    {cert.monogram}
                  </span>
                ) : (
                  <img src={cert.logo} alt="" loading="lazy" />
                )}
              </span>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-meta">
                {cert.issuer}
                <span className="cert-date">{cert.issued}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
