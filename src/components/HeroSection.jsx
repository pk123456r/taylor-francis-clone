import './HeroSection.css'

// A purely visual component — no state, just JSX + CSS
// Props would let a parent customise it, but here everything is hardcoded
// because the hero content never changes
function HeroSection() {
  return (
    <section className="hero">
      {/* Main content area */}
      <div className="hero__content">
        <p className="hero__eyebrow">Trusted research since 1798</p>
        <h1 className="hero__headline">
          Advancing knowledge,<br />shaping the world
        </h1>
        <p className="hero__subtext">
          Discover over 2,700 journals and 7 million articles across science,
          technology, humanities and social sciences.
        </p>

        <div className="hero__cta-group">
          <a href="#" className="hero__cta hero__cta--primary">Browse Journals</a>
          <a href="#" className="hero__cta hero__cta--secondary">Explore Books</a>
        </div>
      </div>

      {/* Stats strip at the bottom of the hero */}
      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-number">2,700+</span>
          <span className="hero__stat-label">Journals</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-number">7M+</span>
          <span className="hero__stat-label">Articles</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-number">170+</span>
          <span className="hero__stat-label">Years of publishing</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-number">170+</span>
          <span className="hero__stat-label">Countries reached</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
