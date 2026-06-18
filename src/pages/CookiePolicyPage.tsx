export const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <div className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <span className="inline-block bg-white/10 text-slate-400 text-sm px-4 py-1.5 rounded-full border border-white/10">
            Last updated: June 1, 2026
          </span>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            This policy explains what cookies we use on FinFlow, why we use them, and how you
            can control them.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">

        {/* 1. What Are Cookies */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. What Are Cookies</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Cookies are small text files placed on your device (computer, tablet, or mobile phone)
            when you visit a website. They are widely used to make websites work more efficiently,
            to remember your preferences, and to provide information to the website owners.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Cookies may be "session cookies" — which expire when you close your browser — or
            "persistent cookies" — which remain on your device for a defined period or until you
            delete them. We also use similar tracking technologies such as local storage and
            pixel tags, which are subject to the same rules described in this policy.
          </p>
        </div>

        {/* 2. How We Use Cookies */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            FinFlow uses cookies for the following purposes:
          </p>
          <ul className="space-y-3">
            {[
              { title: "Session management", desc: "To keep you securely logged in as you navigate between pages within the FinFlow application." },
              { title: "Preferences", desc: "To remember your settings such as language, dashboard layout, date format, and notification preferences so you don't have to reconfigure them on every visit." },
              { title: "Analytics", desc: "To understand how users interact with the platform — which features are most used, where users encounter friction, and how to improve the product experience." },
              { title: "Security", desc: "To protect your account against cross-site request forgery (CSRF) attacks and to detect suspicious login activity." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{item.title}: </span>
                  <span className="text-slate-300">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Types of Cookies We Use — Table */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-6">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium pb-3 pr-4">Name</th>
                  <th className="text-left text-slate-400 font-medium pb-3 pr-4">Purpose</th>
                  <th className="text-left text-slate-400 font-medium pb-3 pr-4">Duration</th>
                  <th className="text-left text-slate-400 font-medium pb-3">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    name: "finflow_session",
                    purpose: "User authentication and session management",
                    duration: "24 hours",
                    category: "Strictly Necessary",
                  },
                  {
                    name: "csrf_token",
                    purpose: "Cross-site request forgery protection",
                    duration: "Session",
                    category: "Strictly Necessary",
                  },
                  {
                    name: "preferences",
                    purpose: "Stores user interface preferences (theme, layout, locale)",
                    duration: "1 year",
                    category: "Strictly Necessary",
                  },
                  {
                    name: "_mp",
                    purpose: "Mixpanel product analytics and feature usage tracking",
                    duration: "1 year",
                    category: "Analytics",
                  },
                  {
                    name: "_ga",
                    purpose: "Google Analytics website traffic and behaviour analysis",
                    duration: "2 years",
                    category: "Analytics",
                  },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-3 pr-4 font-mono text-blue-400 text-xs">{row.name}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.purpose}</td>
                    <td className="py-3 pr-4 text-slate-400 whitespace-nowrap">{row.duration}</td>
                    <td className="py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          row.category === "Strictly Necessary"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {row.category}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 pr-4 text-slate-500 italic text-xs">—</td>
                  <td className="py-3 pr-4 text-slate-500 italic">No marketing cookies currently used</td>
                  <td className="py-3 pr-4 text-slate-500">—</td>
                  <td className="py-3">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-slate-500 border border-white/10">
                      Marketing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Third-Party Cookies */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Some cookies on our platform are set by third-party services we use. We do not
            control these cookies directly — they are governed by each provider's own privacy policy.
          </p>
          <ul className="space-y-3">
            {[
              {
                name: "Mixpanel",
                desc: "Sets the _mp cookie for product analytics. Their data practices are governed by the Mixpanel Privacy Policy.",
                link: "https://mixpanel.com/legal/privacy-policy",
              },
              {
                name: "Google Analytics",
                desc: "Sets the _ga cookie for website traffic analysis. Their data practices are governed by the Google Privacy Policy.",
                link: "https://policies.google.com/privacy",
              },
            ].map((item) => (
              <li key={item.name} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{item.name}: </span>
                  <span className="text-slate-300">{item.desc} </span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                    View policy
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Cookie Consent */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">5. Cookie Consent</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            When you first visit FinFlow, a cookie consent banner is displayed. Strictly necessary
            cookies are always active as they are essential for the platform to function. All other
            cookies (analytics) are only activated if you provide explicit consent.
          </p>
          <ul className="space-y-2">
            {[
              "You can accept all cookies, reject non-essential cookies, or manage your preferences by category.",
              "Your consent preference is saved and remembered for 12 months.",
              "You can change your cookie preferences at any time through the 'Cookie Settings' link in the website footer.",
              "Withdrawing consent will not affect the lawfulness of any prior cookie processing.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 6. Managing Cookies */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">6. Managing Cookies</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In addition to our cookie consent banner, you can control cookies through your browser settings:
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Browser Settings</h3>
          <ul className="space-y-2 mb-6">
            {[
              "Google Chrome: Settings → Privacy and Security → Cookies and other site data",
              "Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data",
              "Safari: Preferences → Privacy → Manage Website Data",
              "Microsoft Edge: Settings → Cookies and Site Permissions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-sm mb-4">
            Note: Blocking strictly necessary cookies will prevent FinFlow from functioning
            correctly. You will not be able to remain logged in or use core platform features.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Analytics Opt-Out</h3>
          <ul className="space-y-2">
            {[
              { label: "Mixpanel opt-out", href: "https://mixpanel.com/optout" },
              { label: "Google Analytics opt-out (browser add-on)", href: "https://tools.google.com/dlpage/gaoptout" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 7. Do Not Track */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">7. Do Not Track</h2>
          <p className="text-slate-300 leading-relaxed">
            Some browsers offer a "Do Not Track" (DNT) signal that notifies websites you visit that
            you do not want your browsing activity tracked. FinFlow honours DNT signals: if your
            browser sends a DNT signal, we will disable analytics cookies (Mixpanel and Google
            Analytics) for your session. Strictly necessary cookies required for platform operation
            are not affected by DNT signals.
          </p>
        </div>

        {/* 8. Updates */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
          <p className="text-slate-300 leading-relaxed">
            We may update this Cookie Policy when we add or remove cookies, change how we use
            existing cookies, or update our third-party providers. When we make material changes,
            we will update the "Last updated" date at the top of this page and, where appropriate,
            display the cookie consent banner again to obtain fresh consent for any new
            non-essential cookies. We encourage you to review this policy periodically.
          </p>
        </div>

        {/* 9. Contact */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">9. Contact</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you have any questions or concerns about our use of cookies, please contact us:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>
              Email:{" "}
              <a href="mailto:cookies@finflow.in" className="text-blue-400 hover:underline">
                cookies@finflow.in
              </a>
            </li>
            <li>Company: FinFlow Technologies Pvt Ltd</li>
            <li>Address: 4th Floor, Koramangala Tech Park, Bangalore 560034</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
