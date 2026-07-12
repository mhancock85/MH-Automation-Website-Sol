import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Asterisk,
  Bot,
  Check,
  Clock3,
  Database,
  Mail,
  Menu,
  MessageSquareText,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    icon: Workflow,
    title: "Automate the work between your tools",
    copy: "Connect your CRM, inbox, spreadsheets and finance systems so information moves without copy-and-paste admin.",
    outcome: "Less admin. Fewer errors.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Turn enquiries into qualified conversations",
    copy: "Respond, qualify and route new leads automatically—then put the right meetings directly into your calendar.",
    outcome: "Faster replies. Better leads.",
  },
  {
    number: "03",
    icon: Bot,
    title: "Give your team an AI operations layer",
    copy: "Build practical AI assistants for reporting, research, document handling and the repetitive tasks slowing your team down.",
    outcome: "More capacity. No extra headcount.",
  },
];

const steps = [
  {
    id: "01",
    title: "Find the friction",
    copy: "We map where time, leads and useful data are leaking from your current process.",
    output: "Opportunity map",
  },
  {
    id: "02",
    title: "Build the system",
    copy: "We design and implement the automation around the tools your team already uses.",
    output: "Working automation",
  },
  {
    id: "03",
    title: "Prove and improve",
    copy: "We test the real workflow, train your team and refine it until the outcome is reliable.",
    output: "Trained team",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-label="MH Automation">
      <span className="brand-mark__monogram">mh</span>
      <span className="brand-mark__word">automation</span>
    </span>
  );
}

