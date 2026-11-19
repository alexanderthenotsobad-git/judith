import { navItems } from '../data/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark brand-mark--sm" aria-hidden="true">
            JM
          </span>
          <div>
            <strong>Judith Mitchell</strong>
            <span>Software Engineer · Los Angeles</span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer-note">
          © {new Date().getFullYear()} Judith Mitchell. Company logos are trademarks of their
          respective owners.
        </p>
      </div>
    </footer>
  )
}
