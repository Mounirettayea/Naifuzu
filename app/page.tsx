const solutions = [
  ["01", "AI & Machine Learning", "Predictive intelligence and autonomous systems that turn complex data into decisions."],
  ["02", "Cybersecurity", "Proactive protection, resilient architecture and security designed for tomorrow’s threats."],
  ["03", "Cloud Infrastructure", "Scalable, fault-tolerant infrastructure engineered for performance and continuous growth."],
  ["04", "IoT & Connectivity", "Connect physical and digital environments through intelligent devices, data and automation."],
];

export default function Home() {
  return (
    <main>
      <div className="grid-bg" />
      <nav className="nav">
        <a className="brand" href="#top"><span>N</span> NAIFUZU</a>
        <div className="navlinks">
          <a href="#solutions">Solutions</a><a href="#technology">Technology</a><a href="#about">About</a><a href="#cases">Case Studies</a><a href="#contact">Contact</a>
        </div>
        <a className="navcta" href="#contact">Book a Demo <b>↗</b></a>
      </nav>

      <section id="top" className="hero section">
        <div className="hero-copy"><div className="eyebrow"><i /> INTELLIGENT SYSTEMS / 2026</div><h1>Engineering <em>Tomorrow&apos;s</em> Intelligent Systems.</h1><p>NAIFUZU transforms complex data into secure, scalable technology that moves ambitious businesses forward.</p><div className="actions"><a className="primary" href="#solutions">Explore Solutions <span>→</span></a><a className="secondary" href="#technology">Watch Our Vision <span>◉</span></a></div></div>
        <div className="hero-orb" aria-hidden="true"><div className="orb-core">N</div><div className="ring r1" /><div className="ring r2" /><div className="ring r3" /><div className="node n1"/><div className="node n2"/><div className="node n3"/></div>
      </section>

      <section id="solutions" className="section"><div className="section-head"><div><span className="label">01 / SOLUTIONS</span><h2>Technology with a <em>purpose.</em></h2></div><p>From intelligence to infrastructure, we build systems designed to perform in the real world.</p></div><div className="cards">{solutions.map(([n,title,text])=><article className="card" key={n}><span className="number">{n}</span><div className="mini-icon">↗</div><h3>{title}</h3><p>{text}</p><a href="#contact">Discover <span>→</span></a></article>)}</div></section>

      <section id="technology" className="tech section"><div className="tech-visual"><div className="scanline"/><div className="tech-n">N</div><div className="data data1">01001001 00110110<br/>10110010 01101001<br/>11001010 00101101</div><div className="data data2">AI_CORE // ONLINE<br/>SECURE_NODE // ACTIVE<br/>SYSTEM_01 // READY</div></div><div className="tech-copy"><span className="label">02 / TECHNOLOGY</span><h2>Built for the future.<br/><em>Ready now.</em></h2><p>NAIFUZU combines artificial intelligence, secure cloud systems, connected devices and data engineering into one technology vision.</p><div className="tech-list"><div><b>01</b> Intelligence by design</div><div><b>02</b> Security at every layer</div><div><b>03</b> Infrastructure that scales</div></div></div></section>

      <section id="about" className="section about"><span className="label">03 / ABOUT NAIFUZU</span><h2>Built for the Future,<br/><em>Not Just the Present.</em></h2><p className="wide">We don&apos;t just solve today&apos;s challenges. We build the platforms, systems and digital foundations that can define the next decade.</p></section>
      <section className="metrics section">{[["99.99%","Uptime"],["50+","Global Patents"],["$1.2B","Client Value"],["120+","Enterprise Clients"]].map(([a,b])=><div className="metric" key={b}><strong>{a}</strong><span>{b}</span></div>)}</section>
      <section id="cases" className="section cases"><div className="section-head"><div><span className="label">04 / CASE STUDIES</span><h2>Ideas that become <em>impact.</em></h2></div></div><div className="case-grid"><div className="case"><span>AI / ENTERPRISE</span><h3>Predictive Intelligence Platform</h3><p>Turning fragmented operational data into real-time business intelligence.</p><b>View case →</b></div><div className="case"><span>SECURITY / CLOUD</span><h3>Resilient Digital Infrastructure</h3><p>Security-first architecture engineered for high availability and scale.</p><b>View case →</b></div></div></section>
      <section id="contact" className="cta section"><span className="label">05 / START A CONVERSATION</span><h2>Ready to build<br/><em>what&apos;s next?</em></h2><a className="primary" href="mailto:hello@naifuzu.com">Book a Demo <span>↗</span></a></section>
      <footer><div className="brand"><span>N</span> NAIFUZU</div><p>Technology for Tomorrow.</p><div className="footer-links"><a href="#">LinkedIn</a><a href="#">X</a><a href="#">GitHub</a><a href="mailto:hello@naifuzu.com">Email</a></div><small>© 2026 NAIFUZU. All systems operational.</small></footer>
    </main>
  );
}
