import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SubjectGrid from './components/SubjectGrid'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <SubjectGrid />
      </main>
    </div>
  )
}

export default App
