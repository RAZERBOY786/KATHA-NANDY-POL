import { useState } from 'react'
import Reveal from './Reveal'
import { contact } from '../utils/contact'

const stripHtml = (str) =>
  String(str || '')
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/\p{C}/gu, '')
    .trim()

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { email, phone } = contact

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target

    const websiteField = form.elements.website
    if (websiteField && websiteField.value) {
      return
    }

    const lastSubmit = Number(sessionStorage.getItem('kn_last_submit') || 0)
    if (Date.now() - lastSubmit < 30000) {
      setSubmitted(true)
      form.reset()
      return
    }
    sessionStorage.setItem('kn_last_submit', String(Date.now()))

    const subject = stripHtml(form.elements.subjectMatter.value)
    const message = stripHtml(form.elements.inquiryMessage.value)
    const email = stripHtml(form.elements.callerEmail.value)

    if (!validateEmail(email) || subject.length < 2 || message.length < 2) {
      return
    }

    setSubmitted(true)
    form.reset()
  }

  return (
    <section className="w-full bg-surface-container-low py-12 sm:py-18 scroll-mt-20" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal animation="left" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-fixed/40 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] shadow-sm mb-4">
                <span>&#10022; Collaborative Dialogue</span>
              </div>
              <h2 className="font-headline-lg text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] tracking-[-0.015em] text-on-surface mb-4">
                Initiate the Next Movement.
              </h2>
              <p className="font-body-lg text-[15px] leading-[24px] sm:text-[18px] sm:leading-[28px] text-on-surface-variant leading-relaxed mb-8">
                Whether seeking a dedicated software engineering intern, a web application security researcher, or a technical collaborator who blends logic with artistic sensibility, let us create meaningful rhythm together.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <a className="p-4 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 group" href={`mailto:${email}`}>
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">Electronic Mail</span>
                    <span className="font-body-md text-[14px] sm:text-[15px] leading-[24px] text-on-surface font-semibold group-hover:text-primary transition-colors break-all">{email}</span>
                  </div>
                </a>
                <a className="p-4 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-4 group" href={`tel:${phone.replace(/\s/g, '')}`}>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">Telephonic Direct</span>
                    <span className="font-body-md text-[15px] leading-[24px] text-on-surface font-semibold group-hover:text-primary transition-colors">{phone}</span>
                  </div>
                </a>
                <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">Home Base</span>
                    <span className="font-body-md text-[15px] leading-[24px] text-on-surface font-semibold">Kolkata, West Bengal, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 bg-surface-container/60 px-4 py-3 rounded-xl">
              <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-on-surface-variant font-semibold">Portals:</span>
              <a className="font-label-md text-[11px] uppercase tracking-wider text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-1" href="https://www.linkedin.com/in/katha-nandy-94a8a6367/" rel="noopener noreferrer" target="_blank">
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </a>
              <span className="text-outline-variant">&bull;</span>
              <a className="font-label-md text-[11px] uppercase tracking-wider text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-1" href="https://github.com/kathanandy" rel="noopener noreferrer" target="_blank">
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </a>
            </div>
          </Reveal>

          <Reveal animation="right" delay={150} className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-12 rounded-2xl shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-headline-sm text-xl sm:text-2xl text-on-surface">Send a Dispatch</h3>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-secondary font-semibold">Direct Transmission</span>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate aria-label="Contact Katha Nandy">
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" tabIndex={-1} autoComplete="off" type="text" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold" htmlFor="callerName">Your Name</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-[15px] leading-[24px] focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="callerName" placeholder="e.g. Dr. Aris Thorne" required type="text" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold" htmlFor="callerEmail">Your Email</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-[15px] leading-[24px] focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="callerEmail" placeholder="e.g. aris@institute.edu" required type="email" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold" htmlFor="subjectMatter">Subject Matter / Inquired Role</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-[15px] leading-[24px] focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="subjectMatter" placeholder="e.g. Software Engineer / Security Analyst Opportunity" required type="text" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold" htmlFor="inquiryMessage">Message &amp; Project Coordinates</label>
                    <textarea className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-[15px] leading-[24px] focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-none" id="inquiryMessage" placeholder="Detail the technical scope, timeline, and architectural objectives..." required rows="5"></textarea>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-on-primary font-label-lg text-[13px] px-8 py-3 hover:bg-secondary hover:text-on-secondary transition-all shadow-md hover:shadow-lg mt-2" type="submit">
                    <span>Send Transmitted Note</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 p-4 rounded-xl bg-primary-fixed/40 text-on-primary-fixed flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-[13px] font-semibold">Dispatch Transmitted Gracefully</span>
                      <span className="font-body-sm text-[13px] leading-[20px]">Thank you. Katha Nandy will review your message and reply promptly.</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-2 bg-surface-container-low p-3 rounded-lg flex flex-wrap items-center justify-between gap-2 text-on-surface-variant font-label-sm text-[10px]">
                <span>Standard Response: Within 24 Hours</span>
                <span className="flex items-center gap-1 text-primary font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>Active Kolkata Timezone (IST)</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
