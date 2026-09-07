import { type FormEvent, type ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Code2,
  Copy,
  Database,
  Github,
  Gauge,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sun,
  Wrench,
  X,
} from "lucide-react";
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from "wouter";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const identity = {
  name: "Ahmed Farid",
  role: "Full Stack Engineer",
  location: "Working globally .",
  email: "ahmedfaridd01@gmail.com",
  availability: "Taking on one new product partnership",
  intro: "I build the systems behind ambitious digital products.",
};

const serviceGroups = [
  {
    id: "product-builds",
    number: "01",
    title: "Product builds",
    description:
      "From the first sharp brief to a durable v1, I turn a product idea into a clear, working, shipped system.",
    icon: Layers3,
    items: [
      "Product strategy & technical direction",
      "Web applications and internal tools",
      "Design systems that survive the roadmap",
    ],
  },
  {
    id: "systems",
    number: "02",
    title: "Backend systems",
    description:
      "The unglamorous, important layer: fast APIs, sound data models, authentication, integrations and observable infrastructure.",
    icon: Server,
    items: [
      "API design and service architecture",
      "Postgres schemas, migrations and data work",
      "Auth, permissions and third-party integrations",
    ],
  },
  {
    id: "reliability",
    number: "03",
    title: "Reliability & growth",
    description:
      "A launch is a starting line. I improve the product after the applause, so it stays fast, findable and maintainable.",
    icon: Gauge,
    items: [
      "Performance budgets and Core Web Vitals",
      "Deployment, monitoring and incident readiness",
      "Technical SEO and long-term support",
    ],
  },
];

const capabilities = [
  {
    label: "Product interfaces",
    detail: "React · TypeScript · accessible systems",
    icon: Code2,
  },
  {
    label: "Application layer",
    detail: "Node · APIs · queues · integrations",
    icon: Server,
  },
  {
    label: "Data & identity",
    detail: "Postgres · auth · permissions · migrations",
    icon: Database,
  },
  {
    label: "Operations",
    detail: "CI/CD · observability · performance · SEO",
    icon: ShieldCheck,
  },
];

const engagements = [
  {
    phase: "Discover",
    title: "Make the unknown smaller.",
    copy: "We map the business constraint, the user’s actual job and the riskiest technical assumptions before code gets expensive.",
  },
  {
    phase: "Build",
    title: "Ship the smallest honest version.",
    copy: "A tight loop of decisions, implementation and useful demos. You see the real thing early, not a slide deck with rounded corners.",
  },
  {
    phase: "Run",
    title: "Stay close after launch.",
    copy: "Measure, tune and maintain the system. The goal is not hand-off; it is a product your team can keep moving with confidence.",
  },
];

const selectedWork = [
  {
    index: "Ahmed Farid",
    kind: "Product platform",
    title: "Replace this with a representative project",
    description:
      "A concise case-study slot for a product, outcome and the engineering decisions that made it work.",
    tags: ["Web app", "API", "Launch"],
  },
  {
    index: "B",
    kind: "Operational system",
    title: "Replace this with a second proof point",
    description:
      "Show the kind of complex workflow you can make feel calm, legible and dependable for a real team.",
    tags: ["Internal tool", "Data", "UX"],
  },
  {
    index: "C",
    kind: "Performance pass",
    title: "Replace this with a measurable improvement",
    description:
      "A place to explain how careful engineering made a site faster, easier to find and more useful.",
    tags: ["Performance", "SEO", "Care"],
  },
];

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("portfolio-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/.54)] text-[hsl(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--primary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      data-testid="button-theme-toggle"
    >
      {dark ? (
        <Sun size={16} strokeWidth={1.7} />
      ) : (
        <Moon size={16} strokeWidth={1.7} />
      )}
    </button>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Overview" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative z-30 border-b border-[hsl(var(--border)/.75)]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          data-testid="link-brand"
        >
          <span className="flex h-9 w-9 items-center justify-center bg-[hsl(var(--foreground))] text-xs font-bold text-[hsl(var(--background))] transition group-hover:rotate-[-8deg]">
            AM
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            Ahmed Farid{" "}
            <span className="font-mono-label ml-1 text-[10px] font-normal uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
              / engineer
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono-label text-[10px] uppercase tracking-[.16em] transition hover:text-[hsl(var(--primary))] ${location === item.href ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"}`}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-[hsl(var(--border)/.75)] px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3 text-sm font-semibold"
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
                <ArrowUpRight
                  size={15}
                  className="text-[hsl(var(--primary))]"
                />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="font-display text-3xl italic">
            Good products deserve solid ground.
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-[hsl(var(--muted-foreground))]">
            A considered engineering partner for teams who care what happens
            after the launch tweet.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm lg:items-end">
          <a
            href={`mailto:${identity.email}`}
            className="flex items-center gap-2 transition hover:text-[hsl(var(--primary))]"
            data-testid="link-footer-email"
          >
            <Mail size={15} />
            {identity.email}
          </a>
          <span className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
            <MapPin size={15} />
            {identity.location}
          </span>
          <div className="mt-3 flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="GitHub placeholder"
              className="transition hover:text-[hsl(var(--foreground))]"
              data-testid="link-footer-github"
            >
              <Github size={17} />
            </a>
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="LinkedIn placeholder"
              className="transition hover:text-[hsl(var(--foreground))]"
              data-testid="link-footer-linkedin"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-2 border-t border-[hsl(var(--border)/.65)] px-5 py-5 font-mono-label text-[9px] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>
          © {new Date().getFullYear()} {identity.name}
        </span>
        <span>Available for thoughtful work</span>
      </div>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="grain min-h-[100dvh] bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-label mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary))]">
      <span className="h-px w-7 bg-[hsl(var(--primary))]" />
      {children}
    </p>
  );
}

