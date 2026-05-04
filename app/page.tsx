export default function Home() {
  const faqs = [
    {
      q: "How does the bot assign roles automatically?",
      a: "You define triggers — like emoji reactions, message counts, or custom events — and the bot executes role changes instantly via Discord's API."
    },
    {
      q: "Do I need coding knowledge to set up workflows?",
      a: "No. The dashboard provides a visual workflow builder. Just connect your Discord server, pick triggers and actions, and you're live."
    },
    {
      q: "Is my Discord server data safe?",
      a: "Yes. We only request the minimum bot permissions needed. No message content is stored — only role and activity metadata."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Productivity Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Smart Discord Role Management
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automate role assignments based on reactions, activity, and custom triggers. Stop managing roles manually — let workflows do it.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $8/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$8<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate your server</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited role workflows",
              "Reaction-based triggers",
              "Activity level tracking",
              "Custom event triggers",
              "Multi-server support",
              "Priority support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Automating
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm mt-20">
        © {new Date().getFullYear()} Discord Role Bot. All rights reserved.
      </footer>
    </main>
  );
}
