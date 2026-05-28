import './SubjectCard.css'

// Props are passed in like HTML attributes: <SubjectCard icon="🧬" title="Life Sciences" count={120000} />
// We destructure them directly in the function signature — cleaner than writing props.icon, props.title, etc.
function SubjectCard({ icon, title, count }) {
  return (
    <a href="#" className="subject-card">
      <span className="subject-card__icon">{icon}</span>
      <h3 className="subject-card__title">{title}</h3>
      <p className="subject-card__count">{count.toLocaleString()} articles</p>
    </a>
  )
}

export default SubjectCard
