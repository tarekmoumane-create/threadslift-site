import Link from "next/link";
import { BookingForm } from "./booking-form";
import { FaqList } from "./faq-disclosure";

const CTA_HREF = "#book";
const CTA_LABEL = "Learn more";

const TESTIMONIALS = {
  conversion: {
    quote:
      "We were spending five figures a month on paid search and getting crickets from our actual target audience. Three months in with these guys, our brand started showing up in the exact threads our customers were already searching. The traffic converts at almost double what our paid channels do.",
    short: "The traffic converts at almost double what our paid channels do.",
    name: "James M.",
    role: "Founder",
    sector: "B2B SaaS, Series A",
  },
  shill: {
    quote:
      "I was skeptical that you could “do” Reddit without sounding like a corporate shill. They proved me wrong. Our presence actually feels like it belongs there, and our sign-ups from Reddit-driven Google searches have tripled.",
    short:
      "Our sign-ups from Reddit-driven Google searches have tripled, and our presence actually feels like it belongs there.",
    name: "Priya N.",
    role: "Head of Growth",
    sector: "DTC apparel brand",
  },
  viral: {
    quote:
      "What sold me was that they didn’t pitch me on going viral. They pitched me on showing up consistently in the conversations that already mattered for our category. Six months later, we rank on the first page of Google for searches we couldn’t crack with traditional SEO.",
    name: "Daniel R.",
    role: "Marketing Director",
    sector: "Fintech startup",
  },
  compound: {
    quote:
      "Honestly the best money we spend each month. The compounding is real. Threads they helped us land in over a year ago are still driving qualified traffic and trial signups today.",
    name: "Sarah K.",
    role: "Co-founder",
    sector: "Productivity app",
  },
  inbound: {
    quote:
      "Our sales team started getting inbound leads who said they “kept seeing us on Reddit.” That had never happened with any other channel. It changed how we think about brand building entirely.",
    name: "Marcus T.",
    role: "VP of Marketing",
    sector: "E-commerce",
  },
  inhouse: {
    quote:
      "We tried running our own Reddit strategy in-house for almost a year and got nowhere. These guys understood the culture in a way we just couldn’t replicate. Within the first quarter we were getting more qualified traffic from Reddit than from our blog.",
    name: "Alex H.",
    role: "CMO",
    sector: "Health & wellness brand",
  },
  roi: {
    quote:
      "The ROI math is wild. What we pay them for a month is less than what we used to burn on a single week of paid acquisition, and the traffic actually sticks around.",
    short:
      "What we pay them for a month is less than what we used to burn on a single week of paid acquisition.",
    name: "Jordan W.",
    role: "Founder",
    sector: "Consumer iOS app",
  },
};

function attribution(t: { name: string; role: string; sector: string }) {
  return `${t.name} · ${t.role}, ${t.sector}`;
}

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Problem />
        <AiSearch />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <BookingSection />
        <Footer />
      </main>
    </div>
  );
}

/* -------------------------------------------------- */
/* Header                                             */
/* -------------------------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="wordmark">
          Threadslift<span className="accent-dot">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[14px] text-[color:var(--color-text-muted)] md:flex">
          <a href="#ai" className="transition hover:text-[color:var(--color-text)]">
            AI search
          </a>
          <a href="#how" className="transition hover:text-[color:var(--color-text)]">
            How it works
          </a>
          <a href="#cases" className="transition hover:text-[color:var(--color-text)]">
            Results
          </a>
          <a href="#faq" className="transition hover:text-[color:var(--color-text)]">
            FAQ
          </a>
        </nav>
        <a href={CTA_HREF} className="btn-primary">
          {CTA_LABEL}
          <span className="arrow" aria-hidden>
            →
          </span>
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------- */
/* Hero                                               */
/* -------------------------------------------------- */