function Home() {
  usePageMeta(
    "Alex Mercer — Full Stack Engineer",
    "Full Stack Engineer building, launching, and improving the websites, web applications, APIs, and systems behind ambitious digital products.",
    "/",
  );
  return (
    <Shell>
      <main>
        <section className="paper-grid relative overflow-hidden border-b border-[hsl(var(--border))]">
          <div className="mx-auto grid max-w-[1240px] gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-10 lg:pb-28">
            <div className="relative z-10">
              <div className="animate-rise flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--primary)/.35)]" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[hsl(var(--primary))]" />
                </span>
                <span className="font-mono-label text-[10px] uppercase tracking-[.17em] text-[hsl(var(--muted-foreground))]">
                  {identity.availability}
                </span>
              </div>
              <h1 className="animate-rise-delay-1 mt-8 max-w-4xl text-[clamp(3.6rem,9vw,8.8rem)] font-semibold leading-[.86] tracking-[-.08em]">
                <span className="block">Build it.</span>
                <span className="font-display block font-normal italic text-[hsl(var(--primary))]">
                  Make it last.
                </span>
              </h1>
              <p className="animate-rise-delay-2 mt-9 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))] sm:text-xl">
                {identity.intro} From first database migration to the hundredth
                release, I make the technical side feel clear.
              </p>
              <div className="animate-rise-delay-3 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--foreground))]"
                  data-testid="link-hero-contact"
                >
                  Start a conversation{" "}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-semibold"
                  data-testid="link-hero-services"
                >
                  Explore services{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[340px] items-end lg:items-center">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full border border-[hsl(var(--primary)/.4)] sm:h-80 sm:w-80" />
              <div className="absolute right-12 top-12 h-40 w-40 rounded-full bg-[hsl(var(--accent))] sm:right-20 sm:top-20 sm:h-52 sm:w-52" />
              <div className="relative ml-auto w-full max-w-[390px] border border-[hsl(var(--foreground))] bg-[hsl(var(--background)/.88)] p-5 backdrop-blur-sm sm:p-7">
                <div className="mb-12 flex items-center justify-between font-mono-label text-[9px] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))]">
                  <span>System note / 001</span>
                  <span className="text-[hsl(var(--primary))]">Live</span>
                </div>
                <p className="font-display text-4xl leading-[.96] sm:text-5xl">
                  Clarity is a technical advantage.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-3 border-t border-[hsl(var(--border))] pt-4">
                  <div>
                    <span className="font-mono-label block text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Focus
                    </span>
                    <strong className="mt-1 block text-sm">
                      Whole systems
                    </strong>
                  </div>
                  <div>
                    <span className="font-mono-label block text-[9px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">
                      Mode
                    </span>
                    <strong className="mt-1 block text-sm">
                      Close partner
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[1240px] items-center justify-between border-t border-[hsl(var(--border)/.75)] px-5 py-4 sm:px-8 lg:px-10">
            <span className="font-mono-label text-[9px] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">
              Scroll to inspect the work
            </span>
            <ChevronDown size={16} className="text-[hsl(var(--primary))]" />
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>The full stack, deliberately</SectionLabel>
              <h2 className="max-w-sm text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-5xl">
                No gaps between the idea and the outcome.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-8 text-[hsl(var(--muted-foreground))]">
                The best product work is not a handoff chain. It is one
                connected system: a useful interface, a sound backend, a
                database you can trust and an operating rhythm that keeps the
                whole thing healthy.
              </p>
              <div className="mt-12 grid gap-0 border-y border-[hsl(var(--border))] sm:grid-cols-2">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <div
                      key={capability.label}
                      className="group border-b border-[hsl(var(--border))] py-5 sm:even:border-l sm:even:pl-6 sm:last:border-b-0 sm:nth-[3]:border-b-0"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[hsl(var(--primary))] transition-transform group-hover:rotate-[-8deg]"
                      />
                      <p className="mt-4 font-semibold">{capability.label}</p>
                      <p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                        {capability.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <SectionLabel>Selected work / placeholders</SectionLabel>
                <h2 className="max-w-2xl text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">
                  Proof beats polish.
                </h2>
              </div>
              <span className="font-mono-label max-w-[210px] text-[10px] uppercase leading-5 tracking-[.12em] text-[hsl(var(--secondary-foreground)/.55)]">
                Replace these editorial slots with the work you are proud to
                defend.
              </span>
            </div>
            <div className="mt-14 divide-y divide-[hsl(var(--secondary-foreground)/.18)] border-y border-[hsl(var(--secondary-foreground)/.18)]">
              {selectedWork.map((work) => (
                <article
                  key={work.index}
                  className="group grid gap-7 py-8 sm:grid-cols-[76px_1fr_auto] sm:items-start"
                >
                  <span className="font-display text-5xl italic text-[hsl(var(--primary))]">
                    {work.index}
                  </span>
                  <div>
                    <span className="font-mono-label text-[9px] uppercase tracking-[.18em] text-[hsl(var(--secondary-foreground)/.55)]">
                      {work.kind}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-.03em] transition-colors group-hover:text-[hsl(var(--accent))] sm:text-3xl">
                      {work.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[hsl(var(--secondary-foreground)/.68)]">
                      {work.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[hsl(var(--secondary-foreground)/.25)] px-2 py-1 font-mono-label text-[9px] uppercase tracking-[.12em] text-[hsl(var(--secondary-foreground)/.6)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-[hsl(var(--primary))] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:mt-1"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel>How I work</SectionLabel>
              <h2 className="max-w-sm text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-5xl">
                A calmer way to move fast.
              </h2>
            </div>
            <div className="divide-y border-y border-[hsl(var(--border))]">
              {engagements.map((engagement, index) => (
                <div
                  key={engagement.phase}
                  className="grid gap-5 py-7 sm:grid-cols-[130px_1fr]"
                >
                  <span className="font-mono-label text-[10px] uppercase tracking-[.16em] text-[hsl(var(--primary))]">
                    0{index + 1} / {engagement.phase}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-.035em]">
                      {engagement.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                      {engagement.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="paper-grid border-t border-[hsl(var(--border))]">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-28">
            <div>
              <SectionLabel>Next move</SectionLabel>
              <h2 className="max-w-3xl text-5xl font-semibold leading-[.9] tracking-[-.07em] sm:text-7xl">
                Have a hard problem?
                <br />
                <span className="font-display font-normal italic text-[hsl(var(--primary))]">
                  Let’s make it legible.
                </span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border-b border-[hsl(var(--foreground))] pb-3 text-sm font-semibold"
              data-testid="link-home-final-contact"
            >
              Tell me what you’re building{" "}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}

function Services() {
  usePageMeta(
    "Services — Alex Mercer, Full Stack Engineer",
    "Full stack product builds, backend systems, performance optimization, technical SEO, and ongoing engineering support for ambitious teams.",
    "/services",
  );
  return (
    <Shell>
      <main>
        <section className="paper-grid border-b border-[hsl(var(--border))]">
          <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-24">
            <SectionLabel>Services / the whole system</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[.86] tracking-[-.08em]">
                Build the right thing.
                <br />
                <span className="font-display font-normal italic text-[hsl(var(--primary))]">
                  Keep it right.
                </span>
              </h1>
              <p className="max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">
                A flexible engagement for founders, product teams and businesses
                who need a senior engineer that can see past the ticket in front
                of them.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="divide-y border-y border-[hsl(var(--border))]">
            {serviceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.id}
                  className="grid gap-9 py-10 lg:grid-cols-[100px_1fr_1fr] lg:gap-12 lg:py-14"
                >
                  <div className="flex items-start justify-between lg:block">
                    <span className="font-display text-5xl italic text-[hsl(var(--primary))]">
                      {group.number}
                    </span>
                    <Icon
                      size={26}
                      strokeWidth={1.4}
                      className="text-[hsl(var(--muted-foreground))] lg:mt-16"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
                      {group.title}
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-7 text-[hsl(var(--muted-foreground))]">
                      {group.description}
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm lg:pt-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 leading-6"
                      >
                        <Check
                          size={15}
                          className="mt-1 shrink-0 text-[hsl(var(--primary))]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
        <section className="border-y border-[hsl(var(--border))] bg-[hsl(var(--muted)/.35)]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <SectionLabel>Typical engagement</SectionLabel>
                <h2 className="max-w-md text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-5xl">
                  The shape changes.
                  <br />
                  <span className="font-display font-normal italic">
                    The care doesn’t.
                  </span>
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
                  <Rocket size={21} className="text-[hsl(var(--primary))]" />
                  <h3 className="mt-8 text-lg font-semibold">
                    A focused build
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    For a defined product or feature that needs senior ownership
                    from architecture to release.
                  </p>
                </div>
                <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
                  <Wrench size={21} className="text-[hsl(var(--primary))]" />
                  <h3 className="mt-8 text-lg font-semibold">
                    An ongoing partner
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    For teams that want a steady technical counterpart for
                    improvements, maintenance and what comes next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10 lg:py-28">
          <div>
            <SectionLabel>Good fit?</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
              Bring the messy version.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--foreground))] lg:mt-0"
            data-testid="link-services-contact"
          >
            Start with a note{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </section>
      </main>
    </Shell>
  );
}

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  timeline: string;
};

function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    const origin = window.location.origin;
    const canonical = `${origin}${path}`;

    const setMeta = (
      selector: string,
      attribute: "name" | "property",
      value: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(
          attribute,
          selector.match(/["']([^"']+)["']/)?.[1] ?? "",
        );
        document.head.appendChild(element);
      }
      element.content = value;
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[name="twitter:title"]', "name", title);
    setMeta('meta[name="twitter:description"]', "name", description);

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [description, path, title]);
}

function Contact() {
  usePageMeta(
    "Contact — Alex Mercer, Full Stack Engineer",
    "Start a conversation about a website, web application, backend system, or ongoing technical partnership.",
    "/contact",
  );
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactForm, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Use a valid email address.";
    if (form.message.trim().length < 24)
      nextErrors.message =
        "A little more context helps — 24 characters minimum.";
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), 2200);
  };

  return (
    <Shell>
      <main>
        <section className="paper-grid border-b border-[hsl(var(--border))]">
          <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-20">
            <SectionLabel>Contact / make an introduction</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[.86] tracking-[-.08em]">
                Tell me what’s
                <br />
                <span className="font-display font-normal italic text-[hsl(var(--primary))]">
                  worth building.
                </span>
              </h1>
              <p className="max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">
                No polished brief required. Tell me what is stuck, what is
                changing or what you want to exist six months from now.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1240px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[.68fr_1.32fr] lg:px-10 lg:py-28">
          <aside>
            <SectionLabel>Direct line</SectionLabel>
            <h2 className="max-w-xs text-3xl font-semibold leading-tight tracking-[-.045em]">
              The form is useful. Email is faster.
            </h2>
            <div className="mt-8 border-y border-[hsl(var(--border))] py-5">
              <a
                href={`mailto:${identity.email}`}
                className="group flex items-center justify-between gap-4 text-sm font-semibold"
                data-testid="link-contact-email"
              >
                <span>{identity.email}</span>
                <ArrowUpRight
                  size={16}
                  className="text-[hsl(var(--primary))] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-5 inline-flex items-center gap-2 font-mono-label text-[9px] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))] transition hover:text-[hsl(var(--foreground))]"
                data-testid="button-copy-email"
              >
                <Copy size={13} />
                {copyState === "copied"
                  ? "Copied to clipboard"
                  : copyState === "failed"
                    ? "Copy unavailable"
                    : "Copy email address"}
              </button>
            </div>
            <p className="mt-7 flex items-start gap-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              <MapPin
                size={15}
                className="mt-1 shrink-0 text-[hsl(var(--primary))]"
              />
              {identity.location}
              <span className="ml-2">Open to remote collaboration.</span>{" "}
            </p>
          </aside>
          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border-t border-[hsl(var(--foreground))] pt-7"
              data-testid="form-contact"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Your name{" "}
                    <span className="text-[hsl(var(--primary))]">*</span>
                  </span>
                  <input
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]"
                    placeholder="How should I address you?"
                    autoComplete="name"
                    data-testid="input-contact-name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <span className="mt-2 block text-xs text-[hsl(var(--destructive))]">
                      {errors.name}
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Email <span className="text-[hsl(var(--primary))]">*</span>
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]"
                    placeholder="you@company.com"
                    autoComplete="email"
                    data-testid="input-contact-email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className="mt-2 block text-xs text-[hsl(var(--destructive))]">
                      {errors.email}
                    </span>
                  )}
                </label>
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Phone
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]"
                    placeholder="Optional"
                    autoComplete="tel"
                    data-testid="input-contact-phone"
                  />
                </label>
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Company / project
                  </span>
                  <input
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]"
                    placeholder="Optional context"
                    data-testid="input-contact-company"
                  />
                </label>
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Service required
                  </span>
                  <select
                    value={form.service}
                    onChange={(event) =>
                      updateField("service", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition focus:border-[hsl(var(--primary))]"
                    data-testid="select-contact-service"
                  >
                    <option value="">Choose a service</option>
                    <option value="full-stack">Full stack development</option>
                    <option value="website">Business website</option>
                    <option value="web-app">Web application</option>
                    <option value="backend-api">
                      Backend & API development
                    </option>
                    <option value="redesign">Website redesign</option>
                    <option value="maintenance">Maintenance & support</option>
                    <option value="seo-performance">SEO & performance</option>
                    <option value="integration">API integration</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Project budget
                  </span>
                  <select
                    value={form.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition focus:border-[hsl(var(--primary))]"
                    data-testid="select-contact-budget"
                  >
                    <option value="">Choose a range</option>
                    <option value="under-5k">Under $5k</option>
                    <option value="5k-15k">$5k–$15k</option>
                    <option value="15k-30k">$15k–$30k</option>
                    <option value="30k-plus">$30k+</option>
                    <option value="ongoing">Ongoing support</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                    Timeline
                  </span>
                  <select
                    value={form.timeline}
                    onChange={(event) =>
                      updateField("timeline", event.target.value)
                    }
                    className="mt-3 w-full border-0 border-b border-[hsl(var(--border))] bg-transparent px-0 py-3 text-base outline-none transition focus:border-[hsl(var(--primary))]"
                    data-testid="select-contact-timeline"
                  >
                    <option value="">Choose a rough window</option>
                    <option value="exploring">Just exploring</option>
                    <option value="this-quarter">This quarter</option>
                    <option value="soon">As soon as possible</option>
                  </select>
                </label>
              </div>
              <label className="mt-8 block">
                <span className="font-mono-label text-[9px] uppercase tracking-[.16em]">
                  What are you working through?{" "}
                  <span className="text-[hsl(var(--primary))]">*</span>
                </span>
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  className="mt-3 min-h-36 w-full resize-y border border-[hsl(var(--border))] bg-[hsl(var(--card)/.45)] p-4 text-base outline-none transition placeholder:text-[hsl(var(--muted-foreground)/.7)] focus:border-[hsl(var(--primary))]"
                  placeholder="A sentence or two about the problem, product or opportunity."
                  data-testid="textarea-contact-message"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <span className="mt-2 block text-xs text-[hsl(var(--destructive))]">
                    {errors.message}
                  </span>
                )}
              </label>
              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition hover:-translate-y-0.5 hover:bg-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
                  data-testid="button-submit-contact"
                >
                  Validate introduction{" "}
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <span className="max-w-sm text-xs leading-5 text-[hsl(var(--muted-foreground))]">
                  This demo validates your note locally. It does not send email
                  or store your details.
                </span>
              </div>
              {status === "success" && (
                <div
                  className="mt-7 flex items-start gap-3 border border-[hsl(var(--primary)/.45)] bg-[hsl(var(--primary)/.08)] p-4 text-sm leading-6"
                  role="status"
                  data-testid="status-contact-success"
                >
                  <CircleCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-[hsl(var(--primary))]"
                  />
                  <span>
                    <strong className="font-semibold">
                      Your introduction is ready.
                    </strong>{" "}
                    The form is valid, but no message was sent from this demo.
                    Please use the email above to send it for real.
                  </span>
                </div>
              )}
              {status === "error" && (
                <div
                  className="mt-7 flex items-start gap-3 border border-[hsl(var(--destructive)/.5)] bg-[hsl(var(--destructive)/.07)] p-4 text-sm leading-6"
                  role="alert"
                  data-testid="status-contact-error"
                >
                  <CircleAlert
                    size={18}
                    className="mt-0.5 shrink-0 text-[hsl(var(--destructive))]"
                  />
                  <span>
                    <strong className="font-semibold">
                      A few details need attention.
                    </strong>{" "}
                    Check the highlighted fields and try again.
                  </span>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </Shell>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <RoutedErrorBoundary>
            <Router />
          </RoutedErrorBoundary>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
