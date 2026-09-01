"use client";

import { FormEvent, useState } from "react";

const solutions = [
  ["01", "AI & Machine Learning", "Predictive intelligence and autonomous systems that turn complex data into decisions."],
  ["02", "Cybersecurity", "Proactive protection, resilient architecture and security designed for tomorrow’s threats."],
  ["03", "Cloud Infrastructure", "Scalable, fault-tolerant infrastructure engineered for performance and continuous growth."],
  ["04", "IoT & Connectivity", "Connect physical and digital environments through intelligent devices, data and automation."],
];
const navItems = [["Solutions", "#solutions"], ["Technology", "#technology"], ["About", "#about"], ["Case Studies", "#cases"], ["Contact", "#contact"]];

export default function Home() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email.";
    if (company.length < 2) next.company = "Please enter your company.";
    if (message.length < 10) next.message = "Tell us a little more (10 characters minimum).";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`NAIFUZU demo request — ${data.get("company")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`);
    window.location.href = `mailto:hello@naifuzu.com?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <main>
      <div className="grid-bg" />
      <nav className="nav">
        <a className="brand" href="#top"><span>N</span> NAIFUZU</a>
        <div className="navlinks">{navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
        <a className="navcta" href="#contact">Book a Demo <b>↗</b></a>
        <details className="mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><div className="mobile-drawer"><div className="drawer-top"><span>MENU / 01</span><span className="live-dot">● LIVE</span></div><div className="mobile-links">{navItems.map(([label, href], i) => <a href={href} key={label}><small>0{i + 1}</small><span>{label}</span><b>↗</b></a>)}</div><div className="drawer-bottom"><span>NAIFUZU / 2026</span><a href="#contact">Start a conversation →</a></div></div></details>
      </nav>

      <section id="top" className="hero section"><div className="hero-copy"><div className="eyebrow"><i /> INTELLIGENT SYSTEMS / 2026</div><h1>Engineering <em>Tomorrow&apos;s</em> Intelligent Systems.</h1><p>NAIFUZU transforms complex data into secure, scalable technology that moves ambitious businesses forward.</p><div className="actions"><a className="primary" href="#solutions">Explore Solutions <span>→</span></a><a className="secondary" href="#technology">Watch Our Vision <span>◉</span></a></div></div><div className="hero-orb" aria-hidden="true"><div className="orb-core">N</div><div className="ring r1" /><div className="ring r2" /><div className="ring r3" /><div className="node n1"/><div className="node n2"/><div className="node n3"/></div></section>

      <section id="solutions" className="section"><div className="section-head"><div><span className="label">01 / SOLUTIONS</span><h2>Technology with a <em>purpose.</em></h2></div><p>From intelligence to infrastructure, we build systems designed to perform in the real world.</p></div><div className="cards">{solutions.map(([n,title,text])=><article className="card" key={n}><span className="number">{n}</span><div className="mini-icon">↗</div><h3>{title}</h3><p>{text}</p><a href="#contact">Discover <span>→</span></a></article>)}</div></section>
      <section id="technology" className="tech section"><div className="tech-visual"><div className="scanline"/><div className="tech-n">N</div><div className="data data1">01001001 00110110<br/>10110010 01101001<br/>11001010 00101101</div><div className="data data2">AI_CORE // ONLINE<br/>SECURE_NODE // ACTIVE<br/>SYSTEM_01 // READY</div></div><div className="tech-copy"><span className="label">02 / TECHNOLOGY</span><h2>Built for the future.<br/><em>Ready now.</em></h2><p>NAIFUZU combines artificial intelligence, secure cloud systems, connected devices and data engineering into one technology vision.</p><div className="tech-list"><div><b>01</b> Intelligence by design</div><div><b>02</b> Security at every layer</div><div><b>03</b> Infrastructure that scales</div></div></div></section>
      <section id="about" className="section about"><span className="label">03 / ABOUT NAIFUZU</span><h2>Built for the Future,<br/><em>Not Just the Present.</em></h2><p className="wide">We don&apos;t just solve today&apos;s challenges. We build the platforms, systems and digital foundations that can define the next decade.</p></section>
      <section className="metrics section">{[["99.99%","Uptime"],["50+","Global Patents"],["$1.2B","Client Value"],["120+","Enterprise Clients"]].map(([a,b])=><div className="metric" key={b}><strong>{a}</strong><span>{b}</span></div>)}</section>
      <section id="cases" className="section cases"><div className="section-head"><div><span className="label">04 / CASE STUDIES</span><h2>Ideas that become <em>impact.</em></h2></div></div><div className="case-grid"><div className="case"><span>AI / ENTERPRISE</span><h3>Predictive Intelligence Platform</h3><p>Turning fragmented operational data into real-time business intelligence.</p><b>View case →</b></div><div className="case"><span>SECURITY / CLOUD</span><h3>Resilient Digital Infrastructure</h3><p>Security-first architecture engineered for high availability and scale.</p><b>View case →</b></div></div></section>

      <section id="contact" className="contact-section section"><div className="contact-intro"><span className="label">05 / START A CONVERSATION</span><h2>Let&apos;s build<br/><em>what&apos;s next.</em></h2><p>Tell us what you&apos;re building. Our team will get back to you to explore the right technology path.</p><div className="contact-meta"><span>RESPONSE TIME</span><b>Within 1 business day</b></div></div><form className="contact-form" onSubmit={handleSubmit} noValidate><label>Name<input name="name" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name}/>{errors.name && <small>{errors.name}</small>}</label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email}/>{errors.email && <small>{errors.email}</small>}</label><label>Company<input name="company" autoComplete="organization" placeholder="Company name" aria-invalid={!!errors.company}/>{errors.company && <small>{errors.company}</small>}</label><label>Project brief<textarea name="message" rows={5} placeholder="Tell us about your project..." aria-invalid={!!errors.message}/>{errors.message && <small>{errors.message}</small>}</label><button className="primary form-submit" type="submit">Send Request <span>↗</span></button>{sent && <p className="success" role="status">Request prepared successfully. Your email app will open to send it.</p>}</form></section>
      <footer><div className="brand"><span>N</span> NAIFUZU</div><p>Technology for Tomorrow.</p><div className="footer-links"><a href="#">LinkedIn</a><a href="#">X</a><a href="#">GitHub</a><a href="mailto:hello@naifuzu.com">Email</a></div><small>© 2026 NAIFUZU. All systems operational.</small></footer>
    </main>
  );
}