function Hero() {
  return (
    <section className="accent-glow relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1240px] px-6 pt-20 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="rise-in lg:col-span-6">
            <h1 className="display-xl max-w-[18ch]">
              The internet&rsquo;s most valuable real estate is a Reddit
              thread
            </h1>

            <p className="lede mt-7 max-w-[58ch]">
              Half the time someone Googles a buying question in your category,
              the top result is a Reddit thread. And when they ask ChatGPT or
              Perplexity instead, the answer is built from those same threads. We
              get your brand mentioned in them, the way real Redditors do.
              Mentions stay live, rank on Google, get cited by AI, and{" "}
              <span className="under-mark text-[color:var(--color-text)]">
                compound for years
              </span>
              .
            </p>

            <div className="rise-in d-1 mt-10 flex flex-wrap items-center gap-4">
              <a href={CTA_HREF} className="btn-primary">
                {CTA_LABEL}
                <span className="arrow" aria-hidden>
                  →
                </span>
              </a>
              <span className="text-[13.5px] text-[color:var(--color-text-muted)]">
                30 minutes. No pitch deck.
              </span>
            </div>
          </div>

          <div className="rise-in d-2 lg:col-span-6">
            <SerpMockup />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-bg-2)]/60">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <HeroStat
              num="< 3 mo"
              label="Average time to page 1 of Google"
            />
            <HeroStat
              num="#1"
              label="Reddit is the most-cited source in ChatGPT, Perplexity & Google AI Overviews"
              divideXMd
            />
            <HeroStat
              num="18+ mo"
              label="Threads keep driving traffic and AI citations after placement"
              divideXMd
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({
  num,
  label,
  divideXMd,
}: {
  num: string;
  label: string;
  divideXMd?: boolean;
}) {
  const cls = [
    "flex flex-col gap-2 px-6 py-7 lg:px-7 lg:py-8",
    divideXMd ? "md:border-l md:border-[color:var(--color-border)]" : "",
  ].join(" ");
  return (
    <div className={cls}>
      <span className="stat-num-sm">{num}</span>
      <span className="stat-label max-w-[26ch]">{label}</span>
    </div>
  );
}

function SerpMockup() {
  return (
    <div className="surface-card-static p-5 lg:p-6">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-text-dim)]/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-text-dim)]/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-text-dim)]/40" />
        <span className="ml-3 flex-1 truncate font-[family-name:var(--font-mono)] text-[10.5px] tracking-wide text-[color:var(--color-text-dim)]">
          google.com/search?q=best+email+tool+for+saas
        </span>
      </div>

      {/* Search query */}
      <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] text-[10px] text-[color:var(--color-text-dim)]"
          >
            G
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[12px] text-[color:var(--color-text-2)]">
            best email tool for early-stage saas
          </span>
        </div>
      </div>

      {/* Top result — Reddit thread */}
      <div className="relative mt-5">
        <span
          aria-hidden
          className="absolute -left-1.5 -top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[color:var(--color-accent)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-bold tracking-[0.08em] text-[color:var(--color-bg)]"
        >
          #1
        </span>
        <div className="rounded-xl border border-[color:var(--color-accent)]/35 bg-[color:var(--color-accent-soft)] px-4 py-4">
          <div className="flex items-center gap-1.5 text-[11px] text-[color:var(--color-text-muted)]">
            <span className="font-[family-name:var(--font-mono)]">reddit.com</span>
            <span className="opacity-60">›</span>
            <span>r/SaaS</span>
            <span className="opacity-60">›</span>
            <span className="opacity-70">comments</span>
          </div>
          <p className="mt-1.5 text-[15px] font-medium leading-snug text-[color:var(--color-text)]">
            Best email tool for early B2B SaaS? : r/SaaS
          </p>
          <p className="mt-1.5 text-[12.5px] leading-snug text-[color:var(--color-text-muted)]">
            <span className="text-[color:var(--color-accent)]">▲ 2.1k</span>{" "}
            upvotes · 380 comments · &ldquo;After running ConvertKit and a
            handful of others, the thing that actually moved the needle for
            us was&hellip;&rdquo;
          </p>
        </div>
      </div>

      {/* Faded competing results — also Reddit threads. The whole top of the SERP is Reddit. */}
      <div className="mt-2.5 space-y-1 opacity-45">
        <FadedResult
          subreddit="r/Entrepreneur"
          title="Email tools founders are actually using in 2026?"
        />
        <FadedResult
          subreddit="r/startups"
          title="What email service did you switch to and why?"
        />
        <FadedResult
          subreddit="r/SaaS"
          title="Best transactional + marketing email stack for early stage"
        />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[color:var(--color-border)] pt-3 text-[10.5px] text-[color:var(--color-text-dim)]">
        <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.14em]">
          Illustrative example
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]"
          />
          live placement
        </span>
      </div>
    </div>
  );
}

