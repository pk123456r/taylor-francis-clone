import Header from './components/Header'
import './App.css'

// App is the "root" component — it composes all other components together
function App() {
  return (
    <div className="app">
      <Header />

      {/* Placeholder — more features will fill this each day */}
      <main className="app__main">
        <p className="app__placeholder">Day 1 — Header &amp; Search built. More coming tomorrow!</p>
      </main>
    </div>
  )
}

export default App
