export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For QA Engineers &amp; PMs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Export Browser Sessions as{" "}
          <span className="text-[#58a6ff]">Shareable Workflows</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Capture every click, form input, and navigation step — then export them as reproducible JSON workflows your whole team can run or automate.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $22/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚡", title: "One-click capture", desc: "Install the extension and hit record. Every interaction is logged automatically." },
          { icon: "📦", title: "JSON export", desc: "Download clean, structured workflow files you can version-control or share." },
          { icon: "▶️", title: "Playback & share", desc: "Replay workflows in the app or send a link for teammates to reproduce any session." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$22<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate QA workflows</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Browser extension (Chrome & Firefox)",
              "Unlimited workflow recordings",
              "JSON export & import",
              "Shareable workflow links",
              "Playback in-app",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the browser extension work?",
              a: "After installing the extension, click Record. It listens for clicks, inputs, and page navigations, then bundles them into a structured JSON workflow you can download or sync to the app."
            },
            {
              q: "Can I share workflows with non-subscribers?",
              a: "Yes. You can generate a read-only shareable link for any workflow. Recipients can view and replay it in the app without a subscription."
            },
            {
              q: "What happens if I cancel?",
              a: "You keep access until the end of your billing period. All your exported JSON files remain yours — no lock-in."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} TabFlow. All rights reserved.
      </footer>
    </main>
  );
}
