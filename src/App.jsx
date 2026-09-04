import { useState, useCallback, useEffect } from 'react'
import Loading from './components/Loading'
import SecurityGuard from './components/SecurityGuard'
import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CreativeExpressions from './components/CreativeExpressions'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onPageShow = () => window.scrollTo(0, 0)
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {loading && <Loading onComplete={handleLoadingComplete} />}
      <SecurityGuard />
      <Header />
      <main id="top" className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Metrics />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <CreativeExpressions />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
