import { community, images } from '../data/profile'
import Reveal from './ui/Reveal'
import SectionHeader from './ui/SectionHeader'
import { useLightbox } from './ui/Lightbox'
import { Check, Cloud, Expand, Sparkle, Trophy, Users } from './ui/Icons'

export default function Community() {
  const openLightbox = useLightbox()
  const { aws, aises } = community

  return (
    <section id="community" className="section community">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Community"
          title={
            <>
              Building the community, <em>not just</em> the cloud.
            </>
          }
        >
          Cloud skills grow faster when they are shared. Here is where I show up for the LA tech
          community — and for Indigenous students building STEM careers.
        </SectionHeader>

        <Reveal className="aws-feature">
          <div className="aws-copy">
            <span className="community-eyebrow">
              <Cloud size={16} />
              {aws.eyebrow}
              <span className="pill-role">{aws.role}</span>
            </span>

            <div className="aws-head">
              <span className="logo-tile logo-tile--builders">
                <img src={aws.logo} alt={aws.logoAlt} loading="lazy" />
              </span>
              <div className="aws-head-text">
                <h3 className="community-title">{aws.title}</h3>
                <p className="community-alias">{aws.alias}</p>
              </div>
            </div>

            <p className="community-body community-body--lead">{aws.lead}</p>

            <div className="group-about">
              <span className="group-about-label">About the group</span>
              <p>{aws.aboutUs}</p>
            </div>

            <ul className="check-list">
              {aws.highlights.map((highlight) => (
                <li key={highlight}>
                  <span className="check-icon">
                    <Check size={13} />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <blockquote className="mini-quote">
              <p>{aws.quote}</p>
              <cite>Judith Mitchell</cite>
            </blockquote>
          </div>

          <div className="aws-media">
            {aws.photos.map((photo) => (
              <button
                type="button"
                className="photo-tile"
                key={photo.src}
                onClick={() => openLightbox(photo)}
                aria-label={`Expand photo: ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="photo-caption">
                  <span>{photo.caption}</span>
                  <Expand size={15} />
                </span>
              </button>
            ))}
            <span className="media-badge">
              <Users size={14} />
              LA AWS community
            </span>
          </div>
        </Reveal>

        <Reveal className="aises-card">
          <div className="aises-copy">
            <div className="aises-head">
              <span className="logo-tile logo-tile--aises">
                <img src={images.logoAises} alt="" aria-hidden="true" />
              </span>
              <div>
                <span className="community-eyebrow">
                  <Sparkle size={13} />
                  {aises.eyebrow}
                </span>
                <h3 className="community-title community-title--sm">{aises.title}</h3>
                <p className="community-alias">{aises.fullName}</p>
              </div>
            </div>

            <p className="definition">{aises.definition}</p>

            {aises.paragraphs.map((paragraph) => (
              <p className="community-body" key={paragraph}>
                {paragraph}
              </p>
            ))}

            <div className="award">
              <span className="award-icon">
                <Trophy size={20} />
              </span>
              <div className="award-copy">
                <strong>{aises.award.title}</strong>
                <span>{aises.award.detail}</span>
              </div>
            </div>
          </div>

          <div className="aises-media">
            <button
              type="button"
              className="photo-tile photo-tile--tall"
              onClick={() => openLightbox(aises.photo)}
              aria-label={`Expand photo: ${aises.photo.caption}`}
            >
              <img
                src={aises.photo.src}
                alt={aises.photo.alt}
                width="800"
                height="533"
                loading="lazy"
                decoding="async"
              />
              <span className="photo-caption">
                <span>{aises.photo.caption}</span>
                <Expand size={15} />
              </span>
            </button>

            <div className="aises-stat">
              <strong>{aises.stat.value}</strong>
              <span>{aises.stat.label}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
