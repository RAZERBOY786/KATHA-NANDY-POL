import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import FairyLights from './FairyLights'
import { contact } from '../utils/contact'

function protectImage(img) {
  const block = (e) => e.preventDefault()

  const handlers = [
    ['contextmenu', block],
    ['dragstart', (e) => {
      e.preventDefault()
      e.dataTransfer.setData('text/plain', '') 
    }],
    ['drop', (e) => {
      e.preventDefault()
    }],
    ['copy', (e) => {
      e.preventDefault()
    }],
    ['cut', (e) => {
      e.preventDefault()
    }],
    ['save', (e) => {
      e.preventDefault()
    }],
  ]

  handlers.forEach(([type, fn]) => img.addEventListener(type, fn))

  img.addEventListener('selectstart', block)

  return () => {
    handlers.forEach(([type, fn]) => img.removeEventListener(type, fn))
    img.removeEventListener('selectstart', block)
  }
}

function holdImg(img) {
  if (!img) return

  const onKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'c', 'u'].includes(String(e.key).toLowerCase())) {
      e.preventDefault()
    }
  }
  window.addEventListener('keydown', onKeyDown)
  return () => window.removeEventListener('keydown', onKeyDown)
}

export default function Hero() {
  const imgRef = useRef(null)
  const { email, phone } = contact

  useEffect(() => {
    const cleanupProtect = protectImage(imgRef.current)
    const cleanupHold = holdImg(imgRef.current)
    return () => {
      if (cleanupProtect) cleanupProtect()
      if (cleanupHold) cleanupHold()
    }
  }, [])
  return (
    <section className="relative w-full overflow-hidden scroll-mt-20" id="about">
      <FairyLights />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary-fixed/25 via-secondary-fixed/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-48 right-12 w-80 h-80 bg-primary-container/10 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-8 pb-12 sm:pb-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <Reveal animation="left" className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-[11px] uppercase tracking-[0.12em] shadow-sm mb-6">
              <span className="text-primary-container">&#10022;</span>
              <span className="whitespace-nowrap">Choreographing Code &amp; Secure Architecture</span>
            </div>

            <span className="font-label-lg text-[11px] sm:text-[13px] uppercase tracking-[0.08em] text-secondary font-semibold mb-1">
              Software Engineer &amp; Data Analytics 
            </span>

            <h1 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mb-4">
              Harmonizing <span className="font-display-hero italic font-normal text-[40px] leading-[48px] sm:text-[64px] sm:leading-[72px] tracking-[-0.02em] text-primary-container">algorithmic</span> precision with choreographic grace.
            </h1>

            <p className="font-body-lg text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] tracking-[-0.005em] text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
              Motivated 3rd-year Bachelor of Computer Applications (BCA) student with a strong academic record and hands-on exposure to software development, Python programming, and web technologies. Passionate about Information Security and Web Application Security, with proven analytical and problem-solving skills demonstrated through real-world projects and user behavior research.
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-on-surface-variant font-body-sm text-[12px] sm:text-[13px] leading-[20px] mb-8 bg-surface-container/70 backdrop-blur-md px-4 py-3 rounded-full shadow-sm">
              <div className="flex items-center gap-1 text-primary font-medium">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span className="text-on-surface">Kolkata, West Bengal</span>
              </div>
              <span className="text-outline-variant font-light">&bull;</span>
              <div className="flex items-center gap-1 text-primary font-medium">
                <span className="material-symbols-outlined text-[18px]">call</span>
                <a className="hover:text-primary transition-colors text-on-surface" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </div>
              <span className="text-outline-variant font-light">&bull;</span>
              <div className="flex items-center gap-1 text-primary font-medium">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <a className="hover:text-primary transition-colors text-on-surface break-all" href={`mailto:${email}`}>{email}</a>
              </div>
            </div>

            <div className="flex flex-wrap items-stretch gap-3 sm:gap-4 w-full">
              <a className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-on-primary font-label-lg text-[12px] sm:text-[13px] px-5 sm:px-8 py-3 transition-all hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 shadow-[0_12px_24px_-6px_rgba(197,155,39,0.35)]" href="#projects">
                <span>Explore Repertoire / Projects</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <a className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-surface-container-high text-on-surface font-label-lg text-[12px] sm:text-[13px] px-5 sm:px-6 py-3 transition-all hover:bg-surface-container-highest shadow-sm" href="#contact">
                <span className="material-symbols-outlined text-[18px] text-primary">send</span>
                <span>Get in Touch</span>
              </a>
              <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-surface-container-lowest text-primary-container font-label-lg text-[12px] sm:text-[13px] px-4 py-3 transition-all hover:bg-primary-fixed/20 shadow-sm">
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download Resume</span>
              </button>
            </div>
          </Reveal>

          <Reveal animation="right" delay={150} className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              <div className="absolute inset-0 rounded-t-[180px] rounded-b-[40px] bg-gradient-to-b from-primary-fixed/50 via-surface-container-high to-surface-container shadow-2xl scale-105 transform -rotate-1"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary-container/15 blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full bg-secondary-fixed/40 blur-xl pointer-events-none"></div>

              <div className="relative w-full h-full rounded-t-[170px] rounded-b-[36px] overflow-hidden shadow-[0_20px_50px_rgba(44,38,35,0.12)] bg-surface-container-lowest flex items-end justify-center">
                <img
                  ref={imgRef}
                  alt="Katha Nandy - Software Engineer & Classical Dancer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  src="/img.png"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  onSelect={(e) => e.preventDefault()}
                  loading="lazy"
                />

                <div className="absolute inset-0 select-none pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none" onContextMenu={(e) => e.preventDefault()}></div>
              </div>

              <div className="absolute -top-3 left-6 bg-surface-container-lowest px-3 py-1 rounded-full shadow-md flex items-center gap-1 text-primary font-label-sm text-[10px] uppercase tracking-[0.14em]">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                <span>Poise &bull; Rhythm &bull; Code</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