function EngineVisual() {
  return (
    <div className="engine" aria-label="An animated automation system connecting business tools">
      <div className="engine__halo" />
      <svg className="engine__lines" viewBox="0 0 680 680" aria-hidden="true">
        <defs>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="line-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="#0a2524" stopOpacity=".15" />
            <stop offset=".5" stopColor="#1de5d3" stopOpacity=".9" />
            <stop offset="1" stopColor="#0a2524" stopOpacity=".15" />
          </linearGradient>
        </defs>
        <circle cx="340" cy="340" r="224" className="engine__orbit engine__orbit--one" />
        <circle cx="340" cy="340" r="154" className="engine__orbit engine__orbit--two" />
        <path d="M108 228 C205 228 230 340 340 340" className="engine__path" />
        <path d="M572 208 C470 208 460 340 340 340" className="engine__path" />
        <path d="M116 488 C230 488 222 340 340 340" className="engine__path" />
        <path d="M568 486 C454 486 458 340 340 340" className="engine__path" />
        <path d="M340 110 L340 570" className="engine__path engine__path--vertical" />
        <circle r="6" fill="#1de5d3" filter="url(#soft-glow)" className="engine__packet engine__packet--a">
          <animateMotion dur="4.3s" repeatCount="indefinite" path="M108 228 C205 228 230 340 340 340" />
        </circle>
        <circle r="5" fill="#1de5d3" filter="url(#soft-glow)" className="engine__packet engine__packet--b">
          <animateMotion dur="5.1s" begin="-2s" repeatCount="indefinite" path="M572 208 C470 208 460 340 340 340" />
        </circle>
        <circle r="5" fill="#1de5d3" filter="url(#soft-glow)" className="engine__packet engine__packet--c">
          <animateMotion dur="4.7s" begin="-1s" repeatCount="indefinite" path="M116 488 C230 488 222 340 340 340" />
        </circle>
      </svg>

      <div className="engine__core">
        <div className="engine__core-inner">
          <Asterisk aria-hidden="true" />
          <span>AI</span>
          <small>operations</small>
        </div>
      </div>

      <div className="engine-node engine-node--crm">
        <Database aria-hidden="true" /><span>CRM</span><small>updated</small>
      </div>
      <div className="engine-node engine-node--leads">
        <MessageSquareText aria-hidden="true" /><span>Leads</span><small>qualified</small>
      </div>
      <div className="engine-node engine-node--report">
        <Sparkles aria-hidden="true" /><span>Reports</span><small>generated</small>
      </div>
      <div className="engine-node engine-node--time">
        <Clock3 aria-hidden="true" /><span>Time</span><small>reclaimed</small>
      </div>
      <div className="engine__caption">
        <span className="status-dot" /> Live systems, moving together
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const openForm = (event: React.MouseEvent<HTMLElement>) => {
    lastTriggerRef.current = event.currentTarget;
    setMenuOpen(false);
    setFormOpen(true);
  };

  const closeForm = () => setFormOpen(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", close);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!formOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])',
    );
    focusable?.[0]?.focus();

    const handleDialogKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDialogKeys);
      lastTriggerRef.current?.focus();
    };
  }, [formOpen]);

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-wrap">
        <a href="#top" className="nav-brand"><BrandMark /></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">What we automate</a>
          <a href="#process">How it works</a>
          <a href="#about">About</a>
        </nav>
        <button className="nav-cta" type="button" onClick={openForm}>
          Book a free review <ArrowRight aria-hidden="true" />
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>What we automate</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <button className="button button--primary" type="button" onClick={openForm}>Book a free review</button>
          </nav>
        )}
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__grid">
            <motion.div
              className="hero__copy"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow"><span /> AI automation for growing service businesses</p>
              <h1>Grow the business.<br /><em>Lose the busywork.</em></h1>
              <p className="hero__lead">
                MH Automation builds practical AI systems for small and mid-sized service businesses—so leads move faster, admin disappears and your team gets hours back every week.
              </p>
              <div className="hero__actions">
                <button className="button button--primary button--hero" type="button" onClick={openForm}>
                  Book your free automation review <ArrowRight aria-hidden="true" />
                </button>
                <a className="text-link" href="#services">See what we automate <ArrowDownRight aria-hidden="true" /></a>
              </div>
              <ul className="hero__proof" aria-label="Service promises">
                <li><Check aria-hidden="true" /> Built around your business</li>
                <li><Check aria-hidden="true" /> Works with your existing tools</li>
                <li><Check aria-hidden="true" /> Clear, human support</li>
              </ul>
            </motion.div>
            <motion.div
              className="hero__visual"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <EngineVisual />
            </motion.div>
          </div>
          <div className="hero__rail" aria-hidden="true">
            <span>LEADS</span><i /><span>ADMIN</span><i /><span>REPORTING</span><i /><span>OPERATIONS</span><i /><span>CAPACITY</span>
          </div>
        </section>

        <section className="statement">
          <motion.div className="statement__inner" {...reveal}>
            <p className="section-index">01 / THE OPPORTUNITY</p>
            <p className="statement__text">
              Your best people should not spend their week <span>moving information between systems.</span> We turn repetitive work into a dependable digital operation.
            </p>
          </motion.div>
        </section>

        <section className="services section" id="services">
          <motion.div className="section-heading" {...reveal}>
            <div>
              <p className="section-index">02 / WHAT WE AUTOMATE</p>
              <h2>Systems that remove work,<br />not people.</h2>
            </div>
            <p>Focused automation for the parts of a growing service business that cost time, create delays and depend too much on memory.</p>
          </motion.div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article className="service-card" key={service.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
                  <div className="service-card__top"><span>{service.number}</span><Icon aria-hidden="true" /></div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="service-card__outcome"><Zap aria-hidden="true" /> {service.outcome}</div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="proof-panel">
          <div className="proof-panel__texture" />
          <motion.div className="proof-panel__copy" {...reveal}>
            <p className="section-index section-index--light">THE REAL PRODUCT</p>
            <h2>More time for the work<br />only humans can do.</h2>
            <p>Automation is not about adding more software. It is about creating a calmer, faster business where nothing useful gets lost between tools.</p>
            <button className="button button--light" type="button" onClick={openForm}>Tell me what I could automate <ArrowRight aria-hidden="true" /></button>
          </motion.div>
          <div className="proof-panel__numbers">
            <motion.div {...reveal}><strong>24/7</strong><span>routine work can keep moving</span></motion.div>
            <motion.div {...reveal}><strong>1</strong><span>connected operating system</span></motion.div>
            <motion.div {...reveal}><strong>0</strong><span>generic, off-the-shelf answers</span></motion.div>
          </div>
        </section>

        <section className="process section" id="process">
          <motion.div className="section-heading section-heading--process" {...reveal}>
            <div>
              <p className="section-index">03 / HOW IT WORKS</p>
              <h2>Clear from first call<br />to working system.</h2>
            </div>
            <p>No mysterious black box. You will know what we are building, why it matters and how success will be measured.</p>
          </motion.div>
          <div className="process-list">
            {steps.map((step) => (
              <motion.article className="process-step" key={step.id} {...reveal}>
                <span className="process-step__number">{step.id}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                <div className="process-step__output">
                  <span>Deliverable</span>
                  <strong>{step.output}</strong>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <motion.div className="about__portrait" {...reveal}>
            <div className="about__orb"><span>MH</span><i /></div>
            <div className="about__note">Independent thinking<br />Practical delivery<br />Human accountability</div>
          </motion.div>
          <motion.div className="about__copy" {...reveal}>
            <p className="section-index">04 / WHY MH AUTOMATION</p>
            <h2>Senior attention.<br />Built for the real world.</h2>
            <p className="about__lead">You work directly with Mark—an automation specialist focused on making AI useful inside real businesses, not impressive in a demo.</p>
            <p>Every system begins with your commercial goal and your team’s actual workflow. The result is automation people understand, trust and use.</p>
            <a className="text-link text-link--strong" href="mailto:mark@mhautomation.co.uk?subject=Let%27s%20talk%20automation">Talk directly with Mark <ArrowRight aria-hidden="true" /></a>
          </motion.div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta__orbit" aria-hidden="true"><i /><i /><i /></div>
          <motion.div className="final-cta__inner" {...reveal}>
            <p className="eyebrow eyebrow--center"><span /> One useful conversation. No hard sell.</p>
            <h2>What could your business<br /><em>stop doing manually?</em></h2>
            <p>Book a free automation review. We will identify the strongest opportunities, explain what is realistic and give you a clear next step.</p>
            <button className="button button--primary button--hero" type="button" onClick={openForm}>
              Book your free automation review <Mail aria-hidden="true" />
            </button>
            <a className="final-cta__email" href="mailto:mark@mhautomation.co.uk">mark@mhautomation.co.uk</a>
          </motion.div>
        </section>
      </main>

      <footer>
        <BrandMark light />
        <p>AI automation systems for growing service businesses.</p>
        <div><a href="#top">Back to top</a><span>© {new Date().getFullYear()} MH Automation</span></div>
      </footer>

      <AnimatePresence>
        {formOpen && (
          <motion.div
            className="enquiry-overlay"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeForm();
            }}
          >
            <motion.div
              ref={dialogRef}
              className="enquiry-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="enquiry-dialog__visual" aria-hidden="true">
                <div className="enquiry-dialog__brand"><BrandMark light /></div>
                <div className="enquiry-dialog__orbit"><i /><i /><i /></div>
                <div className="enquiry-dialog__promise">
                  <span>One useful conversation.</span>
                  <strong>No hard sell.</strong>
                </div>
              </div>
              <div className="enquiry-dialog__form-wrap">
                <button className="enquiry-dialog__close" type="button" onClick={closeForm} aria-label="Close enquiry form">
                  <X aria-hidden="true" />
                </button>
                <p className="section-index">START A CONVERSATION</p>
                <h2 id="enquiry-title">Tell me what is<br /><em>slowing you down.</em></h2>
                <p className="enquiry-dialog__intro">A few details are enough. Online enquiries will open soon; until then, you can contact Mark directly using the email link below.</p>
                <form className="enquiry-form" onSubmit={(event) => event.preventDefault()}>
                  <div className="enquiry-form__row">
                    <label>
                      <span>Your name</span>
                      <input type="text" name="name" autoComplete="name" placeholder="Jane Smith" required />
                    </label>
                    <label>
                      <span>Email address</span>
                      <input type="email" name="email" autoComplete="email" placeholder="jane@company.com" required />
                    </label>
                  </div>
                  <label>
                    <span>What would you like to improve?</span>
                    <textarea name="message" rows={5} placeholder="Tell me about the repetitive work, bottleneck or opportunity you have in mind…" required />
                  </label>
                  <button className="button enquiry-form__submit" type="submit" disabled aria-describedby="submit-note">
                    Online enquiries opening soon <Clock3 aria-hidden="true" />
                  </button>
                  <p id="submit-note" className="enquiry-form__note">
                    Prefer not to wait? Email <a href="mailto:mark@mhautomation.co.uk">mark@mhautomation.co.uk</a>
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
