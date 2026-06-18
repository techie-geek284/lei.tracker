export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <div className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <span className="inline-block bg-white/10 text-slate-400 text-sm px-4 py-1.5 rounded-full border border-white/10">
            Last updated: June 1, 2026
          </span>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            We believe your financial data is yours. This policy explains exactly what we collect,
            why we collect it, and how we protect it.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">

        {/* 1. Introduction */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
          <p className="text-slate-300 leading-relaxed">
            FinFlow Technologies Pvt Ltd ("FinFlow", "we", "us", or "our") is committed to protecting
            your personal information and your right to privacy. This Privacy Policy describes how we
            collect, use, store, and share information when you use the FinFlow platform, including
            our web application, mobile applications, and related services (collectively, the "Services").
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            By accessing or using our Services, you agree to the terms of this Privacy Policy. If you
            do not agree with the terms of this policy, please discontinue use of our Services
            immediately. This policy is compliant with the Information Technology Act, 2000, the
            Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal
            Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We collect information you provide directly, data fetched through the Account Aggregator
            framework with your explicit consent, and information generated through your use of our Services.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Account Information</h3>
          <ul className="space-y-2 mb-6">
            {["Full name and display name", "Email address", "Mobile phone number", "Password (stored as a bcrypt hash â€” never in plain text)", "Profile photo (optional)"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-medium text-white mb-3">Financial Data</h3>
          <ul className="space-y-2 mb-6">
            {["Bank account balances and transaction history (via Account Aggregator consent)", "Credit card statements and outstanding balances", "Loan and EMI details", "Investment portfolio values (mutual funds, stocks)", "UPI transaction references"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-medium text-white mb-3">Usage Data</h3>
          <ul className="space-y-2 mb-6">
            {["Features accessed and time spent on each", "Search queries within the app", "Reports generated and dashboards viewed", "AI assistant queries and interaction patterns"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-medium text-white mb-3">Device Information</h3>
          <ul className="space-y-2">
            {["IP address and approximate geolocation", "Browser type and version", "Operating system", "Device identifiers (for mobile apps)", "Cookies and session tokens"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. How We Use Your Information */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
          <ul className="space-y-3">
            {[
              { title: "Providing and improving our Services", desc: "We use your data to operate the platform, deliver personalised dashboards, and continuously improve the product experience." },
              { title: "AI categorisation and analysis", desc: "Your transaction data is processed by our AI engine to automatically categorise expenses, identify patterns, and generate spending insights." },
              { title: "Sending notifications and reports", desc: "We send email and in-app notifications for budget alerts, weekly summaries, bill reminders, and account activity." },
              { title: "Compliance and fraud prevention", desc: "We monitor usage patterns to detect unauthorised access, prevent fraud, and comply with applicable Indian regulations including KYC and AML obligations." },
              { title: "Customer support", desc: "When you contact our support team, we access your account data to diagnose and resolve issues efficiently." },
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

        {/* 4. Account Aggregator Data */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Account Aggregator Data</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow integrates with the RBI-regulated Account Aggregator (AA) framework â€” a consent-based
            financial data sharing system governed by the Reserve Bank of India. Under this framework,
            you explicitly authorise specific financial institutions to share your data with FinFlow for
            defined purposes and durations.
          </p>
          <ul className="space-y-3">
            {[
              "Read-only access: We never receive or store your banking credentials. All data flows through the AA ecosystem under your explicit consent.",
              "Purpose limitation: Data fetched via AA is used solely for the purpose you consented to â€” personal financial management and analysis.",
              "Data not sold: Your financial data is never sold, rented, or shared with third parties for advertising or marketing purposes.",
              "Consent management: You can view, pause, or revoke any AA consent at any time directly from your FinFlow account settings.",
              "Consent expiry: AA consents are time-bound. You will be notified before a consent expires and asked to renew if you wish to continue.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Data Storage & Security */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">5. Data Storage &amp; Security</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We implement industry-leading technical and organisational measures to protect your data
            against unauthorised access, alteration, disclosure, or destruction.
          </p>
          <ul className="space-y-3">
            {[
              "AES-256 encryption at rest: All sensitive data fields, including financial records and personal identifiers, are encrypted individually using AES-256.",
              "TLS 1.3 in transit: All data transmitted between your device and our servers is encrypted using TLS 1.3.",
              "SOC 2 Type II: We are currently undergoing SOC 2 Type II certification (expected Q4 2026). Our controls are independently audited annually.",
              "Data stored in India: All your data is stored in the AWS Mumbai (ap-south-1) region. We do not transfer personal financial data outside India.",
              "Access controls: Strict role-based access controls and multi-factor authentication are enforced for all internal systems.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 6. Data Retention */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">6. Data Retention</h2>
          <ul className="space-y-3">
            {[
              "Active accounts: We retain your data for as long as your account remains active or as necessary to provide you with our Services.",
              "Closed accounts: Upon account closure, we retain your data for 7 years as required under Indian financial regulations including the Prevention of Money Laundering Act (PMLA), 2002.",
              "Deletion requests: You may request deletion of your personal data by contacting privacy@finflow.in. We will process your request within 30 days, subject to our legal retention obligations.",
              "Transaction data: Anonymised and aggregated transaction data may be retained beyond these periods for statistical and product improvement purposes.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 7. Your Rights */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">7. Your Rights</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Under the Digital Personal Data Protection Act, 2023, and applicable Indian law, you have
            the following rights with respect to your personal data:
          </p>
          <ul className="space-y-3">
            {[
              { title: "Right to Access", desc: "Request a copy of all personal data we hold about you." },
              { title: "Right to Rectification", desc: "Request correction of inaccurate or incomplete personal data." },
              { title: "Right to Erasure", desc: "Request deletion of your personal data, subject to legal retention requirements." },
              { title: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format (JSON or CSV)." },
              { title: "Right to Withdraw Consent", desc: "Withdraw consent for data processing at any time, including AA consents, without affecting the lawfulness of prior processing." },
              { title: "Right to Grievance Redressal", desc: "Lodge a complaint with our grievance officer or with the Data Protection Board of India." },
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
          <p className="text-slate-400 mt-6 text-sm">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@finflow.in" className="text-blue-400 hover:underline">privacy@finflow.in</a>.
            We will respond within 30 days.
          </p>
        </div>

        {/* 8. Third-Party Services */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">8. Third-Party Services</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We work with trusted third-party service providers to operate our platform. Each provider
            is bound by data processing agreements and is permitted to use your data only for the
            specific purpose for which they were engaged.
          </p>
          <ul className="space-y-3">
            {[
              { name: "Razorpay", purpose: "Payment processing for subscription billing. Razorpay is PCI-DSS compliant. We do not store card details." },
              { name: "Amazon Web Services (AWS)", purpose: "Cloud infrastructure and data storage. All data remains in the AWS Mumbai (ap-south-1) region." },
              { name: "Mixpanel", purpose: "Product analytics to understand feature usage. Data is pseudonymised before being sent to Mixpanel." },
              { name: "SendGrid", purpose: "Transactional email delivery for reports, alerts, and account notifications." },
            ].map((item) => (
              <li key={item.name} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">{item.name}: </span>
                  <span className="text-slate-300">{item.purpose}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 9. Cookies */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">9. Cookies</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to operate and improve our Services.
            Cookies are small text files placed on your device when you visit our website.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: "Session cookies", desc: "Strictly necessary to keep you logged in and maintain your session securely." },
              { title: "Preference cookies", desc: "Remember your settings such as language, dashboard layout, and notification preferences." },
              { title: "Analytics cookies", desc: "Help us understand how users interact with the platform so we can improve the product." },
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
          <p className="text-slate-400 text-sm">
            You can opt out of non-essential cookies through our cookie consent banner or by adjusting
            your browser settings. Note that disabling cookies may affect the functionality of our
            Services. For more details, see our{" "}
            <a href="/cookies" className="text-blue-400 hover:underline">Cookie Policy</a>.
          </p>
        </div>

        {/* 10. Children's Privacy */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">10. Children's Privacy</h2>
          <p className="text-slate-300 leading-relaxed">
            Our Services are not directed to individuals under the age of 18. We do not knowingly
            collect personal information from children. If you are a parent or guardian and believe
            your child has provided us with personal information, please contact us immediately at{" "}
            <a href="mailto:privacy@finflow.in" className="text-blue-400 hover:underline">privacy@finflow.in</a>.
            We will promptly delete any such information upon verification.
          </p>
        </div>

        {/* 11. Changes to This Policy */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">11. Changes to This Policy</h2>
          <p className="text-slate-300 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. When we make material changes, we will
            notify you at least 30 days before the changes take effect â€” via email to your registered
            address and via a prominent notice within the FinFlow application. Your continued use of
            our Services after the effective date of the updated policy constitutes your acceptance
            of the changes. We encourage you to review this policy periodically.
          </p>
        </div>

        {/* 12. Contact Us */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">12. Contact Us</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we
            handle your personal data, please reach out to our Privacy Team:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>
              Email:{" "}
              <a href="mailto:privacy@finflow.in" className="text-blue-400 hover:underline">
                privacy@finflow.in
              </a>
            </li>
            <li>Company: FinFlow Technologies Pvt Ltd</li>
            <li>Address: 4th Floor, Koramangala Tech Park, Bangalore 560034</li>
          </ul>
          <p className="text-slate-400 text-sm mt-4">
            We aim to respond to all privacy-related inquiries within 30 days of receipt.
          </p>
        </div>

      </div>
    </div>
  );
};
