export const GDPRPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <div className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GDPR Compliance</h1>
          <span className="inline-block bg-white/10 text-slate-400 text-sm px-4 py-1.5 rounded-full border border-white/10">
            Last updated: June 1, 2026
          </span>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            FinFlow is committed to protecting the rights of EU and EEA individuals whose data
            we process. This page explains how we comply with the General Data Protection Regulation.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">

        {/* 1. FinFlow & GDPR */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. FinFlow &amp; GDPR</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The General Data Protection Regulation (GDPR) is an EU regulation that governs the
            processing of personal data of individuals located in the European Union and European
            Economic Area. While FinFlow is an Indian company primarily serving Indian users,
            we process the data of EU/EEA individuals when providing Services to multinational
            companies with Indian operations and international employees.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Where GDPR applies to our processing activities, we are fully committed to compliance
            with its requirements, including data subject rights, lawful basis for processing,
            and data protection by design and by default.
          </p>
        </div>

        {/* 2. Data Controller vs Processor */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. Data Controller vs. Data Processor</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The GDPR distinguishes between Data Controllers (who determine the purposes and means
            of processing) and Data Processors (who process data on behalf of controllers).
          </p>
          <ul className="space-y-3">
            {[
              { title: "FinFlow as Data Processor", desc: "For Business and Enterprise customers, FinFlow acts as a Data Processor. Our customers â€” the organisations deploying FinFlow â€” are the Data Controllers who determine how employee or end-user data is processed within the platform." },
              { title: "FinFlow as Data Controller", desc: "For individual Free and Pro users, FinFlow acts as a Data Controller for the personal data we collect directly (e.g., account information, usage analytics)." },
              { title: "Data Processing Agreement", desc: "Business and Enterprise customers can request a Data Processing Agreement (DPA) to formalise the controller-processor relationship in accordance with GDPR Article 28." },
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

        {/* 3. Lawful Basis for Processing */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. Lawful Basis for Processing</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Under GDPR Article 6, we rely on the following lawful bases for processing personal data:
          </p>
          <ul className="space-y-3">
            {[
              { title: "Contract performance (Article 6(1)(b))", desc: "Processing necessary to provide the Services you have subscribed to, including account management, financial data aggregation, and report generation." },
              { title: "Legitimate interests (Article 6(1)(f))", desc: "Processing for fraud prevention, platform security, and improving the quality of our Services â€” where these interests are not overridden by your rights." },
              { title: "Consent (Article 6(1)(a))", desc: "Processing for non-essential analytics and marketing communications. You may withdraw consent at any time without affecting the lawfulness of prior processing." },
              { title: "Legal obligation (Article 6(1)(c))", desc: "Processing required to comply with applicable law, including Indian financial regulations and tax obligations." },
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

        {/* 4. Data Subject Rights */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Data Subject Rights</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            If you are an EU/EEA individual, you have the following rights under the GDPR. We will
            respond to all rights requests within 30 days of receipt.
          </p>
          <ul className="space-y-4">
            {[
              { title: "Right to Access (Article 15)", desc: "Request a copy of all personal data we hold about you, including the purposes for processing, categories of data, and retention periods. Response time: 30 days." },
              { title: "Right to Rectification (Article 16)", desc: "Request correction of inaccurate or incomplete personal data. Response time: 30 days." },
              { title: "Right to Erasure â€” 'Right to be Forgotten' (Article 17)", desc: "Request deletion of your personal data where it is no longer necessary for the purposes for which it was collected, subject to our legal retention obligations." },
              { title: "Right to Data Portability (Article 20)", desc: "Receive a copy of your personal data in a structured, machine-readable format (JSON or CSV) that you can transfer to another service provider." },
              { title: "Right to Restrict Processing (Article 18)", desc: "Request that we limit how we use your data while a dispute or erasure request is being investigated." },
              { title: "Right to Object (Article 21)", desc: "Object to processing based on legitimate interests or for direct marketing purposes. We will stop processing unless we can demonstrate compelling legitimate grounds." },
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

        {/* 5. How to Exercise Your Rights */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">5. How to Exercise Your Rights</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            To submit a data subject rights request, please email{" "}
            <a href="mailto:privacy@finflow.in" className="text-blue-400 hover:underline">privacy@finflow.in</a>
            {" "}with the subject line "GDPR Rights Request â€” [Type of Request]".
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            To protect your privacy and prevent unauthorised requests, we will ask you to verify
            your identity before processing any request. Acceptable forms of identity verification include:
          </p>
          <ul className="space-y-2">
            {[
              "Confirmation from the registered email address associated with your FinFlow account",
              "Government-issued photo ID (for deletion or portability requests affecting sensitive financial data)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-400 mt-4 text-sm">
            We will respond within 30 days. In complex cases, we may extend this by a further
            60 days with notice.
          </p>
        </div>

        {/* 6. Data Processing Agreement (DPA) */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">6. Data Processing Agreement (DPA)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Business and Enterprise customers who act as Data Controllers under GDPR can enter into
            a Data Processing Agreement (DPA) with FinFlow in accordance with GDPR Article 28.
            Our DPA covers:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "The subject matter, nature, and purpose of processing",
              "Categories of personal data processed",
              "Technical and organisational security measures",
              "Sub-processor disclosures and obligations",
              "Assistance with data subject rights requests",
              "Data breach notification obligations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-300">
            To request a DPA, contact us at{" "}
            <a href="mailto:dpa@finflow.in" className="text-blue-400 hover:underline">dpa@finflow.in</a>.
          </p>
        </div>

        {/* 7. Sub-processors */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">7. Sub-processors</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We engage the following sub-processors to provide the Services. All sub-processors
            are bound by data processing agreements and are GDPR compliant.
          </p>
          <ul className="space-y-3">
            {[
              { name: "Amazon Web Services (AWS)", purpose: "Cloud infrastructure, data storage, and compute. AWS is certified under ISO 27001, SOC 2, and GDPR-compliant under AWS Data Processing Addendum." },
              { name: "Razorpay", purpose: "Payment processing for subscription billing. PCI-DSS Level 1 compliant." },
              { name: "SendGrid (Twilio)", purpose: "Transactional email delivery. Twilio/SendGrid operates under standard EU SCCs." },
              { name: "Mixpanel", purpose: "Product analytics. Data is pseudonymised before transmission. Mixpanel offers GDPR compliance under their DPA." },
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
          <p className="text-slate-400 mt-4 text-sm">
            We will notify customers at least 30 days in advance of any changes to our
            sub-processor list that may affect the processing of their data.
          </p>
        </div>

        {/* 8. International Transfers */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">8. International Transfers</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow stores all customer data in India (AWS Mumbai region) and does not routinely
            transfer EU personal data outside India. In the limited cases where EU personal data
            may be processed by sub-processors with EU-facing infrastructure (e.g., Mixpanel,
            SendGrid), we ensure that appropriate safeguards are in place:
          </p>
          <ul className="space-y-2">
            {[
              "Standard Contractual Clauses (SCCs) as approved by the European Commission are incorporated into our agreements with all sub-processors handling EU data.",
              "Transfer Impact Assessments (TIAs) are conducted for any new sub-processor that may access EU personal data.",
              "We do not transfer special categories of personal data (sensitive data) outside India under any circumstances.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 9. Data Protection Officer */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">9. Data Protection Officer</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow has designated a Data Protection Officer (DPO) responsible for overseeing our
            GDPR compliance programme, advising on data protection obligations, and serving as the
            point of contact for supervisory authorities.
          </p>
          <p className="text-slate-300">
            Contact our DPO at:{" "}
            <a href="mailto:dpo@finflow.in" className="text-blue-400 hover:underline">dpo@finflow.in</a>
          </p>
        </div>

        {/* 10. Supervisory Authority */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">10. Right to Lodge a Complaint</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you are an EU/EEA individual and believe that our processing of your personal data
            violates the GDPR, you have the right to lodge a complaint with the relevant data
            protection supervisory authority in your country of residence, workplace, or the
            location of the alleged infringement.
          </p>
          <p className="text-slate-300 leading-relaxed">
            We encourage you to contact us first at{" "}
            <a href="mailto:privacy@finflow.in" className="text-blue-400 hover:underline">privacy@finflow.in</a>
            {" "}â€” we take all privacy concerns seriously and aim to resolve them directly and promptly.
            However, you always retain the right to escalate to your local supervisory authority.
          </p>
        </div>

      </div>
    </div>
  );
};
