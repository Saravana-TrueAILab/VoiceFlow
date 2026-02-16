import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import MeetingDetails from './MeetingDetails';
import KanbanBoard from './KanbanBoard';
import Analytics from './Analytics';
import Integrations from './Integrations';
import Settings from './Settings';
import MeetingRecording from './MeetingRecording';
import { useState, useEffect } from 'react';
import {
  MdGraphicEq,
  MdLightMode,
  MdDarkMode,
  MdClose,
  MdMenu,
  MdPlayCircle,
  MdCheck,
  MdMic,
  MdAutoAwesome,
  MdTaskAlt,
  MdIntegrationInstructions,
  MdCalendarToday,
  MdVideoCameraFront,
  MdPsychology,
  MdEditNote,
  MdIosShare
} from 'react-icons/md';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meeting-details" element={<MeetingDetails />} />
      <Route path="/tasks" element={<KanbanBoard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/recording" element={<MeetingRecording />} />
    </Routes>
  );
}

function LandingPage({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-display bg-background-light dark:bg-black text-slate-900 dark:text-white antialiased selection:bg-primary/30 min-h-screen transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <MdGraphicEq className="text-xl" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">VoiceFlow</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Pricing</a>
              <button onClick={() => navigate('/dashboard')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Dashboard</button>
            </div>

            {/* CTA & Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  <MdLightMode className="text-xl" />
                ) : (
                  <MdDarkMode className="text-xl" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <MdClose className="text-xl" /> : <MdMenu className="text-xl" />}
              </button>

              <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Log in</a>
                <a href="#" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">How it Works</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Pricing</a>
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
              <a href="#" className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Log in</a>
              <a href="#" className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg text-base font-semibold shadow-lg text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 blob-bg -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8 animate-[fadeInUp_0.5s_ease-out_forwards]">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Now integrated with Zoom, Teams & Meet
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Turn Meetings Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Actionable Tasks</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Stop taking notes. Let our AI transcribe, summarize, and extract action items from your calls automatically. Focus on the conversation, not the keyboard.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-1 text-center">
              Start for free
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group">
              <MdPlayCircle className="text-2xl text-primary group-hover:scale-110 transition-transform" />
              Watch Demo
            </a>
          </div>

          {/* Hero Mockup/Abstract Representation */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-300 rounded-2xl blur opacity-20 dark:opacity-40"></div>
            <div className="relative bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWLkC3hHL1rTIpDsHKj_zx5Jl1haJjmmNitzoVGnCM8ae4WsS6O0Fd1iV7WitW9JbxGNoR-_dCiLAGivGaROW6zYDxmW_w1a9XAvEN5mkK33Bl3X-ARHnSC9kP5sSklN71vCZ6OYcKpjSSBOXhO0U36nqd4f-360qp6f37EUkO38lETafBO7HyjjALKZArEIuPYfYhQohYkTNs6DjoWc-BSBUR6--JmDr97XdN-gF47wuPH6RIGBlp7cLy7kl2pWrMBy2atk1zT3cD"
                alt="Abstract software interface showing clean data visualization and task lists"
                className="w-full h-full object-cover opacity-90 dark:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent"></div>

              {/* Floating UI Card Simulation */}
              <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-12 md:bottom-12 md:w-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur shadow-lg rounded-xl p-4 border border-slate-100 dark:border-slate-700 animate-bounce-slow" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <MdCheck className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Action Item Detected</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Send Q3 report by Friday</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary w-3/4 h-full"></div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted by modern teams at</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">ACME Corp</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">GlobalTech</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">Nebula</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">FoxRun</span>
                <span className="text-xl font-bold text-slate-400 dark:text-slate-500">Circle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Everything you need to run better meetings</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Our AI doesn't just listen; it understands context, identifies speakers, and organizes your workflow.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<MdMic className="text-3xl" />}
              title="Real-time Transcription"
              description="Get 99% accurate speech-to-text in over 30 languages. Identify who said what with advanced speaker diarization automatically applied to every recording."
            />
            <FeatureCard
              icon={<MdAutoAwesome className="text-3xl" />}
              title="Smart Summaries"
              description="Don't re-watch hour-long calls. Get the gist in 30 seconds with bulleted summaries, key takeaways, and emotional sentiment analysis generated instantly."
            />
            <FeatureCard
              icon={<MdTaskAlt className="text-3xl" />}
              title="Action Item Extraction"
              description="Our AI detects commitments and tasks. 'I'll send the contract by Tuesday' becomes a task assigned to you with a due date automatically."
            />
            <FeatureCard
              icon={<MdIntegrationInstructions className="text-3xl" />}
              title="Seamless Sync"
              description="Push summaries and tasks directly to the tools you already use. Deep integrations with Notion, Slack, Jira, Salesforce, and HubSpot."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Five simple steps to automated meeting productivity.</p>
          </div>
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              <Step icon={<MdCalendarToday className="text-3xl" />} title="1. Connect" description="Sync your Google or Outlook calendar in one click." />
              <Step icon={<MdVideoCameraFront className="text-3xl" />} title="2. Join" description="Our bot automatically joins your scheduled calls." />
              <Step icon={<MdPsychology className="text-3xl" />} title="3. Analyze" description="AI transcribes and extracts key insights in real-time." highlight />
              <Step icon={<MdEditNote className="text-3xl" />} title="4. Review" description="Edit the summary or highlights if needed." />
              <Step icon={<MdIosShare className="text-3xl" />} title="5. Export" description="Push tasks to your project management tools." />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Choose the plan that fits your team's size.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Starter"
              price="$0"
              features={['5 meetings/month', 'Basic transcription', 'Email support']}
              cta="Start Free"
            />
            <PricingCard
              title="Pro"
              price="$15"
              features={['Unlimited meetings', 'Advanced AI summaries', 'Slack & Notion integration', 'Search across all meetings']}
              cta="Get Pro"
              popular
            />
            <PricingCard
              title="Business"
              price="Custom"
              features={['Everything in Pro', 'SSO & Admin controls', 'Dedicated success manager', 'Custom API access']}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white">
                  <MdGraphicEq className="text-xs" />
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white">VoiceFlow</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Making meetings productive again with the power of artificial intelligence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="sr-only">Twitter</span><FaTwitter className="text-lg" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="sr-only">LinkedIn</span><FaLinkedin className="text-lg" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="sr-only">GitHub</span><FaGithub className="text-lg" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">© 2026 VoiceFlow Inc. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-slate-500 hover:text-primary">Security</a>
              <a href="#" className="text-sm text-slate-500 hover:text-primary">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 bg-background-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Step({ icon, title, description, highlight = false }: { icon: React.ReactNode, title: string, description: string, highlight?: boolean }) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className={`w-24 h-24 bg-white dark:bg-black border-4 ${highlight ? 'border-primary shadow-xl shadow-primary/20' : 'border-slate-100 dark:border-slate-800 group-hover:border-primary/30'} rounded-full flex items-center justify-center mb-6 z-10 transition-colors shadow-lg`}>
        <div className={`text-primary ${highlight ? 'animate-pulse' : ''}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 px-2">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, cta, popular = false }: { title: string, price: string, features: string[], cta: string, popular?: boolean }) {
  return (
    <div className={`bg-white dark:bg-black rounded-2xl shadow-lg border ${popular ? 'border-2 border-primary shadow-xl shadow-primary/10 transform md:-translate-y-4 relative' : 'border-slate-200 dark:border-slate-800'} p-8 flex flex-col`}>
      {popular && (
        <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{price}</span>
        {price !== 'Custom' && <span className="text-slate-500 ml-2">/month</span>}
      </div>
      <p className="text-slate-500 text-sm mb-6">
        {title === 'Starter' && 'Perfect for individuals trying out AI notes.'}
        {title === 'Pro' && 'For professionals who need power features.'}
        {title === 'Business' && 'For large teams requiring control & security.'}
      </p>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className={`mr-2 mt-1 ${popular ? 'text-primary' : 'text-green-500'}`}>
              <MdCheck className="text-sm" />
            </span>
            <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${popular ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25' : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'}`}>
        {cta}
      </a>
    </div>
  );
}

export default App;
