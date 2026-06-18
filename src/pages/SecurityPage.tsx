const Chip = ({ label }: { label: string }) => (
  <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded px-2 py-0.5 text-xs font-mono mr-2 mb-1">
    {label}
  </span>
);

export const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <div className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Security</h1>
          <span className="inline-block bg-white/10 text-slate-400 text-sm px-4 py-1.5 rounded-full border border-white/10">
            Last updated: June 1, 2026
          </span>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Security is our foundation, not a feature. FinFlow is built on bank-grade security
            architecture from day one â€” because your financial data demands nothing less.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">

        {/* 1. Encryption */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Encryption</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="AES-256" />
            <Chip label="TLS 1.3" />
            <Chip label="AWS KMS" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every sensitive data field in FinFlow is encrypted individually â€” not just at the
            database level. This means that even within our own infrastructure, data at rest is
            unreadable without explicit key authorisation.
          </p>
          <ul className="space-y-3">
            {[
              { title: "At rest", desc: "AES-256 encryption applied field-by-field. Financial records, PII, and account credentials each carry their own encrypted envelope." },
              { title: "In transit", desc: "All communication between your device and our servers is encrypted using TLS 1.3. We do not support TLS 1.1 or 1.2." },
              { title: "Key management", desc: "Encryption keys are managed via AWS Key Management Service (KMS). Keys are rotated automatically every 90 days and are never stored alongside the data they protect." },
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

        {/* 2. Infrastructure Security */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Infrastructure Security</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="AWS ap-south-1" />
            <Chip label="VPC isolation" />
            <Chip label="WAF" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Our entire infrastructure runs on Amazon Web Services in the Mumbai (ap-south-1) region.
            We have designed our cloud architecture with defence-in-depth principles.
          </p>
          <ul className="space-y-3">
            {[
              { title: "VPC isolation", desc: "All services run inside a dedicated Virtual Private Cloud. Production, staging, and development environments are fully isolated at the network level." },
              { title: "Private subnets", desc: "Databases and internal services operate exclusively in private subnets with no direct internet access. All inbound traffic is routed through load balancers with strict security group rules." },
              { title: "Web Application Firewall", desc: "AWS WAF is deployed at the edge to filter malicious traffic, block SQL injection attempts, and rate-limit requests to protect against DDoS attacks." },
              { title: "No public database access", desc: "Our databases have no public-facing endpoints. Access is only possible from within the VPC through authenticated application services." },
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

        {/* 3. Account Aggregator Compliance */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Account Aggregator Compliance</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="RBI-regulated" />
            <Chip label="Read-only" />
            <Chip label="NBFC-AA" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            FinFlow integrates with financial data through the RBI-regulated Account Aggregator
            framework â€” the most secure and privacy-preserving financial data sharing mechanism
            available in India.
          </p>
          <ul className="space-y-3">
            {[
              "We work exclusively with NBFC-AA licensed Account Aggregator partners regulated by the Reserve Bank of India.",
              "We never store or request your banking credentials. All authentication happens directly between you and your bank through the AA consent flow.",
              "Access is strictly read-only. FinFlow cannot initiate any transaction, transfer, or modification to any linked financial account.",
              "Each consent is purpose-limited, time-bound, and revocable. You remain in complete control of what data is shared and for how long.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Access Controls */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Access Controls</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="RBAC" />
            <Chip label="MFA enforced" />
            <Chip label="Zero-trust" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            Access to production systems is tightly controlled and monitored. We apply
            the principle of least privilege across all internal systems.
          </p>
          <ul className="space-y-3">
            {[
              { title: "Role-based access (RBAC)", desc: "Every internal user is assigned the minimum permissions required for their role. Access to customer data is restricted to a small subset of our engineering and support team with explicit justification." },
              { title: "MFA for all team access", desc: "Multi-factor authentication is mandatory for every team member accessing internal systems, cloud consoles, and code repositories. No exceptions." },
              { title: "Zero-trust network", desc: "We do not assume trust based on network location. Every internal service-to-service call is authenticated via short-lived tokens." },
              { title: "Full audit logs", desc: "Every privileged action â€” including any access to customer data â€” is logged with timestamp, identity, and justification. Logs are immutable and retained for 12 months." },
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

        {/* 5. SOC 2 Type II */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">SOC 2 Type II</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="In progress" />
            <Chip label="Expected Q4 2026" />
            <Chip label="Annual pentest" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            We are currently undergoing SOC 2 Type II certification with an expected completion
            date of Q4 2026. SOC 2 Type II examines our security controls over a 6-month observation
            period, providing independent assurance that our practices match our commitments.
          </p>
          <ul className="space-y-2">
            {[
              "Annual penetration testing conducted by an independent third-party security firm.",
              "Quarterly internal security reviews of controls, policies, and access logs.",
              "Upon completion, SOC 2 Type II reports will be available to Business and Enterprise customers under NDA.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 6. Data Residency */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Data Residency</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="India only" />
            <Chip label="Mumbai (ap-south-1)" />
          </div>
          <p className="text-slate-300 leading-relaxed">
            All customer data â€” including financial records, personal information, and derived
            insights â€” is stored exclusively in India in the AWS Mumbai (ap-south-1) region.
            We do not transfer, replicate, or back up personal financial data to any location
            outside India. This complies with RBI data localisation requirements for financial data.
          </p>
        </div>

        {/* 7. Vulnerability Disclosure */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Vulnerability Disclosure</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="24h ACK SLA" />
            <Chip label="Responsible disclosure" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            We operate a responsible disclosure programme. If you discover a potential security
            vulnerability in the FinFlow platform, we ask that you report it to us privately so
            we can investigate and remediate before any public disclosure.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Email your findings to security@finflow.in with as much detail as possible.",
              "We will acknowledge your report within 24 hours and provide a status update within 7 days.",
              "We ask that you do not publicly disclose the vulnerability until we have had a reasonable opportunity to address it (coordinated disclosure).",
              "We commit to not taking legal action against researchers who follow this policy in good faith.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-300">
            Contact:{" "}
            <a href="mailto:security@finflow.in" className="text-blue-400 hover:underline">
              security@finflow.in
            </a>
          </p>
        </div>

        {/* 8. Incident Response */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2">Incident Response</h2>
          <div className="flex flex-wrap mb-5">
            <Chip label="4h detection SLA" />
            <Chip label="72h notification" />
            <Chip label="CERT-In compliant" />
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            We maintain a dedicated security incident response process with defined SLAs at each stage.
          </p>
          <ul className="space-y-3">
            {[
              { title: "Detection", desc: "Automated anomaly detection with a 4-hour SLA for identifying and escalating potential security incidents." },
              { title: "Containment", desc: "Immediate containment steps are initiated upon confirmation of an incident, including isolation of affected systems." },
              { title: "Customer notification", desc: "Affected customers will be notified within 72 hours of a confirmed breach, in compliance with CERT-In (Indian Computer Emergency Response Team) reporting requirements." },
              { title: "Post-incident review", desc: "Every incident is followed by a detailed post-mortem with root-cause analysis and corrective action plan, shared with affected customers upon request." },
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

        {/* 9. Bug Bounty */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">Bug Bounty</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We recognise and appreciate the work of security researchers who help keep FinFlow
            safe. Our bug bounty programme provides:
          </p>
          <ul className="space-y-2">
            {[
              "Public hall of fame recognition on our security page for valid, responsibly disclosed vulnerabilities.",
              "Direct acknowledgement from our security team for every valid report.",
              "Priority consideration for high-severity findings, with coordinated disclosure timelines tailored to impact.",
              "Formal monetary bounty programme planned for launch in Q1 2027 â€” register your interest at security@finflow.in.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 10. Contact Security Team */}
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-4">Contact the Security Team</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            For security disclosures, questions about our security posture, or to request our
            security documentation (pentest summaries, SOC 2 reports upon completion):
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>
              Email:{" "}
              <a href="mailto:security@finflow.in" className="text-blue-400 hover:underline">
                security@finflow.in
              </a>
            </li>
            <li>PGP key available on request for encrypted disclosures.</li>
            <li>Response SLA: 24 hours for security reports, 48 hours for general enquiries.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
