export const tagColor = {
  'Generative AI': '#FF3B3B',
  'RAG':           '#818CF8',
  'Web Dev':       '#3B82F6',
  'AI Automation': '#10B981',
  'Full Stack':    '#F59E0B',
  'Cloud':         '#06B6D4',
};

const posts = [
  {
    id: 1,
    slug: 'generative-ai-2026',
    tag: 'Generative AI',
    title: "Generative AI in 2026: What's Actually Changing for Businesses",
    excerpt: 'Beyond the hype — a clear-eyed look at how Generative AI is reshaping products, workflows, and competitive advantage in 2026.',
    date: 'May 2026',
    readTime: '6 min',
    featured: true,
    metaDescription: 'A practical breakdown of how Generative AI is changing business operations in 2026 — what works, what the ROI looks like, and where most companies go wrong.',
    intro: 'Generative AI has moved from boardroom buzzword to operational reality. But most businesses are still figuring out where it actually belongs in their stack — and where it is a distraction. Here is a clear-eyed look at what has genuinely changed in 2026 and what it means for you.',
    sections: [
      {
        heading: "What's Actually Different in 2026",
        body: "The models themselves are no longer the story. GPT-4o, Claude 3, Gemini 1.5 — they are all capable enough for most business tasks. What's changed is reliability, integration depth, and cost. Running AI inference on enterprise workloads is now 10x cheaper than it was two years ago. More importantly, the tooling around AI — orchestration, evaluation, grounding — has matured enough that production deployments are tractable without a research team.",
      },
      {
        heading: 'Where Businesses Are Seeing Real ROI',
        body: "The honest answer is: narrow, well-defined tasks. Customer support triage is the standout use case — companies are reporting 40–60% deflection of tier-1 tickets with no drop in satisfaction scores. Document processing (contracts, invoices, intake forms) is another strong category. Internal knowledge retrieval — giving staff an AI interface to your own documentation — is delivering measurable time savings. Content drafting, code assistance, and data analysis round out the top performers. The common thread: tasks that are high-volume, reasonably well-defined, and currently handled by expensive human attention.",
      },
      {
        heading: 'The Hidden Costs Nobody Talks About',
        body: "GenAI is not plug-and-play. The costs that catch businesses off guard: data preparation (cleaning, structuring, and formatting the data the AI will use), prompt engineering (getting consistent, reliable outputs takes iteration), hallucination management (you need evaluation pipelines, not just vibes), and compliance overhead (data residency, PII handling, audit trails). Budget for 2–3x the cost of the model itself to cover the surrounding infrastructure and process changes.",
      },
      {
        heading: 'Which Industries Are Moving Fastest',
        body: "Legal and professional services are ahead — contract review, due diligence, and research summarisation have obvious ROI. Healthcare is moving cautiously but steadily, with AI in clinical documentation and diagnostic support. Financial services are deep into fraud detection, report generation, and compliance monitoring. Software development teams are the biggest adopters per capita — AI coding assistants have become standard. Manufacturing and logistics are in early pilots, mostly on predictive maintenance and supply chain optimisation.",
      },
      {
        heading: 'What to Do in the Next 6 Months',
        body: "Pick one process. Not the most glamorous one — the most repetitive, high-volume one with clear quality criteria. Run a 6-week pilot with a small team. Measure three things: time saved, error rate compared to the baseline, and user satisfaction. If two of three improve, you have a business case. Scale that, then find the next process. The companies wasting money on AI are trying to transform everything at once. The ones winning are grinding out one reliable use case at a time.",
      },
    ],
  },
  {
    id: 2,
    slug: 'rag-frameworks-explained',
    tag: 'RAG',
    title: 'RAG Frameworks Explained: Building AI That Knows Your Business',
    excerpt: "Retrieval-Augmented Generation is the architecture behind reliable AI answers. Here's how it works and when to use it.",
    date: 'Apr 2026',
    readTime: '8 min',
    featured: false,
    metaDescription: 'What is RAG (Retrieval-Augmented Generation)? A plain-English guide to how RAG works, when to use it over fine-tuning, and how to build a production RAG system.',
    intro: "Large language models are powerful but they don't know your business. They don't know your product docs, your internal policies, your customer history, or last week's meeting notes. RAG — Retrieval-Augmented Generation — is the most practical way to fix that without retraining a model from scratch.",
    sections: [
      {
        heading: 'The Problem RAG Solves',
        body: "A base LLM is trained on public internet data up to a cutoff date. It knows nothing about your business, your customers, or your proprietary documentation. You have two options to fix this: fine-tune the model on your data (expensive, slow to update, requires ML expertise) or RAG (retrieve relevant information at query time and feed it into the prompt). For most business use cases — internal Q&A, customer support, document search — RAG is the right answer. It is cheaper, faster to implement, and updates in real time as your data changes.",
      },
      {
        heading: 'How RAG Works',
        body: "The flow is straightforward: a user submits a query. Your system converts that query into a vector embedding and searches a vector database for the most semantically similar chunks from your document corpus. The top results are injected into the LLM prompt alongside the original question. The model generates a response grounded in your actual data, not its training data. The magic is in the vector search — it finds relevant content even when the exact words don't match, because it searches by meaning rather than keywords.",
      },
      {
        heading: 'When to Use RAG vs Fine-Tuning',
        body: "Use RAG when your knowledge base updates frequently, when you need source citations, when your data is proprietary and large, or when you need to be live with minimal lead time. Use fine-tuning when you want to change the model's style or tone consistently, when you have a very specific domain vocabulary the model struggles with, or when you are doing a narrow, well-defined task at massive scale and latency is critical. In practice, many production systems use both: a fine-tuned model for behaviour, RAG for knowledge.",
      },
      {
        heading: 'The Technical Stack',
        body: "A production RAG system has four layers. First: document ingestion — parse, clean, and chunk your documents. Chunk size matters (typically 200–500 tokens with overlap). Second: embedding — convert chunks to vectors using a model like text-embedding-3-small. Third: vector storage — Pinecone, Weaviate, Qdrant, or pgvector inside Postgres. Fourth: retrieval and generation — LangChain or LlamaIndex to orchestrate the query pipeline, an LLM to generate the final answer. Add a re-ranking step (cross-encoder) before generation to dramatically improve answer quality.",
      },
      {
        heading: 'Common Mistakes to Avoid',
        body: "Chunking without overlap causes context to split across boundaries — the model misses the connection. Not re-ranking retrieved results means the top-k chunks by cosine similarity are not always the most relevant. Ignoring metadata — document date, author, category — means you can't filter results intelligently. Skipping evaluation is the biggest mistake: build a test set of question/answer pairs from your domain and measure retrieval recall and answer faithfulness before shipping. Without evaluation, you're flying blind.",
      },
    ],
  },
  {
    id: 3,
    slug: 'web-development-trends-2026',
    tag: 'Web Dev',
    title: 'Web Development Trends in 2026: What Actually Matters',
    excerpt: "From React Server Components to edge rendering — the web development landscape has shifted. Here's what's worth your attention.",
    date: 'Apr 2026',
    readTime: '7 min',
    featured: false,
    metaDescription: 'The web development trends that actually matter in 2026 — React Server Components, edge rendering, AI-assisted development, and why the SPA era is evolving.',
    intro: "The web development landscape in 2026 looks meaningfully different from 2023. Some shifts are genuinely important; many are noise. Here is an honest breakdown of what has changed, what it means for new projects, and what you can safely ignore.",
    sections: [
      {
        heading: 'React Server Components Are Now Mainstream',
        body: "RSC is no longer experimental. Next.js 15 ships with stable server components as the default model, and the ecosystem has caught up. The mental shift — from thinking about components as browser entities to thinking about them as a server/client split — is real but worthwhile. The payoff: dramatically smaller client bundles, zero-waterfall data fetching, and the ability to run database queries directly in your component tree without an API layer. For content-heavy apps and e-commerce, RSC is a significant win. For highly interactive SPAs with complex client state, the traditional model still has its place.",
      },
      {
        heading: 'Edge Rendering Is Production-Ready',
        body: "Running compute at the edge — Cloudflare Workers, Vercel Edge Runtime, Deno Deploy — has gone from impressive demo to production standard. The headline benefit is latency: sub-50ms response times globally, even for server-rendered content. The practical implication for most projects: serve your HTML from the edge (via Next.js or Remix on Vercel/Cloudflare), keep your heavy compute and database in a regional data centre, and cache aggressively at the edge for static or semi-static content. The combination eliminates most of the latency penalty of server rendering.",
      },
      {
        heading: 'AI-Assisted Development Has Changed Output Rates',
        body: "GitHub Copilot, Cursor, and Claude Code have become standard tools for professional developers. The productivity gains are real but unevenly distributed: boilerplate, tests, and routine CRUD code see the biggest speedups (2–3x). Complex architectural decisions, debugging subtle concurrency issues, and greenfield design still require deep human expertise. The implication for teams: AI tooling raises the floor (juniors get better faster) without raising the ceiling (senior judgment is more valuable than ever). Budget for AI tooling in your development workflow — it pays for itself quickly.",
      },
      {
        heading: 'The SPA Backlash Is Real — and Partly Correct',
        body: "Single-Page Applications dominated the 2015–2022 era. The backlash is now: Core Web Vitals penalties for large JS bundles, poor SEO for client-rendered content, overcomplicated state management for what is essentially a content site. Astro, 11ty, and fresh multi-page approaches have found a genuine audience. The sensible position: use the right tool for the job. A marketing site or blog has no reason to ship 300kB of JavaScript. A complex web application with rich interactivity absolutely does. The mistake was treating SPA as the default regardless of requirements.",
      },
      {
        heading: 'What to Build With in 2026',
        body: "For most projects: Next.js (App Router) + TypeScript + Tailwind CSS + Postgres (via Prisma or Drizzle). This stack is boring, well-documented, has massive talent pools, and has proven itself at scale. For content sites: Astro. For full-stack with real-time features: Remix or SvelteKit. For mobile: React Native still leads in maintainability and hiring. Avoid framework FOMO — the marginal difference between mature frameworks is tiny compared to the quality of your product decisions and execution.",
      },
    ],
  },
  {
    id: 4,
    slug: 'ai-automation',
    tag: 'AI Automation',
    title: 'AI Automation: Where It Saves Real Time and Where It Falls Short',
    excerpt: 'AI automation promises to eliminate repetitive work. An honest breakdown of where it delivers and where it still needs a human in the loop.',
    date: 'Mar 2026',
    readTime: '6 min',
    featured: false,
    metaDescription: 'An honest guide to AI automation in 2026 — which tasks to automate first, where AI still needs human oversight, and how to calculate real ROI.',
    intro: "Every vendor is selling AI automation as a magic cost-reducer. The reality is more nuanced. AI automation delivers extraordinary ROI in some contexts and falls flat in others. Here is a clear-eyed guide to where it genuinely saves time — and where you still need a human in the loop.",
    sections: [
      {
        heading: 'Where AI Automation Delivers',
        body: "The strongest use cases share three traits: high volume, low variance, and clear quality criteria. Data entry and extraction — pulling structured information from invoices, forms, and documents — is the standout category. Companies automating this are reporting 80–95% reduction in processing time. Email triage and routing, appointment scheduling, first-level customer support, and report generation from structured data are all in the same tier. The common denominator: tasks that a competent human can do in minutes, that follow a consistent pattern, and where the output can be automatically verified.",
      },
      {
        heading: 'Where It Still Falls Short',
        body: "AI automation struggles with ambiguity, novelty, and judgment. Complex customer complaints that require understanding context and emotion. Sales conversations that need reading between the lines. Any task where being wrong has serious consequences and the error isn't immediately obvious. Creative problem-solving. Physical-world tasks. Anything requiring genuine empathy. The failure mode isn't usually dramatic — it's subtle errors that seem correct but aren't, which is actually more dangerous than obvious failures because they can go undetected.",
      },
      {
        heading: 'Calculating Real ROI',
        body: "The formula: (Hours saved per month × Fully-loaded hourly rate) minus (Monthly cost of automation + Implementation cost amortised over 24 months). The number that surprises most businesses is the implementation cost — a well-built automation is not a one-week project. Factor in: workflow analysis, API integrations, edge case handling, testing, and ongoing maintenance. A realistic rule of thumb: if the task takes 100+ hours per month and follows a clear pattern, the ROI is almost always positive within 6 months. Below that, evaluate case by case.",
      },
      {
        heading: 'The Right First Automation',
        body: "Start with the highest-volume, most repetitive, most rule-based task your team does. Typically this is something people hate doing — a strong signal that it's automatable. Ideal first automation: one clear input, one clear output, rules that can be written down, and someone who cares enough about the outcome to own the quality. Avoid starting with anything customer-facing, anything involving payments, or anything where an error has legal or compliance implications. Those come later, once you have confidence in your tooling and processes.",
      },
      {
        heading: 'The Human-in-the-Loop Model',
        body: "Full automation is rarely the right starting point. The pattern that works: AI handles the bulk of the task, a human reviews exceptions and edge cases, and quality feedback loops back to improve the AI's performance over time. This model gives you most of the efficiency gain while keeping human judgment where it matters. Over time, as the AI's accuracy on your specific task improves, you expand its autonomy incrementally. Think of it as gradually raising the confidence threshold required to skip human review — not a binary switch from manual to fully automated.",
      },
    ],
  },
  {
    id: 5,
    slug: 'modern-full-stack-2026',
    tag: 'Full Stack',
    title: 'The Modern Full Stack in 2026: A Practical Guide',
    excerpt: 'What does a production-ready full stack actually look like today? React, Node, Postgres, and the tools that make it all work together.',
    date: 'Mar 2026',
    readTime: '9 min',
    featured: false,
    metaDescription: 'A practical guide to the modern full stack in 2026 — from React and TypeScript on the frontend to Node.js, Postgres, and deployment infrastructure.',
    intro: "The full stack has never been more capable — or more confusing to navigate. Framework releases, new runtimes, and AI tooling are all competing for your attention. Here is a practical guide to what a production-ready full stack actually looks like today, stripped of hype.",
    sections: [
      {
        heading: 'The Stack That Ships',
        body: "The combination that consistently works in production for most business applications: React (with Next.js App Router) on the frontend, Node.js on the backend, PostgreSQL as the primary database, and Vercel or Railway for deployment. This is not the most exciting stack in 2026 — it is the most reliable one. Massive talent pool, excellent documentation, battle-tested at scale, and AI tooling that works exceptionally well with it. The boring stack is almost always the right stack for a business application.",
      },
      {
        heading: 'TypeScript Is Non-Negotiable',
        body: "If you are starting a new project in 2026 without TypeScript, you are accumulating debt from day one. The benefits compound over time: refactoring confidence (change a type and your IDE tells you exactly what broke), better IDE support (autocomplete, inline docs, error highlighting), and team scalability (new developers understand the codebase faster). The setup overhead is a few hours. The payoff on any project lasting more than 3 months is enormous. The only exception: rapid prototypes where you will throw the code away. Everything else — TypeScript.",
      },
      {
        heading: 'Database Choices in 2026',
        body: "PostgreSQL handles the vast majority of use cases better than any alternative. It's relational, ACID-compliant, has excellent JSON support for semi-structured data, and has pgvector for AI use cases. Add Redis for caching, session storage, and pub/sub. If you have AI features, you need a vector database — pgvector inside Postgres is the right starting point; migrate to a dedicated vector DB (Pinecone, Qdrant) when you hit scale. The advice to avoid: don't reach for MongoDB, DynamoDB, or other NoSQL options unless you have a specific, articulated reason that PostgreSQL cannot meet. That reason rarely materialises.",
      },
      {
        heading: 'The Parts Everyone Underbuilds',
        body: "Observability is the most common gap: you need error tracking (Sentry), application performance monitoring, and structured logging from day one. Background jobs — sending emails, processing uploads, running reports — need a proper queue system (BullMQ with Redis, or a managed service like Inngest). Authentication is not a solved problem you should solve yourself: use Clerk, Auth0, or Supabase Auth. These three areas consistently get underprioritised until something goes wrong in production. Build them in from the start.",
      },
      {
        heading: 'Deployment and Infrastructure',
        body: "For most applications under significant scale: Vercel (Next.js) or Railway (Node APIs + Postgres) handles deployment, scaling, and infrastructure. The cost is higher than raw cloud, but the operational overhead saved pays for itself many times over for teams without a dedicated DevOps engineer. When you need more control — specific compliance requirements, multi-region, very high traffic — move to AWS or GCP with Terraform for infrastructure-as-code. Containerise with Docker early even if you're not using Kubernetes yet; it makes the eventual migration significantly easier.",
      },
    ],
  },
  {
    id: 6,
    slug: 'cloud-infrastructure',
    tag: 'Cloud',
    title: 'Cloud Infrastructure That Scales: Principles Over Platforms',
    excerpt: "AWS, GCP, Azure — the platform matters less than the principles. How to design cloud infrastructure that scales without ruining your budget.",
    date: 'Feb 2026',
    readTime: '7 min',
    featured: false,
    metaDescription: 'How to design cloud infrastructure that scales — the principles that work across AWS, GCP, and Azure, and the cost and security decisions that matter most.',
    intro: "The cloud platform debate — AWS vs GCP vs Azure — consumes disproportionate attention. The reality: all three deliver 99.99% uptime, global coverage, and broadly equivalent managed services. The decisions that actually determine whether your infrastructure succeeds are the principles and patterns underneath the platform choice.",
    sections: [
      {
        heading: 'Design for Failure From Day One',
        body: "The most important principle in cloud architecture: assume every component will fail. Design your system so that when a single component fails — a database instance, an availability zone, a third-party API — the system degrades gracefully rather than crashes entirely. Practically: multi-AZ deployments for databases and compute, circuit breakers for external service calls, graceful degradation at the application layer (show cached data when live data is unavailable), and health checks that detect and recover from failures automatically. Teams that skip this in the early days spend months of engineering time fixing it later under production load.",
      },
      {
        heading: 'The Platform Decision Is Overrated',
        body: "AWS has the deepest service catalogue and the largest talent pool — it is the safe default for most teams. GCP has the strongest data and ML services — if you are building AI-heavy systems, GCP's BigQuery and Vertex AI are compelling. Azure wins in Microsoft-heavy enterprises where the integration with Active Directory and Office 365 has real value. For startups and SMEs: choose AWS unless you have a specific reason not to. The marginal differences between platforms shrink as you abstract over them with Terraform, Docker, and managed services.",
      },
      {
        heading: 'Cost Control From the Start',
        body: "Cloud costs spiral because they're invisible until the bill arrives. Instrument from day one: set up billing alerts, tag every resource with environment and team, and review the cost explorer weekly. The biggest cost drivers: over-provisioned instances (right-size aggressively), data transfer costs (avoid cross-region traffic where possible), storage that accumulates without lifecycle policies, and unused resources in non-production environments. Spot instances and reserved instances can cut compute costs by 60–70% for predictable workloads. Auto-scaling prevents paying for peak capacity 24/7.",
      },
      {
        heading: 'Security as Architecture',
        body: "Security is not a feature you add after launch — it's a property of how you architect the system. The non-negotiable baseline: IAM roles with least-privilege access (no shared credentials, no admin access to production), secrets management via AWS Secrets Manager or similar (no credentials in environment variables or code), VPCs with private subnets for databases (nothing in the database tier should be directly internet-accessible), encryption at rest and in transit everywhere, and audit logging for all admin actions. These are not advanced security measures — they are the minimum viable security posture for any production system.",
      },
      {
        heading: 'When to Use Managed Services',
        body: "The calculus is simple: managed services cost more in compute terms but less in total cost of ownership. RDS instead of self-managed Postgres: you pay a premium but get automated backups, failover, patching, and monitoring. ElastiCache instead of self-managed Redis: similar trade-off. The engineering hours saved maintaining self-hosted infrastructure at a team of under 20 engineers almost always exceeds the cost premium of managed services. Self-host when: your data cannot leave a specific jurisdiction, you have very specific performance requirements the managed service can't meet, or you have the operational maturity and headcount to do it well.",
      },
    ],
  },
];

export default posts;
