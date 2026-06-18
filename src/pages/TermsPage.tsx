export const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <div className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <span className="inline-block bg-white/10 text-slate-400 text-sm px-4 py-1.5 rounded-full border border-white/10">
            Last updated: June 1, 2026
          </span>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using FinFlow. By accessing our Services,
            you agree to be bound by these terms and all applicable Indian laws and regulations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">

        {/* 1. Acceptance of Terms */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            By creating an account, accessing, or using any part of the FinFlow platform
            (the "Services") provided by FinFlow Technologies Pvt Ltd ("FinFlow", "we", "us"),
            you ("User", "you") agree to be bound by these Terms of Service ("Terms").
          </p>
          <p className="text-slate-300 leading-relaxed">
            If you are using the Services on behalf of an organisation, you represent and warrant
            that you have the authority to bind that organisation to these Terms, and references to
            "you" include that organisation. If you do not agree to these Terms, you must immediately
            discontinue use of the Services.
          </p>
        </div>

        {/* 2. Description of Services */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow provides AI-powered personal and business financial management tools, including:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Automated transaction categorisation and tagging",
              "Multi-account dashboard and net worth tracking",
              "AI-generated financial insights and spending analysis",
              "Budget creation and monitoring",
              "Bill and EMI reminders",
              "Financial reports (monthly, quarterly, annual)",
              "Account Aggregator integration for bank and investment data",
              "Business expense management and team collaboration tools (Business/Enterprise plans)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-sm">
            We reserve the right to modify, suspend, or discontinue any feature of the Services
            at any time with reasonable notice.
          </p>
        </div>

        {/* 3. Account Registration */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. Account Registration</h2>

          <h3 className="text-lg font-medium text-white mb-3">Eligibility</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            You must be at least 18 years of age and an Indian resident to create an account and
            use the Services. By registering, you represent and warrant that you meet these requirements.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Accurate Information</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            You agree to provide accurate, current, and complete information during registration and
            to keep your account information up to date. Providing false or misleading information
            is grounds for immediate account termination.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Account Security</h3>
          <p className="text-slate-300 leading-relaxed">
            You are solely responsible for maintaining the confidentiality of your login credentials
            and for all activity that occurs under your account. You agree to immediately notify us
            at{" "}
            <a href="mailto:support@finflow.in" className="text-blue-400 hover:underline">support@finflow.in</a>
            {" "}of any unauthorised use of your account or any other security breach.
          </p>
        </div>

        {/* 4. Acceptable Use Policy */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Acceptable Use Policy</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            You agree to use FinFlow only for lawful purposes. The following activities are strictly prohibited:
          </p>
          <ul className="space-y-2">
            {[
              "Reverse engineering, decompiling, or disassembling any part of the platform or its underlying algorithms",
              "Scraping, crawling, or using automated tools to extract data from the platform without written permission",
              "Commercial resale or sublicensing of the Services or data without a separate written agreement with FinFlow",
              "Using the platform for fraudulent activities, money laundering, or any purpose that violates Indian law",
              "Attempting to gain unauthorised access to other users' accounts or our backend systems",
              "Uploading malicious code, viruses, or any content designed to disrupt or damage the Services",
              "Impersonating another person or entity in connection with the Services",
              "Using the Services in any manner that could damage, disable, or impair the platform's performance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Subscription & Billing */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">5. Subscription &amp; Billing</h2>

          <h3 className="text-lg font-medium text-white mb-3">Plans</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow offers Free, Pro, Business, and Enterprise subscription plans. Detailed features
            and pricing for each plan are available on our pricing page and may be updated from time to time.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Auto-Renewal</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Paid subscriptions automatically renew at the end of each billing period (monthly or annual)
            unless cancelled before the renewal date. You authorise FinFlow to charge your payment
            method on file for the renewal amount.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Price Changes</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            We will provide at least 30 days' notice before any price change takes effect, via email
            and in-app notification. Continued use of the Services after the price change constitutes
            acceptance of the new pricing.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Taxes</h3>
          <p className="text-slate-300 leading-relaxed">
            All prices are exclusive of applicable taxes. GST (Goods and Services Tax) will be
            applied to subscription fees as required under Indian tax law. Your invoice will
            reflect the applicable GST amount.
          </p>
        </div>

        {/* 6. Free Trial */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">6. Free Trial</h2>
          <ul className="space-y-3">
            {[
              "FinFlow offers a 14-day free trial of the Pro plan for new users. No credit card is required to start a trial.",
              "At the end of the 14-day trial period, your account will automatically convert to the selected paid plan unless you cancel before the trial expires.",
              "You may cancel your trial at any time before the trial end date through your account settings with no charge.",
              "Free trial eligibility is limited to one trial per user. Creating multiple accounts to obtain additional free trials is a violation of these Terms.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 7. Refund Policy */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">7. Refund Policy</h2>
          <ul className="space-y-3">
            {[
              { title: "Pro Plan", desc: "We offer a 7-day money-back guarantee from the date of your first paid charge. If you are not satisfied, contact us within 7 days for a full refund — no questions asked." },
              { title: "Business and Enterprise Plans", desc: "Refund requests are evaluated on a case-by-case basis. Please contact your account manager or email legal@finflow.in within 14 days of the charge." },
              { title: "Partial Months", desc: "We do not issue refunds or credits for partial months of service. If you cancel mid-cycle, you will retain access until the end of the billing period." },
              { title: "Annual Plans", desc: "Annual plan refunds beyond the 7-day money-back window are not provided, except where required by applicable Indian law." },
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

        {/* 8. Intellectual Property */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">8. Intellectual Property</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            All intellectual property rights in the FinFlow platform — including the software,
            algorithms, design, trademarks, logos, and brand identity — are owned by or licensed to
            FinFlow Technologies Pvt Ltd. Nothing in these Terms grants you any right, title, or
            interest in our intellectual property.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Your financial data belongs to you. FinFlow does not claim ownership of the financial
            data you link or import into the platform. You grant FinFlow a limited, non-exclusive
            licence to process your data solely for the purpose of providing the Services to you.
            This licence terminates when you delete your account.
          </p>
        </div>

        {/* 9. Account Aggregator Integration */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">9. Account Aggregator Integration</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow's integration with financial institutions is facilitated through RBI-regulated
            Account Aggregator (AA) entities. Your use of the AA integration is subject to:
          </p>
          <ul className="space-y-2">
            {[
              "The terms and guidelines of the Reserve Bank of India governing the AA framework",
              "The specific terms of consent you provide at the time of linking each financial account",
              "Read-only access — FinFlow cannot initiate transactions or modify any financial account on your behalf",
              "Your right to revoke any AA consent at any time through the FinFlow app or directly through the relevant AA entity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 10. Limitation of Liability */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            To the maximum extent permitted by applicable Indian law, FinFlow's total liability to
            you for any claim arising out of or relating to these Terms or the Services shall not
            exceed the amount you paid to FinFlow in the 12 months preceding the claim.
          </p>
          <p className="text-slate-300 leading-relaxed">
            FinFlow shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages, including loss of profits, loss of data, or business interruption,
            arising out of or in connection with your use of the Services — even if FinFlow has been
            advised of the possibility of such damages. The Services are provided "as is" without
            warranties of any kind, express or implied, to the fullest extent permitted by law.
          </p>
        </div>

        {/* 11. Indemnification */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">11. Indemnification</h2>
          <p className="text-slate-300 leading-relaxed">
            You agree to indemnify, defend, and hold harmless FinFlow Technologies Pvt Ltd, its
            directors, employees, contractors, and agents from and against any claims, liabilities,
            damages, losses, and expenses (including reasonable legal fees) arising from: (a) your
            use of the Services; (b) your violation of these Terms; (c) your violation of any
            applicable law or regulation; or (d) your violation of any third-party rights, including
            intellectual property or privacy rights.
          </p>
        </div>

        {/* 12. Termination */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">12. Termination</h2>

          <h3 className="text-lg font-medium text-white mb-3">Termination by You</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            You may terminate your account at any time by accessing account settings and selecting
            "Close Account." Upon termination, your access to the Services will cease at the end
            of your current billing period.
          </p>

          <h3 className="text-lg font-medium text-white mb-3">Termination by FinFlow</h3>
          <p className="text-slate-300 leading-relaxed">
            We may suspend or terminate your access to the Services for breach of these Terms with
            30 days' written notice, or immediately and without notice in cases of fraud, illegal
            activity, or conduct that poses a security risk to the platform or other users.
          </p>
        </div>

        {/* 13. Governing Law */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">13. Governing Law</h2>
          <p className="text-slate-300 leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of India, without
            regard to its conflict of law provisions. Any dispute arising from these Terms shall be
            subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
          </p>
        </div>

        {/* 14. Dispute Resolution */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">14. Dispute Resolution</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In the event of any dispute or claim arising out of or relating to these Terms or the
            Services, the parties agree to first attempt to resolve the dispute through good-faith
            negotiation for a period of 30 days from written notice of the dispute.
          </p>
          <p className="text-slate-300 leading-relaxed">
            If the dispute cannot be resolved through negotiation, it shall be referred to and
            finally resolved by arbitration in accordance with the Arbitration and Conciliation Act,
            1996, as amended. The seat of arbitration shall be Bangalore, India. The language of
            arbitration shall be English. The award shall be final and binding on both parties.
          </p>
        </div>

        {/* 15. Contact */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">15. Contact</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            For any questions about these Terms of Service, please contact our Legal Team:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>
              Email:{" "}
              <a href="mailto:legal@finflow.in" className="text-blue-400 hover:underline">
                legal@finflow.in
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