function FadedResult({
  subreddit,
  title,
}: {
  subreddit: string;
  title: string;
}) {
  return (
    <div className="rounded-lg px-4 py-2.5">
      <div className="flex items-center gap-1.5 text-[10.5px] text-[color:var(--color-text-dim)]">
        <span className="font-[family-name:var(--font-mono)]">reddit.com</span>
        <span className="opacity-60">›</span>
        <span>{subreddit}</span>
      </div>
      <p className="mt-0.5 text-[13px] leading-snug text-[color:var(--color-text-muted)]">
        {title}
      </p>
    </div>
  );
}

/* -------------------------------------------------- */
/* Problem                                            */
/* -------------------------------------------------- */

function Problem() {
  const cards = [
    {
      n: "01",
      title: "Paid traffic is a treadmill",
      body:
        "Stop spending and the traffic stops. Your CAC has only one direction in a market where every competitor bids the same keywords. You aren’t building anything. You’re renting eyeballs by the hour.",
    },
    {
      n: "02",
      title: "Brand posts don’t last",
      body:
        "A great LinkedIn or Twitter post peaks fast, drops out of the feed within 48 hours, and never resurfaces in search. The next post starts from zero. Same treadmill as paid, just with worse copy.",
    },
    {
      n: "03",
      title: "Generic SEO is a slow bleed",
      body:
        "Ranking for anything competitive takes a year of consistent publishing, and Google’s AI Overviews are eating the clicks before users reach your page. You’re investing in real estate that keeps shrinking.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-28">
      <h2 className="display-lg">Why most growth channels stall</h2>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.n}
            className="surface-card flex flex-col gap-4 px-7 py-7"
          >
            <span className="numeric-tag">{c.n}</span>
            <h3 className="display-md min-h-[2lh]">{c.title}</h3>
            <p className="text-[15.5px] leading-[1.6] text-[color:var(--color-text-muted)]">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* AI Search                                          */
/* -------------------------------------------------- */

function AiSearch() {
  const points = [
    {
      n: "01",
      title: "The models are trained on Reddit",
      body:
        "ChatGPT, Claude, Perplexity, and Gemini all lean on Reddit as a top source of real, unscripted human opinion. When your brand is mentioned naturally in the right thread, it becomes part of the answer the model gives the next person who asks about your category.",
    },
    {
      n: "02",
      title: "AI Overviews pull Reddit first",
      body:
        "Google now surfaces Reddit at the very top of search and inside its AI Overviews — it pays Reddit a reported $60M a year for the privilege. One well-placed mention earns you both the blue link and the sentence the AI quotes above it.",
    },
    {
      n: "03",
      title: "Citations compound like rankings",
      body:
        "An ad disappears the moment you stop paying. A cited mention keeps getting pulled into AI answers for as long as the thread stays relevant. You earn the recommendation once, and the machines keep repeating it for you.",
    },
  ];

  return (
    <section
      id="ai"
      className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid items-center gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="label-tag label-tag-accent">
              The new front page of search
            </span>
            <h2 className="display-lg mt-5 max-w-[16ch]">
              Now Reddit is what{" "}
              <span className="under-mark text-[color:var(--color-text)]">
                AI reads
              </span>
            </h2>
            <p className="lede mt-6 max-w-[54ch]">
              Your buyers have stopped scrolling blue links. They ask ChatGPT,
              Perplexity, or Google&rsquo;s AI Overview a question and take the
              answer. More often than not, that answer is built from Reddit. Show
              up in the threads and you don&rsquo;t just rank — you become the
              recommendation the AI hands your customer.
            </p>
          </div>
          <div className="lg:col-span-6">
            <AiAnswerMockup />
          </div>
        </div>

        <AiLogoStrip />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {points.map((p) => (
            <article
              key={p.n}
              className="surface-card flex flex-col gap-4 px-7 py-7"
            >
              <span className="numeric-tag">{p.n}</span>
              <h3 className="display-md min-h-[2lh]">{p.title}</h3>
              <p className="text-[15.5px] leading-[1.6] text-[color:var(--color-text-muted)]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiAnswerMockup() {
  return (
    <div className="surface-card-static p-5 lg:p-6">
      {/* AI assistant chrome */}
      <div className="flex items-center gap-2.5 border-b border-[color:var(--color-border)] pb-4">
        <span
          aria-hidden
          className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[color:var(--color-accent-soft)] text-[12px] text-[color:var(--color-accent)]"
        >
          ✦
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-wide text-[color:var(--color-text-dim)]">
          AI Assistant
        </span>
      </div>

      {/* User prompt */}
      <div className="mt-4 flex justify-end">
        <span className="max-w-[80%] rounded-2xl rounded-br-sm bg-[color:var(--color-bg)] px-4 py-2.5 text-[13px] text-[color:var(--color-text-2)]">
          what email tool do early-stage SaaS founders actually recommend?
        </span>
      </div>

      {/* AI answer */}
      <div className="mt-4">
        <p className="text-[14px] leading-[1.6] text-[color:var(--color-text)]">
          Founders in the early-stage SaaS community consistently point to a few
          tools. The one that comes up most for combining transactional and
          marketing email without the enterprise price tag is{" "}
          <span className="under-mark text-[color:var(--color-text)]">
            your brand
          </span>
          , which users describe as the thing that &ldquo;actually moved the
          needle&rdquo; for them
          <span className="align-super text-[10px] text-[color:var(--color-accent)]">
            {" "}
            [1]
          </span>
          .
        </p>

        {/* Citation */}
        <div className="mt-4 rounded-xl border border-[color:var(--color-accent)]/35 bg-[color:var(--color-accent-soft)] px-4 py-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[color:var(--color-text-muted)]">
            <span className="font-[family-name:var(--font-mono)] text-[color:var(--color-accent)]">
              [1]
            </span>
            <span className="font-[family-name:var(--font-mono)]">reddit.com</span>
            <span className="opacity-60">›</span>
            <span>r/SaaS</span>
          </div>
          <p className="mt-1 text-[12.5px] leading-snug text-[color:var(--color-text-2)]">
            Best email tool for early B2B SaaS? — 2.1k upvotes
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[color:var(--color-border)] pt-3 text-[10.5px] text-[color:var(--color-text-dim)]">
        <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.14em]">
          Illustrative example
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]"
          />
          cited from your placement
        </span>
      </div>
    </div>
  );
}

function AiLogoStrip() {
  const logos = [
    {
      name: "ChatGPT",
      color: "#10A37F",
      svg: (
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.093zM13.2599 22.43a4.4757 4.4757 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      ),
    },
    {
      name: "Claude",
      color: "#D97757",
      svg: (
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.541Zm-.3712 10.2632 2.2914-5.9456 2.2914 5.9456Z" />
      ),
    },
    {
      name: "Gemini",
      svg: (
        <>
          <defs>
            <linearGradient
              id="gemini-grad"
              x1="2"
              y1="3"
              x2="22"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1C7DFF" />
              <stop offset="0.52" stopColor="#9168C0" />
              <stop offset="1" stopColor="#D6409F" />
            </linearGradient>
          </defs>
          <path
            d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"
            fill="url(#gemini-grad)"
          />
        </>
      ),
    },
    {
      name: "Perplexity",
      color: "#20B8CD",
      svg: (
        <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.157L4.392 24v-6.38H1.5V7.272h2.715V0l7.298 6.07V.45h1.09v5.65zm-7.83 8.27 5.475 4.555V8.272h-5.476zm-6.547 0V12.825L11.882 8.272H5.408zm6.547 1.965V17.42l5.475-4.83h-5.475zm-6.547-.001V12.59l5.475 4.83v-7.18z" />
      ),
    },
  ];

  return (
    <div className="mt-14 border-t border-[color:var(--color-border)] pt-8">
      <p className="label-tag mb-6">
        Cited across the AI tools your buyers already ask
      </p>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
        {logos.map((l) => (
          <span
            key={l.name}
            className="inline-flex items-center gap-2.5 text-[color:var(--color-text-2)] transition hover:text-[color:var(--color-text)]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-[44px] w-[44px] shrink-0"
              fill="currentColor"
              style={l.color ? { color: l.color } : undefined}
            >
              {l.svg}
            </svg>
            <span className="text-[15px] font-medium tracking-[-0.01em]">
              {l.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* How It Works                                       */
/* -------------------------------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "We learn your category from the inside.",
      body:
        "Before we post a single comment we read the room. Which subreddits your category lives in. Which threads come back to life on Google every week. The vocabulary your buyers use, and the vocabulary that gets a comment downvoted on sight.",
      output: "Output: a placement map of 40 to 60 threads worth owning.",
    },
    {
      n: "02",
      title: "We participate as people, not promoters.",
      body:
        "Every comment and post we publish is substantive, authentic, and genuinely helpful. Real answers to real questions, written by people who know the category. The kind of contribution that earns upvotes because it deserves them.",
      output: "Output: weekly comments and occasional posts, reviewed by you.",
    },
    {
      n: "03",
      title: "Threads keep working long after we stop typing.",
      body:
        "Reddit threads index and rank on Google fast, often top three for high-intent queries — and the same threads feed ChatGPT, Perplexity, and Google's AI Overviews. Once a placement is live it keeps surfacing in search results and AI answers alike. The half-life on a well-placed mention runs 12 to 24 months. The work compounds.",
      output: "Output: monthly traffic, AI citations, and lead attribution, by thread.",
    },
  ];

  return (
    <section id="how" className="bg-[color:var(--color-bg)] py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <h2 className="display-lg max-w-[18ch]">How it works</h2>

        <ol className="mt-14 flex flex-col">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid items-start gap-x-12 gap-y-5 border-t border-[color:var(--color-border)] py-10 lg:grid-cols-12 lg:py-12"
            >
              <div className="lg:col-span-2">
                <span className="numeric-tag-accent">{s.n}</span>
              </div>
              <div className="lg:col-span-7">
                <h3 className="display-md max-w-[26ch]">{s.title}</h3>
                <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-[color:var(--color-text-muted)]">
                  {s.body}
                </p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[13.5px] leading-[1.55] text-[color:var(--color-text-2)]">
                  {s.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* Case Studies                                       */
/* -------------------------------------------------- */

function CaseStudies() {
  const cases = [
    {
      sector: "B2B SaaS, Series A",
      stat: "2.1×",
      statLabel: "Conversion vs paid search",
      detail:
        "Five-figure monthly paid budget and no organic surface. We mapped category subs and placed across recurring buying threads. By month four, Reddit-driven traffic converted at over twice the rate of paid.",
      thread: "r/sales",
      pull: TESTIMONIALS.conversion.short,
      pullAttr: attribution(TESTIMONIALS.conversion),
    },
    {
      sector: "DTC apparel, established",
      stat: "3×",
      statLabel: "Reddit-driven Google sign-ups",
      detail:
        "Beloved on Twitter, invisible on Reddit. We earned a presence in three relevant subs and now rank on the first page of Google for two purchase-intent queries the brand had chased on paid for years.",
      thread: "r/buyitforlife",
      pull: TESTIMONIALS.shill.short,
      pullAttr: attribution(TESTIMONIALS.shill),
    },
    {
      sector: "Consumer iOS app, growth stage",
      stat: "1 mo",
      statLabel: "Costs less than 1 week of their prior paid spend",
      detail:
        "A burnt growth team had cycled through three agencies and an in-house Reddit lead. We rebuilt the placement map and the monthly traffic curve has compounded since, at a fraction of the prior CAC.",
      thread: "r/productivity",
      pull: TESTIMONIALS.roi.short,
      pullAttr: attribution(TESTIMONIALS.roi),
    },
  ];

  return (
    <section
      id="cases"
      className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)] py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <h2 className="display-lg max-w-[18ch]">Recent results</h2>

        <div className="mt-14 flex flex-col gap-5">
          {cases.map((c, i) => (
            <article
              key={i}
              className="surface-card grid gap-x-10 gap-y-6 px-7 py-9 md:grid-cols-12 md:px-10 md:py-10"
            >
              <div className="md:col-span-3 md:border-r md:border-[color:var(--color-border)] md:pr-8">
                <span className="numeric-tag">0{i + 1}</span>
                <p className="mt-3 text-[1.05rem] font-semibold leading-tight tracking-[-0.018em] text-[color:var(--color-text)]">
                  {c.sector}
                </p>
                <span className="thread-chip mt-4 inline-flex">{c.thread}</span>
              </div>

              <div className="md:col-span-5">
                <span className="stat-num">{c.stat}</span>
                <p className="mt-2 stat-label">{c.statLabel}</p>
                <p className="mt-5 max-w-[44ch] text-[15.5px] leading-[1.65] text-[color:var(--color-text-muted)]">
                  {c.detail}
                </p>
              </div>

              <div className="md:col-span-4 md:border-l md:border-[color:var(--color-border)] md:pl-8">
                <span className="numeric-tag-accent">In their words</span>
                <p className="mt-3 text-[15.5px] font-medium leading-[1.5] text-[color:var(--color-text-2)]">
                  &ldquo;{c.pull}&rdquo;
                </p>
                <p className="mt-4 text-[12.5px] text-[color:var(--color-text-muted)]">
                  {c.pullAttr}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* Testimonials                                       */
/* -------------------------------------------------- */

function Testimonials() {
  const cards = [TESTIMONIALS.viral, TESTIMONIALS.inbound, TESTIMONIALS.inhouse];

  return (
    <section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg-2)] py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <h2 className="display-lg max-w-[18ch]">What clients say.</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <figure key={i} className="surface-card flex flex-col gap-5 p-7">
              <span
                aria-hidden
                className="text-[2.75rem] font-semibold leading-none text-[color:var(--color-accent)]"
              >
                &ldquo;
              </span>
              <blockquote className="text-[16px] leading-[1.55] text-[color:var(--color-text)]">
                {c.quote}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-[color:var(--color-border)]">
                <p className="text-[13.5px] leading-snug text-[color:var(--color-text-2)]">
                  <span className="font-semibold text-[color:var(--color-text)]">
                    {c.name}
                  </span>
                </p>
                <p className="mt-0.5 text-[12.5px] text-[color:var(--color-text-muted)]">
                  {c.role}, {c.sector}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* FAQ                                                */
/* -------------------------------------------------- */

function FAQ() {
  const items = [
    {
      q: "How long until we see results?",
      a: "Most clients see qualified Reddit-driven traffic within the first 30 days. Compounding becomes obvious by month three. The threads we land in stay productive 12 to 24 months on average, without further work.",
    },
    {
      q: "How does this help us show up in ChatGPT and AI search?",
      a: "AI tools like ChatGPT, Perplexity, and Google's AI Overviews are trained on and pull live answers from Reddit more than almost any other site — Google alone pays Reddit a reported $60M a year for that data. When your brand is mentioned naturally in the threads people are already asking about, it becomes part of the answer the AI gives. You're not gaming a model; you're putting a real recommendation where the model is already looking.",
    },
    {
      q: "How is this different from a content marketing agency?",
      a: "Content marketing is a five-year bet on your blog ranking. Reddit threads rank in weeks, often top three on Google for high-intent queries. The traffic mix is different too. Reddit visitors arrive deeper in the buying funnel than your average blog reader.",
    },
    {
      q: "What if a post gets downvoted or removed?",
      a: "Happens occasionally. Subreddits have rules, moderators have moods. We treat removed posts as signal (usually a misread of the room) and replace them at no extra cost. Our resources have years of history, so no individual miss can damage your standing.",
    },
    {
      q: "What kind of companies do you typically work with?",
      a: "Most of our work is with B2B SaaS, DTC, and consumer apps, but nearly every category has room to grow on Reddit. The conversations are already happening in your subreddits, whether you're showing up or not.",
    },
  ];

  return (
    <section
      id="faq"
      className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)] py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid items-end gap-x-12 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display-lg max-w-[18ch]">Frequently asked</h2>
          </div>
          <p className="lede lg:col-span-5">
            If yours isn&rsquo;t here, bring it to the call
          </p>
        </div>

        <div className="mt-12 max-w-[860px]">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* Booking section                                    */
/* -------------------------------------------------- */

function BookingSection() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-bg-2)]"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[600px] w-[90%] max-w-[1200px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,90,54,0.18) 0%, rgba(255,90,54,0.04) 35%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.02] tracking-[-0.032em] text-[color:var(--color-text)]">
              Stop renting traffic.
              <br />
              Start{" "}
              <span className="under-mark text-[color:var(--color-text)]">
                compounding
              </span>{" "}
              it.
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.6] text-[color:var(--color-text-2)]">
              Thirty minutes. We audit where you&rsquo;re missing on Reddit,
              map the threads worth owning in your category, and tell you
              whether we&rsquo;re a fit. No pitch deck. No follow-up sequence.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-[14px] text-[color:var(--color-text-muted)]">
              <li className="flex items-start gap-3">
                <span aria-hidden className="text-[color:var(--color-accent)]">
                  →
                </span>
                A live audit of your current Reddit and Google footprint
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="text-[color:var(--color-accent)]">
                  →
                </span>
                A short list of threads worth owning in your category
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="text-[color:var(--color-accent)]">
                  →
                </span>
                An honest answer on whether we&rsquo;re the right fit
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/* Footer                                             */
/* -------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-[color:var(--color-bg)]">
      <div className="mx-auto max-w-[1240px] border-t border-[color:var(--color-border)] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="wordmark">
              Threadslift<span className="accent-dot">.</span>
            </span>
            <p className="mt-4 max-w-[44ch] text-[14px] leading-[1.6] text-[color:var(--color-text-muted)]">
              We get B2B SaaS, DTC, and consumer brands mentioned in the Reddit
              threads their buyers already trust. Mentions stay live, rank on
              Google, get cited by AI, and compound for years.
            </p>
            <a
              href={CTA_HREF}
              className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-[color:var(--color-accent)] hover:underline"
            >
              {CTA_LABEL}
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-text-dim)]">
              Site
            </span>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-[color:var(--color-text-muted)]">
              <li>
                <a href="#ai" className="transition hover:text-[color:var(--color-text)]">
                  AI search
                </a>
              </li>
              <li>
                <a href="#how" className="transition hover:text-[color:var(--color-text)]">
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="transition hover:text-[color:var(--color-text)]"
                >
                  Results
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-[color:var(--color-text)]">
                  FAQ
                </a>
              </li>
              <li>
                <a href={CTA_HREF} className="transition hover:text-[color:var(--color-text)]">
                  Learn more
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-text-dim)]">
              By the numbers
            </span>
            <ul className="mt-4 flex flex-col gap-3 text-[13.5px] text-[color:var(--color-text-2)]">
              <li className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-mono)] font-semibold text-[color:var(--color-text)]">
                  &lt; 3 mo
                </span>
                <span className="text-[color:var(--color-text-muted)]">
                  to page 1 of Google
                </span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-mono)] font-semibold text-[color:var(--color-text)]">
                  74%
                </span>
                <span className="text-[color:var(--color-text-muted)]">
                  lower bounce rate
                </span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-mono)] font-semibold text-[color:var(--color-text)]">
                  18+ mo
                </span>
                <span className="text-[color:var(--color-text-muted)]">
                  placement half-life
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[color:var(--color-border)] pt-6 text-[12px] text-[color:var(--color-text-dim)] md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Threadslift. Reddit organic that
            compounds.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/privacy"
              className="transition hover:text-[color:var(--color-text-muted)]"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition hover:text-[color:var(--color-text-muted)]"
            >
              Terms
            </a>
            <a
              href="mailto:hello@threadslift.com"
              className="transition hover:text-[color:var(--color-text-muted)]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
