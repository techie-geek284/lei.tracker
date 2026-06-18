import { scrollToSection } from '../../lib/utils'

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.849L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const PRODUCT_LINKS = ['Features', 'Pricing', 'AI', 'Integrations', 'Changelog']
const COMPANY_LINKS = ['About', 'Blog', 'Careers', 'Press', 'Contact']
const LEGAL_LINKS = ['Privacy', 'Terms', 'Security', 'GDPR', 'Cookie Policy']

const SOCIAL = [
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: LinkedInIcon, label: 'LinkedIn' },
  { icon: GitHubIcon, label: 'GitHub' },
  { icon: YouTubeIcon, label: 'YouTube' },
]

export const Footer = () => (
  <footer className="bg-[#0a0f1e] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div className="col-span-2 md:col-span-1">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-black gradient-text mb-3"
          >
            FinFlow
          </button>
          <p className="text-sm text-slate-400 mb-6 max-w-xs">
            Your entire financial universe in one platform.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mb-6">
            {SOCIAL.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* App store placeholders */}
          <div className="flex gap-2">
            <div className="glass px-3 py-2 rounded-lg text-xs text-slate-400 cursor-pointer hover:bg-white/10 transition-colors">
              App Store
            </div>
            <div className="glass px-3 py-2 rounded-lg text-xs text-slate-400 cursor-pointer hover:bg-white/10 transition-colors">
              Google Play
            </div>
          </div>
        </div>

        {/* Column 2: Product */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5">Product</h4>
          <ul className="space-y-3">
            {PRODUCT_LINKS.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5">Company</h4>
          <ul className="space-y-3">
            {COMPANY_LINKS.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5">Legal</h4>
          <ul className="space-y-3">
            {LEGAL_LINKS.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          © 2026 FinFlow Technologies Pvt Ltd. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">Made with ♥ in India 🇮🇳</p>
      </div>
    </div>
  </footer>
)
