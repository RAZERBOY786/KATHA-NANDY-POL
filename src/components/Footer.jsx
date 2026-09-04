import Reveal from './Reveal'
import { contact } from '../utils/contact'

export default function Footer() {
  const { email, phone } = contact
  return (
    <footer className="w-full bg-surface-container-low mt-16 sm:mt-24">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <Reveal animation="up" className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                  <defs>
                    <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C59B27"/>
                      <stop offset="50%" stopColor="#E5C158"/>
                      <stop offset="100%" stopColor="#A27814"/>
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="54" stroke="url(#footerGoldGrad)" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>
                  <circle cx="60" cy="60" r="46" stroke="url(#footerGoldGrad)" strokeWidth="1" opacity="0.3"/>
                  <path d="M44 32 C44 48, 44 72, 44 88 M45 58 C52 50, 68 38, 76 34 C64 48, 52 58, 45 60 C54 66, 68 78, 78 88" stroke="url(#footerGoldGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 42 C50 20, 84 22, 90 48 C94 66, 78 84, 58 92" stroke="url(#footerGoldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75"/>
                  <circle cx="76" cy="34" r="3" fill="url(#footerGoldGrad)"/>
                </svg>
              </div>
              <span className="font-headline-sm text-2xl text-on-surface">Katha Nandy</span>
            </div>
            <p className="font-body-md text-[15px] leading-[24px] text-on-surface-variant max-w-md">
              Choreographing elegant code and intuitive systems. Blending structural software architecture with the cadence, poise, and expressive nuance of dance.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-on-surface-variant">Open to Full-Time Roles &amp; Research</span>
            </div>
          </Reveal>

          <Reveal animation="up" delay={120} className="md:col-span-4 flex flex-col gap-2">
            <span className="font-label-lg text-[13px] uppercase tracking-wider text-primary font-semibold">Contact &amp; Location</span>
            <address className="flex flex-col gap-2 not-italic">
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px]">
              <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
              <span>Kolkata, West Bengal, India</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px]">
              <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
              <a className="hover:text-primary transition-colors" href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px]">
              <span className="material-symbols-outlined text-[18px] text-primary">call</span>
              <a className="hover:text-primary transition-colors" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            </div>
            </address>
          </Reveal>

          <Reveal animation="up" delay={240} className="md:col-span-3 flex flex-col gap-2">
            <span className="font-label-lg text-[13px] uppercase tracking-wider text-primary font-semibold">Professional Portals</span>
            <a className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant hover:text-primary font-semibold transition-colors flex items-center gap-1" href="https://www.linkedin.com/in/katha-nandy-94a8a6367/" rel="noopener noreferrer" target="_blank">
              <span>LinkedIn</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
            <a className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant hover:text-primary font-semibold transition-colors flex items-center gap-1" href="https://github.com/kathanandy" rel="noopener noreferrer" target="_blank">
              <span>GitHub</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
          </Reveal>
        </div>

        <Reveal animation="fade" delay={200} className="border-t border-outline-variant pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body-sm text-[13px] text-on-surface-variant">
            &copy; {new Date().getFullYear()} Katha Nandy. Choreographed with precision &amp; passion.
          </span>
          <div className="flex items-center gap-1 text-primary font-label-sm text-[10px] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span>Poise &bull; Rhythm &bull; Code</span>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
