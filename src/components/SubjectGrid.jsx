import SubjectCard from './SubjectCard'
import './SubjectGrid.css'

// Data lives outside the component — it never changes, so no need for useState
const subjects = [
  { id: 1, icon: '🧬', title: 'Life Sciences',              count: 320000 },
  { id: 2, icon: '⚗️',  title: 'Chemistry',                 count: 185000 },
  { id: 3, icon: '⚙️',  title: 'Engineering & Technology',  count: 410000 },
  { id: 4, icon: '📐',  title: 'Mathematics & Statistics',  count: 98000  },
  { id: 5, icon: '🌍',  title: 'Earth & Environment',       count: 143000 },
  { id: 6, icon: '🏥',  title: 'Medicine & Healthcare',     count: 530000 },
  { id: 7, icon: '🧠',  title: 'Social Sciences',           count: 275000 },
  { id: 8, icon: '📖',  title: 'Humanities & Arts',         count: 162000 },
]

function SubjectGrid() {
  return (
    <section className="subject-grid">
      <div className="subject-grid__header">
        <h2 className="subject-grid__title">Browse by Subject</h2>
        <p className="subject-grid__subtitle">
          Explore peer-reviewed research across every major discipline
        </p>
      </div>

      {/* .map() turns each object in the array into a SubjectCard component */}
      {/* key= is required by React to track which card is which in the list */}
      <div className="subject-grid__cards">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            icon={subject.icon}
            title={subject.title}
            count={subject.count}
          />
        ))}
      </div>
    </section>
  )
}

export default SubjectGrid
