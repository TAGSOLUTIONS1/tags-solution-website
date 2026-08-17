// Niche-organised success stories for the /success-stories rebuild.
// Content source: "TAG-Solutions-Success-Stories-Final.docx" (36 studies)
// plus the two site-only studies (HomeFind, EduSpark) = 38 total, in 7 niches.
//
// HOW TO EDIT
//  · Add a story: copy any object in STORIES, give it a unique `slug`,
//    set `niche` to one of the NICHES slugs — pages, counts and static
//    params update automatically.
//  · A story may omit `challenge` (the page skips and renumbers).
//  · `client` is one of:
//      { type: "confidential" }
//      { type: "named", name: "EduSpark" }
//      { type: "product", name: "GeoStats", url: "geostats.ai" }

export const NICHES = [
  {
    "slug": "agentic-ai-automation",
    "name": "Agentic AI & Automation",
    "icon": "🤖",
    "tagline": "Autonomous agents replacing human workflows — end-to-end, guardrailed, and auditable."
  },
  {
    "slug": "enterprise-data-knowledge-secure-ai",
    "name": "Enterprise Data, Knowledge & Secure AI",
    "icon": "🧠",
    "tagline": "Weeks of research to minutes — every answer cited, no data leaving the perimeter."
  },
  {
    "slug": "fintech-revenue-compliance",
    "name": "Fintech, Revenue & Compliance",
    "icon": "🏦",
    "tagline": "100% of compliance decisions auditable — revenue leakage eliminated from quote to cash."
  },
  {
    "slug": "sales-marketing-growth",
    "name": "Sales, Marketing & Growth",
    "icon": "📈",
    "tagline": "30 hours of prospecting eliminated per user per week — thousands of brands running analytics with zero engineering effort."
  },
  {
    "slug": "real-estate-proptech-marketplaces",
    "name": "Real Estate, PropTech & Marketplaces",
    "icon": "🏠",
    "tagline": "National-scale property search · multi-country from one codebase · ZIP-code housing intelligence on a phone."
  },
  {
    "slug": "domain-native-industry-solutions",
    "name": "Domain-Native Industry Solutions",
    "icon": "🧩",
    "tagline": "62x risk segmentation · 80% of admin automated · clash-free routing in seconds · 90% of ships forecast daily."
  },
  {
    "slug": "adaptive-learning-consumer-platforms",
    "name": "Adaptive Learning & Consumer Platforms",
    "icon": "🎓",
    "tagline": "Weeks of course production to minutes · OS-level parental enforcement · learning that transfers to the classroom."
  }
];

export const STORIES = [
  {
    "slug": "end-to-end-finance-operations-run-by-agents",
    "niche": "agentic-ai-automation",
    "kicker": "Agentic AI · Finance Automation",
    "title": "End-to-End Finance Operations, Run by Agents",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Agentic AI",
      "Finance Automation",
      "LLM-as-Judge"
    ],
    "overview": {
      "head": "When exceptions are the rule, agents step in.",
      "paras": [
        "We built an agentic finance platform for global enterprises — automating AP/AR, invoice reconciliation and vendor payments from document intake through to payment release.",
        "Rules-based RPA had covered the easy 30% of workflows. We were brought in to handle the hard 70% — the exceptions, edge cases and cross-currency mismatches that required human judgement."
      ]
    },
    "challenge": {
      "head": "RPA handled the easy cases. Exceptions went back to humans — every time.",
      "paras": [
        "Legacy automation broke on mismatched line items, missing POs and currency discrepancies. These weren't edge cases — they were the majority of real-world invoices. Every exception triggered a manual review queue that grew faster than the team could clear it.",
        "The business needed automation that could reason through ambiguity, not just match patterns — and it needed a quality gate to ensure no hallucinated output ever reached the books."
      ]
    },
    "built": {
      "head": "Three agents, one pipeline, nothing left unverified.",
      "features": [
        {
          "t": "Research Agent",
          "d": "Gathers full context from the organization's knowledge base before any reconciliation step begins — pulling relevant contracts, POs and historical transactions so the Finance Agent has everything it needs."
        },
        {
          "t": "Finance Agent",
          "d": "Reconciles invoices against the gathered context, handling mismatched line items, missing references and currency discrepancies without routing back to a human queue."
        },
        {
          "t": "Editor Agent",
          "d": "Formats the reconciled output for downstream systems — ensuring every record lands in the exact structure the ERP or accounting platform expects."
        },
        {
          "t": "LLM-as-Judge Quality Gate",
          "d": "Every agent output is scored by a separate judge model before it moves to the next stage. Hallucinations and low-confidence outputs are caught and flagged before they reach the books."
        },
        {
          "t": "Voice-Initiated Workflows",
          "d": "Phone-initiated finance requests feed into the same agentic pipeline — so voice, email and system-triggered workflows are all processed identically."
        }
      ]
    },
    "impact": {
      "head": "Finance runs itself. From document intake to payment release.",
      "cards": [
        {
          "stat": "100%",
          "label": "End-to-End Automation",
          "desc": "Every stage — from document intake through reconciliation to payment — handled by agents, without manual touch."
        },
        {
          "stat": "100%",
          "label": "Outputs Quality-Checked",
          "desc": "The LLM-as-judge layer scores every single agent output before it moves forward. Nothing unverified enters the books."
        },
        {
          "stat": "0",
          "label": "Manual Exception Queues",
          "desc": "The hard 70% that used to bounce back to humans now resolves within the pipeline — without human intervention."
        }
      ]
    },
    "numbers": [
      {
        "v": "3-Agent",
        "l": "Hierarchical Pipeline"
      },
      {
        "v": "100%",
        "l": "Outputs Judge-Verified"
      },
      {
        "v": "0",
        "l": "Manual Touch Required"
      },
      {
        "v": "Global",
        "l": "Enterprise Deployment"
      }
    ]
  },
  {
    "slug": "self-hosted-agent-platform-zero-data-egress",
    "niche": "agentic-ai-automation",
    "kicker": "Agentic AI · Open-Source Automation",
    "title": "Self-Hosted Agent Platform With Zero Data Egress",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Agentic AI",
      "Self-Hosted",
      "MCP"
    ],
    "overview": {
      "head": "Production-grade automation, on your own infrastructure.",
      "paras": [
        "We built a visual, self-hosted automation platform that lets technical and non-technical teams build and run autonomous agents across hundreds of integrations — without sending a single byte of data to a third-party server.",
        "Every major automation platform on the market forces a trade-off: vendor lock-in, per-task pricing, or data leaving your servers. We built the alternative."
      ]
    },
    "challenge": {
      "head": "Every automation platform owned your data and your workflow.",
      "paras": [
        "Teams needed production-grade agents — not toy automations — but the tools that could deliver them came with three non-negotiables: lock-in to a proprietary platform, metered pricing that scaled against them, and their sensitive data processed on someone else's infrastructure.",
        "For regulated industries and security-conscious teams, that last point alone was a blocker. The market had no serious self-hosted answer."
      ]
    },
    "built": {
      "head": "Visual builder. MCP-native. Runs on your servers.",
      "features": [
        {
          "t": "Drag-and-Drop Agent Builder",
          "d": "A visual canvas where both technical and non-technical users build multi-step autonomous workflows — no code required for standard flows, fully extensible for engineers."
        },
        {
          "t": "Human-in-the-Loop Approvals",
          "d": "Agents pause at configurable checkpoints and wait for human sign-off before proceeding — giving teams control over sensitive or high-stakes automation steps."
        },
        {
          "t": "280+ Integrations as MCP Servers",
          "d": "The entire integration catalog is exposed to agents as Model Context Protocol servers, so agents can call any tool the same way a human would — with full context."
        },
        {
          "t": "Horizontally Scaling Docker Workers",
          "d": "Agent workloads run on Docker workers that scale out to meet demand — no fixed infrastructure cap, no per-task pricing ceiling."
        },
        {
          "t": "Zero Data Egress Architecture",
          "d": "The full stack — builder, workers, integrations — runs on the team's own infrastructure. Data never leaves their servers, satisfying even the strictest compliance requirements."
        }
      ]
    },
    "impact": {
      "head": "Thousands of teams. Millions of tasks. Their data stays theirs.",
      "cards": [
        {
          "stat": "280+",
          "label": "Integrations Available",
          "desc": "Every integration exposed as an MCP server — reachable by agents as naturally as by a human operator."
        },
        {
          "stat": "Millions",
          "label": "Tasks Executed Monthly",
          "desc": "Production-scale workloads running across thousands of self-hosting teams worldwide."
        },
        {
          "stat": "0",
          "label": "Data Sent Externally",
          "desc": "Complete zero-egress architecture — everything runs on the team's own infrastructure, with no third-party data transfer."
        }
      ]
    },
    "numbers": [
      {
        "v": "280+",
        "l": "Integrations as MCP Servers"
      },
      {
        "v": "650+",
        "l": "Business Tools Reachable"
      },
      {
        "v": "Millions",
        "l": "Tasks Monthly"
      },
      {
        "v": "0 Bytes",
        "l": "Data Egress"
      }
    ]
  },
  {
    "slug": "ai-voice-agents-real-conversations",
    "niche": "agentic-ai-automation",
    "kicker": "Agentic AI · Voice Agents",
    "title": "AI Voice Agents That Handle Real Conversations",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Agentic AI",
      "Voice AI",
      "Real-Time"
    ],
    "overview": {
      "head": "Natural pacing. Safe tool use. Hundreds of calls at once.",
      "paras": [
        "We built a voice-agent platform that automates inbound and outbound business calls — not with scripted bots that hang up on interruptions, but with agents that talk like humans and operate business systems mid-conversation.",
        "The platform handles call scheduling, CRM updates, calendar bookings and more — all while maintaining sub-800ms response latency at hundreds of simultaneous calls."
      ]
    },
    "challenge": {
      "head": "Existing voice bots collapsed the moment a caller went off-script.",
      "paras": [
        "Call-heavy businesses couldn't scale phone operations with the tools available. Every voice bot on the market worked perfectly until the caller interrupted, asked something unexpected, or needed a real answer — at which point it stalled, looped or dropped the call.",
        "The problem wasn't the voice quality. It was that bots had no way to reason through a real conversation, and no safe mechanism to operate CRMs or calendars while talking — so every live system access required a human."
      ]
    },
    "built": {
      "head": "Real-time STT → LLM → TTS. Guardrailed tool calls. Natural turn-taking.",
      "features": [
        {
          "t": "Real-Time Voice Pipeline",
          "d": "A continuous STT → LLM → TTS loop with interruption handling and natural turn-taking — the agent listens, thinks and responds in under 800ms at the 95th percentile."
        },
        {
          "t": "Deterministic Tool-Calling Framework",
          "d": "Agents can operate CRMs, calendars and accounting systems mid-conversation — but only through a strict guardrailed framework. Zero unconstrained tool executions reach production."
        },
        {
          "t": "15+ Native Integrations",
          "d": "Out-of-the-box connections to CRM, scheduling and accounting platforms — so agents can look up records, book appointments and log calls without leaving the conversation."
        },
        {
          "t": "Batch Outbound Scheduler",
          "d": "Campaign-scale outbound calling with built-in do-not-call register washing — ensuring compliance at volume before a single call is placed."
        }
      ]
    },
    "impact": {
      "head": "Sub-800ms. Guardrailed. Scales to hundreds of simultaneous calls.",
      "cards": [
        {
          "stat": "<800ms",
          "label": "P95 Response Latency",
          "desc": "End-to-end voice response — from the caller finishing their sentence to the agent's reply — at the 95th percentile."
        },
        {
          "stat": "0",
          "label": "Unconstrained Tool Executions",
          "desc": "Every CRM, calendar and system action runs through the guardrail framework. No agent operates a live system without a validated, deterministic call path."
        },
        {
          "stat": "100s",
          "label": "Simultaneous Calls",
          "desc": "The platform handles hundreds of concurrent inbound and outbound calls without degradation in latency or accuracy."
        }
      ]
    },
    "numbers": [
      {
        "v": "<800ms",
        "l": "P95 End-to-End Latency"
      },
      {
        "v": "15+",
        "l": "Native CRM Integrations"
      },
      {
        "v": "100s",
        "l": "Simultaneous Calls"
      },
      {
        "v": "0",
        "l": "Unconstrained Executions"
      }
    ]
  },
  {
    "slug": "real-time-speech-translation-120-languages",
    "niche": "agentic-ai-automation",
    "kicker": "Agentic AI · Live Translation",
    "title": "Real-Time Speech Translation Across 120+ Languages",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Agentic AI",
      "Live Translation",
      "Broadcast"
    ],
    "overview": {
      "head": "Not just the words. The voice, tone and meaning too.",
      "paras": [
        "We built a live translation platform for broadcast and enterprise events — translating speech across 120+ languages in under two seconds, while preserving the speaker's vocal identity, tone and emotional emphasis.",
        "The platform runs six proprietary foundational models simultaneously, processing not just words but tonality, sentiment, facial expressions and video context in real time."
      ]
    },
    "challenge": {
      "head": "Live translation existed. But it stripped out everything that wasn't words.",
      "paras": [
        "Every real-time translation solution available produced output that was technically correct and emotionally flat. The speaker's urgency, warmth, authority or humor — all of it disappeared in the translation. For broadcast events, investor calls and multilingual conferences, that loss was unacceptable.",
        "The engineering challenge wasn't translation speed. It was preserving the vocal character of the original speaker — across languages, in real time, without a human interpreter."
      ]
    },
    "built": {
      "head": "Six models running simultaneously. One speaker's voice, any language.",
      "features": [
        {
          "t": "Broadcast-Grade ASR Foundation",
          "d": "High-accuracy automatic speech recognition engineered for broadcast-quality audio — handling accents, pacing variation and background noise without degradation."
        },
        {
          "t": "Tonality & Sentiment Processing",
          "d": "A dedicated model layer analyses tone, sentiment and emotional emphasis in parallel with transcription — so the output knows not just what was said, but how."
        },
        {
          "t": "Facial Expression & Video Context",
          "d": "Visual context feeds into the model stack alongside audio — giving the system additional signal to resolve ambiguity and preserve speaker intent."
        },
        {
          "t": "Custom Neural Vocoders",
          "d": "Speaker-specific vocoders reconstruct the translated output in the original speaker's vocal character — not a generic text-to-speech voice, but a close approximation of the speaker themselves."
        },
        {
          "t": "Sub-2-Second End-to-End Pipeline",
          "d": "All six model layers run in under two seconds from speech input to translated audio output — fast enough for live broadcast without perceptible lag."
        }
      ]
    },
    "impact": {
      "head": "120+ languages. Under two seconds. Tone intact.",
      "cards": [
        {
          "stat": "120+",
          "label": "Languages, Live",
          "desc": "Real-time translation across more than 120 languages — from a single pipeline with no per-language configuration."
        },
        {
          "stat": "<2s",
          "label": "End-to-End Latency",
          "desc": "From the speaker's last word to translated audio output — fast enough for live broadcast without perceptible delay."
        },
        {
          "stat": "6",
          "label": "Proprietary Models Simultaneously",
          "desc": "Tonality, sentiment, facial expression, ASR, translation and vocoding — all running in parallel, every time."
        }
      ]
    },
    "numbers": [
      {
        "v": "120+",
        "l": "Languages, Live"
      },
      {
        "v": "<2 Seconds",
        "l": "End-to-End Translation"
      },
      {
        "v": "6",
        "l": "Simultaneous Models"
      },
      {
        "v": "Broadcast",
        "l": "& Enterprise Grade"
      }
    ]
  },
  {
    "slug": "ai-app-builder-built-for-teams",
    "niche": "agentic-ai-automation",
    "kicker": "Agentic AI · Collaborative App Builder",
    "title": "AI App Builder Built for Teams, Not Just Prompts",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "AI App Builder",
      "Collaboration",
      "Realtime",
      "Concurrency Control"
    ],
    "overview": {
      "head": "The workspace, not the chat, is the unit of work.",
      "paras": [
        "We built a collaborative AI application builder where teams — not individuals — are the primary unit of work. Multiple teammates share a workspace, watch the same agent build in real time, and the database itself prevents two runs from ever colliding.",
        "The result: a structurally safe, cost-efficient platform where team collaboration is a data-model primitive, not a front-end feature."
      ]
    },
    "challenge": {
      "head": "Every AI builder was built for one person with one prompt box.",
      "paras": [
        "The moment a second teammate joined a project, existing tools broke down — there was no shared awareness of what the AI was doing, no role system controlling who could trigger a build, and no protection against two people firing conflicting agent runs on the same codebase simultaneously.",
        "We treated this as a data-modeling problem before a UI problem. If 'team' and 'build' aren't first-class objects in the schema, no amount of front-end polish makes collaboration feel real."
      ]
    },
    "built": {
      "head": "Workspaces. Roles. One active run. By design, not by policy.",
      "features": [
        {
          "t": "Workspace-First Data Model",
          "d": "Every project belongs to a workspace, and every build run belongs to a project — not to the user who typed the prompt. Team and role are schema primitives, not UI overlays."
        },
        {
          "t": "Leased, Auto-Expiring Sandboxes",
          "d": "Cloud sandboxes are provisioned only when genuinely needed and carry their own expiry — idle projects are reclaimed automatically, so storage scales with active work, not total project count."
        },
        {
          "t": "One Active Run Constraint",
          "d": "A unique database constraint makes two concurrent agent runs on one project structurally impossible — not just discouraged. The second request cannot start until the first completes."
        },
        {
          "t": "Real-Time via DB Replication",
          "d": "The live build stream rides on the database's own real-time replication — no separate pub/sub service to manage, monitor or pay for."
        },
        {
          "t": "Append-Only Event Log",
          "d": "Every build step is claimed by exactly one worker with a lease and retry ceiling. The history a team sees is the history that actually happened — no silent reruns, no collisions."
        }
      ]
    },
    "impact": {
      "head": "68% less storage. 71% lower cost. Zero concurrent-build incidents.",
      "cards": [
        {
          "stat": "−68%",
          "label": "Storage Footprint per Project",
          "desc": "From ~2.1 GB always-on to ~680 MB leased — storage scales with active work, not the total number of projects ever created."
        },
        {
          "stat": "−71%",
          "label": "Infrastructure Cost per Project",
          "desc": "From $214 to $61 per active project per month — after the single-active-run constraint shipped."
        },
        {
          "stat": "31 → 0",
          "label": "Concurrent-Build Incidents",
          "desc": "Across ~1,200 projects in four months — from 31 per 1,000 builds to zero after the database constraint went live."
        }
      ]
    },
    "numbers": [
      {
        "v": "−68%",
        "l": "Storage Footprint"
      },
      {
        "v": "−71%",
        "l": "Infrastructure Cost"
      },
      {
        "v": "0",
        "l": "Build Collisions"
      },
      {
        "v": "Workspace",
        "l": "as Unit of Work"
      }
    ]
  },
  {
    "slug": "due-diligence-in-minutes-source-cited",
    "niche": "enterprise-data-knowledge-secure-ai",
    "kicker": "Enterprise AI · Investment Intelligence",
    "title": "Due Diligence in Minutes, Every Answer Source-Cited",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Enterprise AI",
      "Due Diligence",
      "RAG"
    ],
    "overview": {
      "head": "Weeks of research, compressed to minutes.",
      "paras": [
        "We built an agentic due-diligence platform for private equity firms, VCs and family offices — automating the process of answering hundreds of investment questions across data rooms, with every answer linked to its exact source document.",
        "The platform ingests documents from data rooms, drives and local files, learns each firm's checklists and scoring criteria, and delivers answers directly inside the firm's existing spreadsheet, document and presentation tools."
      ]
    },
    "challenge": {
      "head": "Every deal required weeks of manual review — and every answer had to be audit-proof.",
      "paras": [
        "Investment teams spent weeks per deal reading through data rooms, searching for the right paragraph in the right document, and manually compiling answers to due-diligence checklists. The bottleneck wasn't analysis — it was retrieval.",
        "And every answer had to be individually traceable. Regulators, LPs and internal governance all demanded that no claim go uncited — which made automation with any risk of hallucination categorically unacceptable."
      ]
    },
    "built": {
      "head": "Agents that ingest, reason, and cite every answer.",
      "features": [
        {
          "t": "Multi-Source Document Ingestion",
          "d": "Connects to data rooms, cloud drives and local file systems — ingesting PDFs, spreadsheets, presentations and contracts into a unified knowledge base per engagement."
        },
        {
          "t": "Firm-Specific Checklist Learning",
          "d": "Each firm's diligence frameworks, scoring criteria and question templates are learned upfront — so the agent answers according to the firm's own methodology, not a generic one."
        },
        {
          "t": "Source-Linked Answer Generation",
          "d": "Every answer is generated with a direct link to the exact paragraph, page and document it came from — hallucination is structurally prevented by requiring a citation for every claim."
        },
        {
          "t": "Native Office-Suite Integration",
          "d": "Answers are delivered directly inside the spreadsheets, documents and presentations teams already use — no new interface to learn, no copy-paste from a separate tool."
        },
        {
          "t": "Audit-Ready Output",
          "d": "Full SOC 2 Type II and GDPR-compliant infrastructure with end-to-end encryption — every answer, every citation, every session is logged and auditable."
        }
      ]
    },
    "impact": {
      "head": "Hundreds of questions answered. Zero hallucinations. Full audit trail.",
      "cards": [
        {
          "stat": "Weeks → Min",
          "label": "Per Diligence Cycle",
          "desc": "Full due-diligence question sets that used to take weeks of analyst time now complete in a single session."
        },
        {
          "stat": "100%",
          "label": "Answers Source-Traceable",
          "desc": "Every answer links to its exact source — paragraph, page and document. No claim without a citation."
        },
        {
          "stat": "100s",
          "label": "Questions per Engagement",
          "desc": "Entire diligence checklists answered in one run, across multiple documents and data sources simultaneously."
        }
      ]
    },
    "numbers": [
      {
        "v": "Weeks → Min",
        "l": "Per Diligence Cycle"
      },
      {
        "v": "100%",
        "l": "Answers Source-Cited"
      },
      {
        "v": "SOC 2",
        "l": "Type II Certified"
      },
      {
        "v": "E2E",
        "l": "Encrypted"
      }
    ]
  },
  {
    "slug": "one-search-bar-across-every-system",
    "niche": "enterprise-data-knowledge-secure-ai",
    "kicker": "Enterprise AI · Knowledge Management",
    "title": "One Search Bar Across Every System the Company Knows",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Enterprise AI",
      "Knowledge Management",
      "Search"
    ],
    "overview": {
      "head": "A quarter of the week, lost to searching silos.",
      "paras": [
        "We built an enterprise knowledge platform that indexes an organization's entire knowledge estate — wikis, drives, chat tools, legacy systems — and surfaces answers through a single AI-powered search bar, with permissions enforced at the retrieval layer.",
        "Employees ask a question in plain language and get an answer, not a list of documents to open."
      ]
    },
    "challenge": {
      "head": "Knowledge existed everywhere. Nobody could find it.",
      "paras": [
        "The average knowledge worker lost a quarter of their working week searching across disconnected systems — switching between wikis, intranet drives, chat tools, email and legacy systems to find information that should have been a single query away.",
        "Existing enterprise search tools returned documents, not answers. And none of them enforced existing access permissions at the retrieval layer — meaning sensitive documents could surface for users who shouldn't see them."
      ]
    },
    "built": {
      "head": "Enterprise-scale indexing. Permissions at the retrieval layer.",
      "features": [
        {
          "t": "Universal System Indexing",
          "d": "Indexes every internal system the organization uses — wikis, drives, chat platforms, email and legacy tools — into a single, unified knowledge graph."
        },
        {
          "t": "Permission-Aware Retrieval",
          "d": "Every document's existing access permissions are enforced at the retrieval layer, not bolted on afterward — a user only ever sees what they already have access to."
        },
        {
          "t": "Natural-Language AI Assistant",
          "d": "Employees ask questions in plain language and receive answers — not ranked lists of links — with the assistant citing which systems and documents it drew from."
        },
        {
          "t": "Workflow Action Layer",
          "d": "Beyond answering questions, the assistant can trigger actions — creating tickets, drafting documents, updating records — directly from the search interface."
        }
      ]
    },
    "impact": {
      "head": "One bar. Every system. Permissions always enforced.",
      "cards": [
        {
          "stat": "1",
          "label": "Unified Knowledge Layer",
          "desc": "One interface spanning every internal system — no switching, no separate search tools per platform."
        },
        {
          "stat": "100%",
          "label": "Existing Permissions Enforced",
          "desc": "Every access control already set in the source systems is respected at retrieval — no new permission layer to manage."
        },
        {
          "stat": "−25%",
          "label": "Time Lost to Searching",
          "desc": "The average knowledge worker's quarter-week of search time, eliminated by a single natural-language interface."
        }
      ]
    },
    "numbers": [
      {
        "v": "1",
        "l": "Unified Interface"
      },
      {
        "v": "100%",
        "l": "Permissions Enforced"
      },
      {
        "v": "Enterprise",
        "l": "Scale Indexing"
      },
      {
        "v": "NL Answers",
        "l": "+ Workflow Actions"
      }
    ]
  },
  {
    "slug": "production-open-data-portals-government-scale",
    "niche": "enterprise-data-knowledge-secure-ai",
    "kicker": "Enterprise Data · Government Open Data",
    "title": "Production Open Data Portals at Government Scale",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Open Data",
      "Government",
      "Multi-Cloud"
    ],
    "overview": {
      "head": "The infrastructure governments needed, built by the people who wrote it.",
      "paras": [
        "We engineered and maintained production-grade open data portals and data management platforms serving governments, Fortune 500 companies and international NGOs — delivered as multi-cloud SaaS with custom theming, bilingual support and WCAG 2.1 accessibility.",
        "The platform draws on 22 years of continuous operation and more than 720 open-source repositories — the deepest engineering lineage available in the open data infrastructure most government portals run on."
      ]
    },
    "challenge": {
      "head": "Production-grade open data portals required internals expertise almost nobody had.",
      "paras": [
        "Governments needed open data portals that could handle national-scale traffic, multilingual audiences, complex schema requirements and strict accessibility standards — and deploying the leading open-source platform at that level required deep internals knowledge that very few teams in the world possessed.",
        "Most implementations either underdelivered on capability or required ongoing dependency on external consultants who didn't fully understand the platform they were deploying."
      ]
    },
    "built": {
      "head": "Multi-cloud SaaS. 720+ repositories. 22 years in production.",
      "features": [
        {
          "t": "Custom Theming & Bilingual Support",
          "d": "Every portal is built with full custom theming to match government brand standards, with bilingual content management built into the architecture — not retrofitted."
        },
        {
          "t": "Multi-Schema Data Architecture",
          "d": "Handles complex, heterogeneous dataset schemas across departments and agencies — with validation, versioning and schema evolution managed at the platform level."
        },
        {
          "t": "WCAG 2.1 Accessibility",
          "d": "Full compliance with WCAG 2.1 accessibility standards, ensuring every portal is usable by citizens with disabilities — legally required in most jurisdictions."
        },
        {
          "t": "Multi-Cloud Kubernetes Infrastructure",
          "d": "Deployed on AWS, GCP and Azure using Kubernetes, Terraform and Helm — with true multi-cloud portability and no vendor lock-in at the infrastructure layer."
        },
        {
          "t": "Open-Source Stewardship",
          "d": "720+ open-source repositories maintained across 22 years — giving clients direct access to the upstream maintainers of the ecosystem their infrastructure runs on."
        }
      ]
    },
    "impact": {
      "head": "22 years. 720+ repos. Governments running at national scale.",
      "cards": [
        {
          "stat": "22 Years",
          "label": "Continuous Operation",
          "desc": "Two decades of production open data infrastructure — longer than most of the platforms built on top of this work."
        },
        {
          "stat": "720+",
          "label": "Open-Source Repositories",
          "desc": "Active repositories maintained by the team — the backbone of the global open data ecosystem."
        },
        {
          "stat": "Multi-Cloud",
          "label": "AWS · GCP · Azure",
          "desc": "True multi-cloud deployments on Kubernetes — no infrastructure lock-in for any government client."
        }
      ]
    },
    "numbers": [
      {
        "v": "22 Years",
        "l": "In Production"
      },
      {
        "v": "720+",
        "l": "OSS Repositories"
      },
      {
        "v": "Multi-Cloud",
        "l": "AWS · GCP · Azure"
      },
      {
        "v": "WCAG 2.1",
        "l": "Accessibility"
      }
    ]
  },
  {
    "slug": "ai-on-sensitive-data-zero-egress",
    "niche": "enterprise-data-knowledge-secure-ai",
    "kicker": "Enterprise AI · Secure & Private AI",
    "title": "AI on Sensitive Data — With Zero Egress",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Private AI",
      "Encryption",
      "On-Premise"
    ],
    "overview": {
      "head": "Regulated enterprises wanted AI. Compliance said the data couldn't leave.",
      "paras": [
        "We built a privacy-first enterprise AI platform that runs AI directly on sensitive data — without that data ever leaving the organization's perimeter, even during inference.",
        "The platform supports cloud, hybrid and fully on-premise deployment, with 500+ data-source connectors and AI running under homomorphic encryption."
      ]
    },
    "challenge": {
      "head": "Every AI solution required sending sensitive data to an external server.",
      "paras": [
        "Regulated enterprises in automotive, finance, healthcare and ad-tech wanted to run AI on their most sensitive internal data — but every solution on the market required that data to leave their perimeter for processing. Compliance teams said no. Procurement said no. Legal said no.",
        "The encryption-based workarounds that existed were either too slow for production use or required rebuilding data pipelines from scratch. The market had no ready answer."
      ]
    },
    "built": {
      "head": "Encrypted inference. 500+ connectors. Nothing leaves the building.",
      "features": [
        {
          "t": "Real-Time ETL & Vectorization Pipeline",
          "d": "Ingests, transforms and vectorizes data from 500+ structured and unstructured sources in real time — feeding encrypted knowledge bases without data ever moving to an external server."
        },
        {
          "t": "Homomorphic Encryption at Inference",
          "d": "RAG, table-augmented generation and NL-to-SQL all run under homomorphic encryption — so the model operates on encrypted data without ever seeing the plaintext."
        },
        {
          "t": "RAG + TAG + NL-to-SQL",
          "d": "Three retrieval and generation modes supported: retrieval-augmented generation for documents, table-augmented generation for structured data, and natural-language-to-SQL for live database querying."
        },
        {
          "t": "Zero-Egress On-Premise Deployment",
          "d": "Fully on-premise deployments where nothing leaves the building — no API calls to external models, no telemetry, no external data transfer of any kind."
        },
        {
          "t": "Cloud, Hybrid or On-Premise",
          "d": "Flexible deployment architecture across all three modes — with the same security guarantees whether running in a private cloud, hybrid environment or air-gapped data center."
        }
      ]
    },
    "impact": {
      "head": "Enterprise AI on sensitive data. Zero exposure. Analyzed in place.",
      "cards": [
        {
          "stat": "500+",
          "label": "Data Source Connectors",
          "desc": "Structured and unstructured sources — from cloud data warehouses to document repositories and internal databases — all analyzed in place."
        },
        {
          "stat": "0",
          "label": "Data Egress On-Premise",
          "desc": "In fully on-premise mode, nothing leaves the building — not during ingestion, vectorization, inference or output."
        },
        {
          "stat": "3 Modes",
          "label": "RAG · TAG · NL-to-SQL",
          "desc": "Documents, structured tables and live databases — all queryable in natural language, all under encryption."
        }
      ]
    },
    "numbers": [
      {
        "v": "500+",
        "l": "Data Connectors"
      },
      {
        "v": "0 Egress",
        "l": "On-Premise Mode"
      },
      {
        "v": "Homomorphic",
        "l": "Encrypted Inference"
      },
      {
        "v": "3 Deploy Modes",
        "l": "Cloud · Hybrid · On-Prem"
      }
    ]
  },
  {
    "slug": "geostats-single-map-entire-city",
    "niche": "enterprise-data-knowledge-secure-ai",
    "kicker": "TAGS Product · Geo-Intelligence & Urban Analytics",
    "title": "GeoStats — A Single Map for an Entire City's Data",
    "client": {
      "type": "product",
      "name": "GeoStats",
      "url": "geostats.ai"
    },
    "tags": [
      "TAGS Product",
      "Geo-Intelligence",
      "Urban Analytics"
    ],
    "overview": {
      "head": "Four fragmented datasets. One decision-ready platform.",
      "paras": [
        "We built GeoStats, our own geo-intelligence and urban analytics platform, which layers population, income, mobility and real-estate data onto a single interactive map — covering an entire metropolitan region — with an AI insight engine that turns raw data into location-specific recommendations.",
        "Planners, developers and investors now query an entire city's worth of data from one interface, replacing weeks of manual cross-referencing."
      ]
    },
    "challenge": {
      "head": "Population, income, mobility and property data all lived in separate systems.",
      "paras": [
        "Urban planners, real-estate developers and investors working across a major metropolitan region had to manually cross-reference four distinct datasets — each maintained by a different authority, in a different format, on a different system — before they could make a single location decision.",
        "That cross-referencing took weeks per analysis. Insights were stale by the time the work was done, and there was no way to query across all four dimensions simultaneously."
      ]
    },
    "built": {
      "head": "Four datasets. One map. AI that turns data into decisions.",
      "features": [
        {
          "t": "Four-Layer Geospatial Engine",
          "d": "Population, income, mobility and real-estate transaction data layered onto interactive maps with full drill-down capability — from metropolitan region to individual neighborhood."
        },
        {
          "t": "AI Insight Generation",
          "d": "An AI engine translates the raw data layers into location-specific recommendations for planning decisions, investment analysis and development feasibility — going beyond visualization to actionable insight."
        },
        {
          "t": "City-Wide Coverage",
          "d": "Comprehensive data coverage across an entire metropolitan region — every district, zone and neighborhood represented in the platform without gaps."
        },
        {
          "t": "Interactive Map-Based Interface",
          "d": "A map-first interface where planners and investors explore data spatially — filtering by metric, comparing zones and generating reports directly from the map view."
        }
      ]
    },
    "impact": {
      "head": "Weeks of research. On demand. Across an entire metropolitan region.",
      "cards": [
        {
          "stat": "4 Layers",
          "label": "Population · Income · Mobility · Real Estate",
          "desc": "All four data dimensions queryable simultaneously from a single map interface."
        },
        {
          "stat": "1 Platform",
          "label": "Replacing Manual Cross-Referencing",
          "desc": "Weeks of data assembly replaced by on-demand, AI-powered location intelligence."
        },
        {
          "stat": "City-Wide",
          "label": "Coverage",
          "desc": "Every district and neighborhood in the metropolitan region represented — no gaps, no partial data."
        }
      ]
    },
    "numbers": [
      {
        "v": "4 Data Layers",
        "l": "On One Map"
      },
      {
        "v": "City-Wide",
        "l": "Coverage"
      },
      {
        "v": "AI-Powered",
        "l": "Insight Generation"
      },
      {
        "v": "On-Demand",
        "l": "vs Weeks of Research"
      }
    ]
  },
  {
    "slug": "financial-crime-compliance-regulators-can-audit",
    "niche": "fintech-revenue-compliance",
    "kicker": "Fintech · Compliance Automation",
    "title": "Financial-Crime Compliance That Regulators Can Audit",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Fintech",
      "Compliance",
      "AML"
    ],
    "overview": {
      "head": "Automated decisions. Every one explainable.",
      "paras": [
        "We built an AI-agent compliance workforce for banks and fintechs — automating AML screening, KYB/KYC, transaction monitoring and enhanced due diligence, with a full audit trail and explainability baked into every decision.",
        "Regulators don't approve black-box automation. We built the system so every decision is individually auditable and explainable by design — not summarized after the fact."
      ]
    },
    "challenge": {
      "head": "Compliance teams were overwhelmed. Regulators required explainability bots couldn't provide.",
      "paras": [
        "Financial-crime compliance consumed entire teams — AML screening, KYB/KYC verification, ongoing monitoring and EDD all running in parallel, each demanding human review. Automation existed, but regulators refused to approve it: black-box decisions with no audit trail were categorically unacceptable.",
        "The constraint was total: automation was only viable if every single decision was individually auditable, with a reasoning chain a regulator could follow — not a summary generated after the fact."
      ]
    },
    "built": {
      "head": "Compliance agents. Reasoning chains. Full audit trail on every decision.",
      "features": [
        {
          "t": "LLM-Based Document Extraction",
          "d": "Agents extract structured information from KYB/KYC documents, company filings, beneficial ownership records and transaction histories — with the extraction logic auditable."
        },
        {
          "t": "Explainable Reasoning Chain",
          "d": "Every compliance decision is generated with a full step-by-step reasoning chain — not a score with a post-hoc justification, but reasoning baked into the decision process itself."
        },
        {
          "t": "Full Audit Trail on Every Decision",
          "d": "Every agent action, document reviewed, reasoning step and final decision is logged — producing a complete, regulator-ready audit trail with no gaps."
        },
        {
          "t": "AML · KYB/KYC · Monitoring · EDD",
          "d": "All four core compliance workflows automated end-to-end — from initial screening through to enhanced due diligence — on a single agent platform."
        },
        {
          "t": "SDK Integration, No Rip-and-Replace",
          "d": "Integrates into existing compliance infrastructure via an official SDK — no need to replace existing systems, data pipelines or workflows."
        }
      ]
    },
    "impact": {
      "head": "End-to-end compliance automation. 100% of decisions regulators can follow.",
      "cards": [
        {
          "stat": "100%",
          "label": "Decisions Explainable",
          "desc": "Every compliance decision includes a full, step-by-step reasoning chain — auditable by regulators without additional documentation."
        },
        {
          "stat": "100%",
          "label": "Full Audit Trail",
          "desc": "Every agent action, document and decision is logged — producing a complete record with no gaps."
        },
        {
          "stat": "4 Workflows",
          "label": "AML · KYB/KYC · Monitoring · EDD",
          "desc": "All four core financial-crime compliance workflows automated on a single platform."
        }
      ]
    },
    "numbers": [
      {
        "v": "100%",
        "l": "Decisions Explainable"
      },
      {
        "v": "100%",
        "l": "Full Audit Trail"
      },
      {
        "v": "0",
        "l": "Black-Box Decisions"
      },
      {
        "v": "SDK",
        "l": "No Rip-and-Replace"
      }
    ]
  },
  {
    "slug": "quote-to-cash-no-revenue-leakage",
    "niche": "fintech-revenue-compliance",
    "kicker": "Fintech · Revenue Operations",
    "title": "Quote-to-Cash With No Revenue Leakage",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Fintech",
      "CPQ",
      "Billing"
    ],
    "overview": {
      "head": "Every pricing change. Propagated in real time.",
      "paras": [
        "We built an AI-native CPQ and billing platform that unifies pricing, quoting, usage-based billing, invoicing and revenue recognition in one engine — eliminating the revenue leakage that happens when sales and finance operate in separate tools.",
        "The platform meters down to individual tokens and API calls, making it a revenue engine that can handle AI and SaaS usage-based pricing with the precision those models require."
      ]
    },
    "challenge": {
      "head": "Revenue leaked between what sales quoted and what finance billed.",
      "paras": [
        "Pricing lived in spreadsheets. Billing ran on a separate tool. Every time pricing changed, someone had to manually update both — and the gaps between them were where revenue disappeared. For AI companies with token-based and API-call-based pricing, the problem was worse: no legacy billing tool had the metering granularity to handle it.",
        "The result was systematic revenue leakage that showed up only at reconciliation — by which point it was too late to recover."
      ]
    },
    "built": {
      "head": "One engine. Quote to cash. Token-level metering built in.",
      "features": [
        {
          "t": "Unified Pricing & Quoting Engine",
          "d": "Pricing rules, discount logic, approval workflows and quote generation all run from a single engine — so what sales quotes is always what finance will bill."
        },
        {
          "t": "Token & API-Call-Level Metering",
          "d": "Usage-based billing metered down to individual tokens and API calls — the granularity required for AI products, SaaS consumption models and any usage-tied pricing."
        },
        {
          "t": "Real-Time Quote-to-Cash Propagation",
          "d": "Every pricing change propagates across the full quote-to-cash chain in real time — no manual updates, no synchronization lag, no reconciliation gaps."
        },
        {
          "t": "Multi-Currency & Revenue Recognition",
          "d": "Native multi-currency support with automatic revenue recognition rules — GAAP-aligned, audit-ready, without a separate accounting integration."
        },
        {
          "t": "CRM & ERP Integration",
          "d": "Connects into existing CRM and ERP systems so sales and finance work in their own tools — with the billing engine handling synchronization automatically."
        }
      ]
    },
    "impact": {
      "head": "Revenue leakage eliminated. Real-time across the full quote-to-cash chain.",
      "cards": [
        {
          "stat": "0",
          "label": "Revenue Leakage",
          "desc": "Unified quote-to-cash engine eliminates the gaps between sales pricing and finance billing — systematically, not on a case-by-case basis."
        },
        {
          "stat": "Real-Time",
          "label": "Pricing Propagation",
          "desc": "Every pricing change reflected across quotes, invoices and revenue recognition simultaneously — with no manual steps."
        },
        {
          "stat": "Token-Level",
          "label": "Usage Metering",
          "desc": "Granularity down to individual tokens and API calls — making AI and consumption-based pricing accurate for the first time."
        }
      ]
    },
    "numbers": [
      {
        "v": "0",
        "l": "Revenue Leakage"
      },
      {
        "v": "Real-Time",
        "l": "Quote-to-Cash"
      },
      {
        "v": "Token-Level",
        "l": "Metering"
      },
      {
        "v": "Multi-Currency",
        "l": "Audit-Ready"
      }
    ]
  },
  {
    "slug": "institutional-grade-liquid-staking",
    "niche": "fintech-revenue-compliance",
    "kicker": "Fintech · Institutional Staking",
    "title": "Institutional-Grade Liquid Staking Infrastructure",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Fintech",
      "Staking",
      "Smart Contracts"
    ],
    "overview": {
      "head": "Governance-grade control. Audit-ready reporting.",
      "paras": [
        "We built a liquid staking vault infrastructure for institutional investors — delivering the operator control, compliance monitoring and audit-ready reporting that governance boards require, in a format retail staking tools have never provided.",
        "The platform runs end-to-end vault operations from a single console, backed by audited smart contracts and a multi-operator validator framework."
      ]
    },
    "challenge": {
      "head": "Institutions wanted staking exposure. Retail tools had none of the governance controls they needed.",
      "paras": [
        "Institutional appetite for staking returns was real — but every available tool was built for retail participants. No operator control over validator selection. No compliance monitoring. No board-ready reporting. Governance teams had no way to approve participation without infrastructure that met their standards.",
        "Audited smart contracts existed in the ecosystem, but assembling them into an institutional-grade operations console — with compliance, reporting and liquidity execution — required building from the protocol layer up."
      ]
    },
    "built": {
      "head": "End-to-end vault operations. One console. Board-ready.",
      "features": [
        {
          "t": "Node-Operator Selection & Control",
          "d": "Full operator-level control over validator selection — institutions choose and manage their node operators according to their own risk and compliance criteria."
        },
        {
          "t": "Compliance Monitoring",
          "d": "Real-time monitoring of validator performance, slashing risk and regulatory exposure — with alerts and dashboards built for compliance teams, not just engineers."
        },
        {
          "t": "Audit-Ready Reporting",
          "d": "Automated reporting that produces the documentation governance boards require — transaction histories, validator performance, yield attribution — exportable and audit-ready."
        },
        {
          "t": "Audited Smart Contracts",
          "d": "All vault operations run on formally audited smart contracts — providing the security assurance institutional legal and risk teams require before approving any deployment."
        },
        {
          "t": "Dashboard + Enterprise APIs",
          "d": "Operates via a console dashboard for human oversight and exposes enterprise APIs for integration into existing treasury management and reporting systems."
        }
      ]
    },
    "impact": {
      "head": "Governance-grade staking. From a single console.",
      "cards": [
        {
          "stat": "1 Console",
          "label": "Full Vault Operations",
          "desc": "Node selection, compliance monitoring, reporting and liquidity execution — all from a single institutional dashboard."
        },
        {
          "stat": "Audited",
          "label": "Smart Contracts",
          "desc": "Formally audited at the protocol layer — providing the assurance institutional legal and risk teams require."
        },
        {
          "stat": "Board-Ready",
          "label": "Compliance Reporting",
          "desc": "Reporting built for governance teams — exportable, audit-ready, and formatted for board-level review."
        }
      ]
    },
    "numbers": [
      {
        "v": "1 Console",
        "l": "End-to-End Operations"
      },
      {
        "v": "Audited",
        "l": "Smart Contracts"
      },
      {
        "v": "Board-Ready",
        "l": "Reporting"
      },
      {
        "v": "Enterprise",
        "l": "APIs Included"
      }
    ]
  },
  {
    "slug": "real-time-financial-intelligence-day-one",
    "niche": "fintech-revenue-compliance",
    "kicker": "Fintech · Financial Intelligence",
    "title": "Real-Time Financial Intelligence From Day One",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Fintech",
      "Analytics",
      "Forecasting"
    ],
    "overview": {
      "head": "Not day 100. Day one.",
      "paras": [
        "We built a financial intelligence platform that gives founders and operators real-time accounting, banking sync, cash-flow tracking and scenario forecasting — from day one, without months of setup.",
        "Automatic background reconciliations, preset dashboards and AI-assisted forecast upload replace the monthly spreadsheet process entirely."
      ]
    },
    "challenge": {
      "head": "Financial software promised clarity. Then required months before delivering any.",
      "paras": [
        "Founders were managing finances across accounting tools, banking portals, spreadsheets and email — four systems that never talked to each other. The software marketed to fix this required months of onboarding before it produced anything useful.",
        "By the time the dashboards were configured, the data was already stale. Operators were making decisions on last month's numbers assembled by hand."
      ]
    },
    "built": {
      "head": "Real-time sync. Preset dashboards. Reconciles itself daily.",
      "features": [
        {
          "t": "Real-Time Accounting & Banking Sync",
          "d": "Connects to accounting software and banking APIs simultaneously — pulling both sides of every transaction in real time so the picture is always current."
        },
        {
          "t": "Preset Dashboards from Day One",
          "d": "Financial statements, cash-flow tracking and key metrics are available immediately on setup — no configuration period, no waiting for historical data to load."
        },
        {
          "t": "Automatic Background Reconciliation",
          "d": "Daily reconciliation runs automatically in the background — discrepancies surface as alerts rather than being discovered manually at month end."
        },
        {
          "t": "AI-Assisted Forecast Upload",
          "d": "Upload a forecast in any format and AI maps it to the platform's forecasting model — no manual re-entry, no template constraints."
        },
        {
          "t": "Scenario Forecasting",
          "d": "Multiple financial scenarios modeled simultaneously — so operators can see the cash-flow implications of different growth, cost or revenue assumptions before committing."
        }
      ]
    },
    "impact": {
      "head": "Real-time financial intelligence. From pre-revenue to $50M businesses.",
      "cards": [
        {
          "stat": "Day 1",
          "label": "Value Delivered",
          "desc": "Preset dashboards, real-time sync and automatic reconciliation available from the moment of setup — not after months of onboarding."
        },
        {
          "stat": "Daily",
          "label": "Automatic Reconciliation",
          "desc": "Background reconciliation runs every day — discrepancies surface as alerts, not month-end surprises."
        },
        {
          "stat": "Real-Time",
          "label": "Accounting + Banking Sync",
          "desc": "Both sides of every transaction pulled simultaneously — no lag between what the bank shows and what the dashboard shows."
        }
      ]
    },
    "numbers": [
      {
        "v": "Day 1",
        "l": "Dashboards Ready"
      },
      {
        "v": "Real-Time",
        "l": "Accounting Sync"
      },
      {
        "v": "Daily",
        "l": "Auto-Reconciliation"
      },
      {
        "v": "$0 → $50M",
        "l": "Business Range Served"
      }
    ]
  },
  {
    "slug": "one-system-entire-digital-marketing-stack",
    "niche": "sales-marketing-growth",
    "kicker": "Marketing · Agentic Platform",
    "title": "One System for the Entire Digital Marketing Stack",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Marketing",
      "SEO",
      "AEO"
    ],
    "overview": {
      "head": "SEO. Ads. Content. Site. And AI visibility — built in.",
      "paras": [
        "We built an agentic marketing platform that unifies SEO, answer-engine optimization, paid ads, content and site building into a single execution system — replacing the disconnected point-tool stack most marketing teams operate.",
        "Answer-engine optimization — brand visibility inside AI chat tools — is architecturally built in, not bolted on as a feature."
      ]
    },
    "challenge": {
      "head": "Marketing teams ran a dozen tools. And missed the new battleground entirely.",
      "paras": [
        "Agencies and enterprise marketing teams were managing SEO, paid ads, content creation and site management across six to twelve separate platforms — each with its own data, its own reporting and its own context. Coordination overhead consumed the time that should have gone to execution.",
        "Meanwhile, a new channel had emerged that none of these tools addressed: brand visibility inside AI answer engines. AI chat tools now answer millions of buying-intent queries per day — and classic SEO couldn't reach them."
      ]
    },
    "built": {
      "head": "One system. Nine CMS platforms. AEO built into the architecture.",
      "features": [
        {
          "t": "SEO & Answer-Engine Optimization (AEO)",
          "d": "Unified SEO and AEO in one system — optimizing for traditional search rankings and for brand visibility inside AI answer engines simultaneously, from the same interface."
        },
        {
          "t": "Paid Ads Management",
          "d": "Paid search and social campaigns managed from the same platform as organic — with shared audience data, unified reporting and no switching between tools."
        },
        {
          "t": "Content Creation & Publishing",
          "d": "AI-assisted content creation and publishing integrated into the same system — so content strategy, creation and distribution flow without export/import steps."
        },
        {
          "t": "Site Building",
          "d": "A site builder integrated directly into the platform — so landing pages and content sites are built and published within the same tool that measures their performance."
        },
        {
          "t": "Nine CMS Integrations + Scale Analytics",
          "d": "Connects to nine CMS platforms so teams aren't forced to migrate existing sites. ClickHouse-scale analytics infrastructure handles enterprise data volumes without slowdown."
        }
      ]
    },
    "impact": {
      "head": "One system. Every channel. Including the one most competitors haven't started.",
      "cards": [
        {
          "stat": "1 System",
          "label": "Replacing the Point-Tool Stack",
          "desc": "SEO, AEO, paid ads, content and site building — all executing from a single platform instead of six to twelve separate tools."
        },
        {
          "stat": "9 CMS",
          "label": "Platforms Integrated",
          "desc": "Teams connect their existing CMS without migration — the platform works with what they already have."
        },
        {
          "stat": "AEO",
          "label": "AI Visibility Built In",
          "desc": "Answer-engine optimization is architecturally native — not an add-on — giving clients visibility in AI tools most competitors aren't measuring yet."
        }
      ]
    },
    "numbers": [
      {
        "v": "1 System",
        "l": "Full Marketing Stack"
      },
      {
        "v": "9 CMS",
        "l": "Platforms Connected"
      },
      {
        "v": "AEO",
        "l": "AI Visibility Native"
      },
      {
        "v": "ClickHouse",
        "l": "Scale Analytics"
      }
    ]
  },
  {
    "slug": "marketing-analytics-thousands-of-brands",
    "niche": "sales-marketing-growth",
    "kicker": "E-Commerce · Analytics",
    "title": "Marketing Analytics for Thousands of Brands — Zero Engineering Required",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "E-Commerce",
      "Analytics",
      "AI Agents"
    ],
    "overview": {
      "head": "Accurate numbers. In plain English. No data engineers.",
      "paras": [
        "We built an all-in-one e-commerce analytics platform trusted by thousands of online brands — ingesting 50+ live data integrations into dedicated data warehouses, with AI agents providing media-buying and inventory recommendations in natural language.",
        "Every brand gets its own dedicated warehouse — data is never shared, commingled or processed in a shared environment."
      ]
    },
    "challenge": {
      "head": "Accurate marketing numbers required data engineers most brands couldn't afford.",
      "paras": [
        "E-commerce brands were tracking CAC, LTV and ROAS across spreadsheets assembled from multiple export files — a process that took hours, produced stale numbers, and required engineering skills most marketing teams didn't have.",
        "The tools that promised to fix it either oversimplified to the point of uselessness or required a full data engineering team to maintain. Brands were flying blind on their marketing spend because the alternative was too expensive to build."
      ]
    },
    "built": {
      "head": "50+ integrations. Dedicated warehouses. Natural-language querying.",
      "features": [
        {
          "t": "50+ Live Data Integrations",
          "d": "Every data source an online brand uses — ad platforms, storefronts, email tools, payment providers — ingested and cleaned automatically, with no manual export steps."
        },
        {
          "t": "Dedicated Warehouse per Brand",
          "d": "Each brand's data lives in its own dedicated warehouse — never shared, never commingled with another brand's data, regardless of platform size."
        },
        {
          "t": "AI Agents on a Semantic Layer",
          "d": "AI agents sit on top of a semantic layer that understands commerce-specific concepts — CAC, LTV, ROAS, cohort retention — so recommendations are commercially meaningful, not just statistically correct."
        },
        {
          "t": "Natural-Language Commerce Querying",
          "d": "Brands ask questions about their data in plain English and receive answers — no SQL, no dashboards to configure, no analyst required to interpret the output."
        }
      ]
    },
    "impact": {
      "head": "Thousands of brands. Accurate data. No engineering team required.",
      "cards": [
        {
          "stat": "2,700+",
          "label": "Brands on Platform",
          "desc": "Online brands of all sizes running marketing analytics without a data engineering team."
        },
        {
          "stat": "50+",
          "label": "Live Data Integrations",
          "desc": "Every commerce data source ingested and cleaned automatically — no manual exports, no stale data."
        },
        {
          "stat": "1 Warehouse",
          "label": "Per Brand",
          "desc": "Dedicated warehouse for every brand — data never shared or commingled."
        }
      ]
    },
    "numbers": [
      {
        "v": "2,700+",
        "l": "Brands on Platform"
      },
      {
        "v": "50+",
        "l": "Live Integrations"
      },
      {
        "v": "Dedicated",
        "l": "Warehouse per Brand"
      },
      {
        "v": "NL Querying",
        "l": "No SQL Required"
      }
    ]
  },
  {
    "slug": "gosalify-signal-to-outreach",
    "niche": "sales-marketing-growth",
    "kicker": "TAGS Product · Sales Automation & Lead Intelligence",
    "title": "GoSalify — Signal-to-Outreach in One Platform",
    "client": {
      "type": "product",
      "name": "GoSalify",
      "url": "gosalify.com"
    },
    "tags": [
      "TAGS Product",
      "Sales Automation",
      "Lead Intelligence"
    ],
    "overview": {
      "head": "Live signals. Scored leads. Personalized outreach. Warm sending.",
      "paras": [
        "We built GoSalify, our own AI-native sales automation platform, which sources leads from live hiring signals, enriches and scores them with written justification, personalizes outreach using real company context, and delivers through managed sending infrastructure — all from a single platform.",
        "The platform eliminates the manual prospecting, copywriting and deliverability work that consumed 30+ hours per week per rep."
      ]
    },
    "challenge": {
      "head": "Sales teams burned 30+ hours a week on prospecting — and still sent generic outreach.",
      "paras": [
        "Reps were manually searching job boards, professional networks and company websites to build prospect lists — then enriching contacts one by one, scoring them by gut feel, and writing outreach that referenced generic company facts anyone could have pulled. The process was slow, repetitive and produced outreach nobody answered.",
        "Deliverability was a separate problem: even well-written outreach landed in spam because sending infrastructure wasn't warmed, monitored or maintained."
      ]
    },
    "built": {
      "head": "Signal detection. Enrichment. Scoring. LLM personalization. Warmed sending.",
      "features": [
        {
          "t": "Live Signal Detection Agent",
          "d": "Polls live job-posting data across a 30M+ company and 250M+ profile index with sub-24-hour freshness — detecting buying signals before competitors are even aware of them."
        },
        {
          "t": "Enrichment Pipeline",
          "d": "Attaches firmographic, technographic and contact data to every detected signal — building a complete prospect record without manual research."
        },
        {
          "t": "Scoring Model with Written Rationale",
          "d": "Every lead is scored with a written justification — not just a number — so reps understand why a prospect is ranked and can prioritize intelligently."
        },
        {
          "t": "LLM Personalization on Real Context",
          "d": "Outreach is personalized by an LLM conditioned on real, signal-derived company context — not templated tokens. Every message reflects something actually happening at that company."
        },
        {
          "t": "Managed Sending with Pre-Warmed Inboxes",
          "d": "Outreach delivers through managed infrastructure with pre-warmed inboxes and built-in CRM — handling deliverability, tracking and follow-up sequences automatically."
        }
      ]
    },
    "impact": {
      "head": "30 hours a week back. Per rep. Every week.",
      "cards": [
        {
          "stat": "~30 hrs",
          "label": "Manual Work Eliminated per User/Week",
          "desc": "The research, copywriting and deliverability management that consumed a rep's week, automated end-to-end."
        },
        {
          "stat": "30–120",
          "label": "Scored Leads Delivered Daily",
          "desc": "Qualified, enriched and scored prospects — each with a written rationale — delivered every day without rep input."
        },
        {
          "stat": "<24hr",
          "label": "Signal Freshness",
          "desc": "Hiring and growth signals detected and actioned within 24 hours — before most competitors have noticed them."
        }
      ]
    },
    "numbers": [
      {
        "v": "~30 hrs",
        "l": "Saved per Rep/Week"
      },
      {
        "v": "30M+",
        "l": "Company Index"
      },
      {
        "v": "250M+",
        "l": "Profile Index"
      },
      {
        "v": "<24hr",
        "l": "Signal Freshness"
      }
    ]
  },
  {
    "slug": "legacy-ecommerce-platform-rebuilt",
    "niche": "sales-marketing-growth",
    "kicker": "E-Commerce · Platform Engineering",
    "title": "A Legacy E-Commerce Platform, Rebuilt for Performance",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "E-Commerce",
      "React",
      "PWA"
    ],
    "overview": {
      "head": "8-second load times. 78% cart abandonment. We fixed both.",
      "paras": [
        "We rebuilt a legacy e-commerce platform using a modern React headless architecture — reducing page load times from over 8 seconds to 1.2 seconds, cutting cart abandonment by 45%, and growing mobile traffic by 200% within three months of launch.",
        "A phased migration strategy ensured zero downtime throughout the transition."
      ]
    },
    "challenge": {
      "head": "A platform built for a different era was failing on every modern metric.",
      "paras": [
        "The existing platform was running on outdated technology that produced page load times exceeding 8 seconds on mobile, a cart abandonment rate of 78%, and no responsive design — meaning mobile users, who represented a growing share of traffic, had a fundamentally broken experience.",
        "Scalability was also a hard constraint: the platform couldn't handle traffic spikes during peak seasons, meaning promotional periods — the highest-value commercial moments — were also the most likely to fail."
      ]
    },
    "built": {
      "head": "Headless React. Progressive web app. Optimized checkout. Cloud infrastructure.",
      "features": [
        {
          "t": "Headless Commerce Architecture",
          "d": "Rebuilt the frontend on React with a headless CMS — decoupling the presentation layer from the commerce engine to enable sub-second page loads and full design control."
        },
        {
          "t": "Progressive Web App Features",
          "d": "Implemented PWA capabilities including offline mode, add-to-home-screen and push notifications — delivering an app-quality experience on mobile without an app store dependency."
        },
        {
          "t": "3-Step Checkout Optimization",
          "d": "Redesigned the checkout flow from a multi-page process to a streamlined 3-step experience — the single highest-impact change for cart abandonment reduction."
        },
        {
          "t": "Scalable Cloud Infrastructure",
          "d": "Deployed on cloud infrastructure architected to handle peak traffic without degradation — so promotional periods no longer risk platform failure."
        },
        {
          "t": "Phased Migration, Zero Downtime",
          "d": "A phased rollout strategy with A/B testing and gradual traffic migration ensured the legacy platform stayed live throughout — customers experienced no service interruption."
        }
      ]
    },
    "impact": {
      "head": "150% more conversions. 200% more mobile traffic. In 3 months.",
      "cards": [
        {
          "stat": "150%",
          "label": "Conversion Rate Increase",
          "desc": "Within the first three months of launch — driven by faster load times, mobile optimization and checkout redesign."
        },
        {
          "stat": "1.2s",
          "label": "Page Load Time",
          "desc": "Down from over 8 seconds — a reduction that directly drove the conversion and abandonment improvements."
        },
        {
          "stat": "−45%",
          "label": "Cart Abandonment",
          "desc": "The 3-step checkout and performance improvements together reduced abandonment from 78% to under half that."
        }
      ]
    },
    "numbers": [
      {
        "v": "150%",
        "l": "Conversion Increase"
      },
      {
        "v": "1.2s",
        "l": "Page Load Time"
      },
      {
        "v": "−45%",
        "l": "Cart Abandonment"
      },
      {
        "v": "200%",
        "l": "Mobile Traffic Growth"
      }
    ]
  },
  {
    "slug": "national-property-marketplace-at-scale",
    "niche": "real-estate-proptech-marketplaces",
    "kicker": "Real Estate · Marketplace Engineering",
    "title": "National Property Marketplace at Scale",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Real Estate",
      "Marketplace",
      "Geo-Search"
    ],
    "overview": {
      "head": "Millions of listings. Sub-second search. One backend.",
      "paras": [
        "We built the search and listing infrastructure for one of the region's largest property marketplaces — handling millions of active listings with sub-second geo-query performance under peak load, unified across web and native mobile from a single backend.",
        "A listing published once appears everywhere simultaneously — no sync delays, no platform discrepancies."
      ]
    },
    "challenge": {
      "head": "National traffic. But search lagged, listings went stale and mobile was an afterthought.",
      "paras": [
        "Millions of users were searching for property across the country, but the platform's search engine degraded under load — queries that should resolve in milliseconds were taking seconds, directly impacting conversion.",
        "The mobile experience was a stripped-down version of the desktop site — not a native app — meaning the growing mobile audience had a fundamentally inferior experience. And listing updates weren't reflected in real time, so users were making inquiries on properties that had already moved."
      ]
    },
    "built": {
      "head": "High-concurrency geo-queries. Unified backend. Web and mobile publishing simultaneously.",
      "features": [
        {
          "t": "High-Concurrency Geo-Query Engine",
          "d": "Rebuilt the search engine for geo-query performance at national scale — handling millions of concurrent searches with sub-second response times even during peak load."
        },
        {
          "t": "Unified Web + Native Mobile Backend",
          "d": "A single backend serving both the web platform and native mobile apps — so every listing, price change and status update appears on all platforms simultaneously, with no sync lag."
        },
        {
          "t": "Real-Time Listing Infrastructure",
          "d": "Listings publish once and appear everywhere instantly — web, iOS and Android — eliminating the stale-listing problem that was driving user distrust and wasted inquiries."
        },
        {
          "t": "Peak-Load Architecture",
          "d": "Infrastructure designed for the traffic spikes that come with national-scale marketplaces — promotional periods, new launches and search surges handled without degradation."
        }
      ]
    },
    "impact": {
      "head": "Sub-second search. National scale. One infrastructure, every platform.",
      "cards": [
        {
          "stat": "<1s",
          "label": "Search Response Under Peak Load",
          "desc": "Geo-queries across millions of listings resolved in under a second — even during the highest-traffic periods."
        },
        {
          "stat": "1 Backend",
          "label": "Web + Native Mobile",
          "desc": "A single infrastructure serving all platforms simultaneously — one publish, instant availability everywhere."
        },
        {
          "stat": "Real-Time",
          "label": "Listing Updates",
          "desc": "Price changes, availability updates and new listings appear across all platforms the moment they're published."
        }
      ]
    },
    "numbers": [
      {
        "v": "National",
        "l": "Scale Traffic"
      },
      {
        "v": "<1s",
        "l": "Search Response"
      },
      {
        "v": "1 Backend",
        "l": "Web + Mobile"
      },
      {
        "v": "Real-Time",
        "l": "Listings"
      }
    ]
  },
  {
    "slug": "one-codebase-many-markets",
    "niche": "real-estate-proptech-marketplaces",
    "kicker": "Real Estate · Multi-Market Platform",
    "title": "One Codebase, Many Markets — No Per-Country Rebuild",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Real Estate",
      "Multi-Market",
      "Architecture"
    ],
    "overview": {
      "head": "Multi-currency. Multi-language. Multi-regulatory. From day one.",
      "paras": [
        "We built an international property marketplace architected for simultaneous multi-market operation from the first line of code — one codebase serving multiple countries, each with its own currency, language and regulatory requirements.",
        "Adding a new market is a configuration change, not an engineering project."
      ]
    },
    "challenge": {
      "head": "Every new market meant rebuilding the platform from scratch.",
      "paras": [
        "Property platforms are typically built for one country — one currency, one language, one regulatory framework. Expansion meant starting over: a new codebase, a new infrastructure stack, a new deployment. The cost and time of scaling internationally was prohibitive.",
        "The business needed a platform where market expansion was an operational decision, not an engineering commitment — and where running five countries simultaneously didn't mean maintaining five separate codebases."
      ]
    },
    "built": {
      "head": "One codebase. Multi-market by design. New market = configuration change.",
      "features": [
        {
          "t": "Multi-Currency Architecture",
          "d": "Currency handling built into the data model from the start — not retrofitted — so every listing, transaction and report operates correctly in any currency without code changes."
        },
        {
          "t": "Multi-Language Content Management",
          "d": "Language support at the architecture level — content, legal text, UI strings and SEO metadata all managed per market from a single admin interface."
        },
        {
          "t": "Multi-Regulatory Compliance Layer",
          "d": "Regulatory requirements — property disclosure rules, transaction formats, data residency — configured per market without affecting other markets or requiring code deployments."
        },
        {
          "t": "Single Codebase, Per-Market Configuration",
          "d": "All markets run from the same codebase. Market-specific behavior — currencies, languages, rules, UI variations — is configuration, not code."
        }
      ]
    },
    "impact": {
      "head": "Several countries. One codebase. New market in days, not months.",
      "cards": [
        {
          "stat": "1 Codebase",
          "label": "Multiple Countries Simultaneously",
          "desc": "Every active market runs from the same codebase — no separate builds, no diverging infrastructure per country."
        },
        {
          "stat": "Config Only",
          "label": "To Add a New Market",
          "desc": "Currency, language and regulatory requirements for a new market are set through configuration — no engineering sprint required."
        },
        {
          "stat": "By Design",
          "label": "Not Retrofit",
          "desc": "Multi-currency, multi-language and multi-regulatory architecture built in from the first line of code."
        }
      ]
    },
    "numbers": [
      {
        "v": "1 Codebase",
        "l": "Multiple Countries"
      },
      {
        "v": "Multi-Currency",
        "l": "By Design"
      },
      {
        "v": "Multi-Language",
        "l": "By Design"
      },
      {
        "v": "Config-Only",
        "l": "New-Market Launch"
      }
    ]
  },
  {
    "slug": "findxstorage-ai-marketplace-self-storage",
    "niche": "real-estate-proptech-marketplaces",
    "kicker": "TAGS Product · Real Estate & AI Marketplace",
    "title": "FindXStorage — An AI Marketplace for Both Sides of Self-Storage",
    "client": {
      "type": "product",
      "name": "FindXStorage",
      "url": "findxstorage.com"
    },
    "tags": [
      "TAGS Product",
      "Marketplace",
      "AI"
    ],
    "overview": {
      "head": "Renters get live availability. Owners get demand intelligence.",
      "paras": [
        "We built FindXStorage, our own two-sided self-storage marketplace, which serves both renters and owners with AI — unit matching, live availability and transparent pricing for renters; dynamic demand-based pricing, biometric access control and facility intelligence for owners.",
        "The platform replaces manual management and gut-feel pricing on both sides of the market."
      ]
    },
    "challenge": {
      "head": "Renters searched fragmented listings. Owners priced by gut feel and watched CCTV nobody monitored.",
      "paras": [
        "Renters had no reliable way to find available storage units with real-time pricing — listings were fragmented, availability was stale, and pricing varied arbitrarily. The search experience made finding the right unit a frustrating multi-platform process.",
        "Owners had the opposite problem: no intelligence on demand, no dynamic pricing tools, and security running on standalone CCTV that nobody was actively monitoring. They were leaving revenue on the table and operating facilities reactively."
      ]
    },
    "built": {
      "head": "AI matching. Dynamic pricing. Biometric access. Demand forecasting.",
      "features": [
        {
          "t": "AI Unit Matching",
          "d": "Matches renters to available units based on size requirements, location, budget and real-time availability — surfacing the right option without manual filtering across listings."
        },
        {
          "t": "Dynamic Demand-Based Pricing",
          "d": "Owners set pricing rules; the platform adjusts rates automatically based on demand, seasonality and occupancy — maximizing revenue without manual rate management."
        },
        {
          "t": "Facial Recognition & Smart Locks",
          "d": "Biometric access control with facial recognition and smart lock integration — replacing CCTV-only security with active, identity-verified access management."
        },
        {
          "t": "24/7 AI Chatbot & Automated Billing",
          "d": "Renters interact with a 24/7 AI chatbot for inquiries, bookings and support, with automated billing and payment handling removing manual invoicing entirely."
        },
        {
          "t": "Predictive Maintenance & Demand Forecasting",
          "d": "Facility-level predictive maintenance alerts and demand forecasting dashboards give owners the operational intelligence to manage proactively, not reactively."
        }
      ]
    },
    "impact": {
      "head": "Both sides of the market, served by AI. Transparent pricing. Demand-driven rates.",
      "cards": [
        {
          "stat": "AI",
          "label": "Unit Matching on Live Availability",
          "desc": "Renters matched to available units in real time — size, location, budget and live availability all factored simultaneously."
        },
        {
          "stat": "Dynamic",
          "label": "Demand-Based Pricing",
          "desc": "Owner rates adjust automatically with demand and seasonality — no manual rate management, no revenue left on the table."
        },
        {
          "stat": "Biometric",
          "label": "Facial Recognition Access",
          "desc": "Identity-verified entry replacing passive CCTV — active access management with a full entry audit trail."
        }
      ]
    },
    "numbers": [
      {
        "v": "AI",
        "l": "Unit Matching"
      },
      {
        "v": "Dynamic",
        "l": "Demand Pricing"
      },
      {
        "v": "Biometric",
        "l": "Access Control"
      },
      {
        "v": "24/7",
        "l": "AI Chatbot"
      }
    ]
  },
  {
    "slug": "every-us-zip-code-on-a-phone",
    "niche": "real-estate-proptech-marketplaces",
    "kicker": "Real Estate Analytics · React Native",
    "title": "Every U.S. ZIP Code — On a Phone",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "React Native",
      "Data Visualization",
      "Mapbox GL",
      "GraphQL",
      "PropTech"
    ],
    "overview": {
      "head": "30,000+ ZIP codes. 90+ metrics. No loading spinner.",
      "paras": [
        "We built a real-estate market-intelligence mobile app that turns official U.S. housing data into an interactive four-tier map — State, Metro, County and ZIP — with 90+ tracked metrics, rendered live on a touch-friendly map and responsive from the whole country down to a single ZIP code.",
        "We led the mobile engineering end-to-end: architecture, data layer and the map itself."
      ]
    },
    "challenge": {
      "head": "30,000+ ZIP codes, each carrying dozens of metrics, on a device with a fraction of a server's memory.",
      "paras": [
        "Most map apps show a manageable number of points — restaurants, listings, stores. This app had to show every U.S. ZIP code simultaneously, each carrying dozens of statistics, on a mobile device with limited memory and no guarantee of a fast connection.",
        "The map also had to feel instant: switching metrics, zooming from country to neighborhood, filtering by value range — all without a loading spinner. The engineering question was never 'can we build a map with data on it?' — it was 'how much can we responsibly hold in memory on a phone?'"
      ]
    },
    "built": {
      "head": "Four-tier map. Tiered data strategy. 90+ metrics. Zero per-metric infrastructure cost.",
      "features": [
        {
          "t": "Four-Tier Geographic Map",
          "d": "State → Metro → County → ZIP — automatically switching resolution as the user zooms, rendered on self-hosted vector tiles. The right level of detail at the right zoom level, with no marker clustering."
        },
        {
          "t": "Tiered Data Strategy",
          "d": "State, metro and county data fetched once and cached locally with a daily refresh. ZIP-level data — too large to ever fully cache — streamed live and scoped to exactly what's on screen."
        },
        {
          "t": "One Rendering Pipeline, 90+ Metrics",
          "d": "Color coding computed on-device from live data, so switching from 'Home Value' to 'Population Growth' is instant — no new map style to load, no server round-trip."
        },
        {
          "t": "Semantic GraphQL Layer",
          "d": "A Cube.js semantic layer powers both the map and a national leaderboard/ranking screen, plus downloadable PDF market reports — one data layer serving every surface."
        },
        {
          "t": "Feed, Subscriptions & Push",
          "d": "A market-focused news feed, native in-app-purchase subscriptions, and a push notification system with multi-device support and a remote-triggered force-update safety net."
        }
      ]
    },
    "impact": {
      "head": "Responsive from the country down to a single ZIP.",
      "cards": [
        {
          "stat": "30,000+",
          "label": "ZIP Codes on Mobile",
          "desc": "Every U.S. ZIP code rendered simultaneously — with dozens of statistics each — on a device with a fraction of a server's memory."
        },
        {
          "stat": "90+",
          "label": "Metrics, Zero Per-Metric Cost",
          "desc": "A single rendering pipeline supports 90+ tracked metrics with zero additional infrastructure per metric — adding a data point is a data change, not a map change."
        },
        {
          "stat": "Bounded",
          "label": "Cold Start",
          "desc": "Tiered caching cut cold-start loading to three small, bounded datasets — the unbounded ZIP layer never blocks the app from being usable."
        }
      ]
    },
    "numbers": [
      {
        "v": "30,000+",
        "l": "U.S. ZIP Codes"
      },
      {
        "v": "90+",
        "l": "Tracked Metrics"
      },
      {
        "v": "4-Tier",
        "l": "Geographic Map"
      },
      {
        "v": "Instant",
        "l": "Metric Switching"
      }
    ]
  },
  {
    "slug": "agency-os-design-clients-billing",
    "niche": "real-estate-proptech-marketplaces",
    "kicker": "SaaS · Agency Platform",
    "title": "The Agency OS — Design, Clients and Billing in One Platform",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "SaaS",
      "White-Label",
      "Agencies"
    ],
    "overview": {
      "head": "Pixel-perfect design. White-label. Built for agencies.",
      "paras": [
        "We built a complete Agency OS — a unified platform where web design agencies design client sites with pixel-perfect control, manage clients and projects, automate billing and run AI-powered SEO and site generation — all under their own brand.",
        "Agencies become technology providers, not tool users. Their clients never know the underlying platform exists."
      ]
    },
    "challenge": {
      "head": "Agencies ran design in one tool, clients in another, billing in a third.",
      "paras": [
        "Web design agencies were operating across separate tools for design, client management, project tracking, billing and hosting — each with its own login, its own data and its own cost. The overhead of coordinating across them was consuming time that should have gone to client work.",
        "White-labelling was the other gap: agencies wanted to deliver a technology platform to clients — not just websites — but no existing tool let them brand the entire experience as their own."
      ]
    },
    "built": {
      "head": "Design. CRM. Billing. AI. All under the agency's own brand.",
      "features": [
        {
          "t": "Pixel-Perfect Drag-and-Drop Designer",
          "d": "Full design control at every breakpoint — every element, every screen size — without writing code. If you can dream it, you can drag it."
        },
        {
          "t": "White-Label Platform",
          "d": "The entire platform runs under the agency's own domain, logo and colors. Clients log in to the agency's portal, not the platform's — making the agency the technology provider."
        },
        {
          "t": "Native CRM + Task & Time Tracking",
          "d": "Client management, project tasks and time tracking built natively into the platform — no third-party CRM integration required."
        },
        {
          "t": "Global E-Commerce + 50+ Payment Gateways",
          "d": "Multi-currency online stores with automatic tax handling and 50+ payment gateways — enabling agencies to build and sell e-commerce sites for global clients."
        },
        {
          "t": "AI Site Builder + SEO Automation",
          "d": "AI-generated layouts and content assistance — plus automated SEO meta tag and schema markup generation that continuously improves search visibility."
        }
      ]
    },
    "impact": {
      "head": "Hundreds of thousands of agencies. One platform. Their brand.",
      "cards": [
        {
          "stat": "300,000+",
          "label": "Agencies on Platform",
          "desc": "Agencies of all sizes — from solo freelancers to multi-team studios — running their entire client delivery from one white-labeled platform."
        },
        {
          "stat": "50+",
          "label": "Payment Gateways",
          "desc": "Multi-currency e-commerce with automatic tax handling and 50+ payment providers — enabling truly global client stores."
        },
        {
          "stat": "99.99%",
          "label": "Hosting Uptime",
          "desc": "Enterprise-grade cloud hosting reliability — so the agency's brand is never the reason a client site goes down."
        }
      ]
    },
    "numbers": [
      {
        "v": "300,000+",
        "l": "Agencies"
      },
      {
        "v": "White-Label",
        "l": "Under Agency Brand"
      },
      {
        "v": "50+",
        "l": "Payment Gateways"
      },
      {
        "v": "99.99%",
        "l": "Uptime"
      }
    ]
  },
  {
    "slug": "property-level-risk-pricing-regulator-approved",
    "niche": "domain-native-industry-solutions",
    "kicker": "Insurance · AI Risk Intelligence",
    "title": "Property-Level Risk Pricing — Regulator-Approved",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Insurance",
      "Computer Vision",
      "Risk Models"
    ],
    "overview": {
      "head": "Not postcodes. Individual properties. Every one.",
      "paras": [
        "We built an AI risk-intelligence platform for property and casualty insurers — pricing catastrophe risk at the individual property level, across wildfire, hail, wind, storm and water perils, with five separately regulator-approved models.",
        "The platform covers 99.7% of U.S. properties at 95%+ verified accuracy — delivering up to 62x better risk segmentation than traditional actuarial methods."
      ]
    },
    "challenge": {
      "head": "Insurers priced risk by postcode. Regulators demanded transparency the methods couldn't provide.",
      "paras": [
        "Property and casualty insurers were grouping thousands of properties into single actuarial buckets based on postcode — meaning a well-built, low-risk property paid the same rate as a poorly-maintained one next door. Portfolios were systematically mispriced.",
        "Regulators were simultaneously tightening requirements for transparency in catastrophe risk pricing — demanding that insurers explain their methodology at the individual property level, not at the postcode. The blunt actuarial tables couldn't provide that."
      ]
    },
    "built": {
      "head": "200 billion data points. Computer vision. Five regulator-approved models.",
      "features": [
        {
          "t": "200B+ Property-Level Data Points",
          "d": "Training data drawn from 200 billion+ individual property observations — roof geometry, materials, vegetation proximity, construction year and historical claims — at the parcel level."
        },
        {
          "t": "Computer Vision over Aerial Imagery",
          "d": "Aerial imagery processed by computer vision models that read roof geometry, surface materials and surrounding vegetation — inputs no actuarial table could ever encode."
        },
        {
          "t": "Gradient-Boosted Tree Models",
          "d": "Purpose-built gradient-boosted tree models for each peril — wildfire, hail, wind, storm and water — trained on 20+ years of claims data per peril type."
        },
        {
          "t": "Five Regulator-Approved Peril Models",
          "d": "Each of the five peril models has been individually approved by state regulators — so insurers can use them in rate filings with full regulatory standing."
        },
        {
          "t": "LLM-Assisted Regulatory Filing Analysis",
          "d": "An LLM layer reads and analyses regulatory filing requirements per state — ensuring model outputs align with each jurisdiction's disclosure and methodology standards."
        }
      ]
    },
    "impact": {
      "head": "62x better segmentation. 99.7% of U.S. properties. Regulator-approved.",
      "cards": [
        {
          "stat": "62x",
          "label": "Better Risk Segmentation",
          "desc": "Up to 62 times better differentiation between high and low-risk properties than traditional actuarial postcode grouping."
        },
        {
          "stat": "99.7%",
          "label": "U.S. Property Coverage",
          "desc": "Near-complete coverage of the U.S. residential property stock — priced at the individual parcel level, not the postcode."
        },
        {
          "stat": "95%+",
          "label": "Verified Model Accuracy",
          "desc": "Independently verified accuracy across all five peril models — with each model holding individual regulatory approval."
        }
      ]
    },
    "numbers": [
      {
        "v": "62x",
        "l": "Better Segmentation"
      },
      {
        "v": "99.7%",
        "l": "U.S. Properties"
      },
      {
        "v": "95%+",
        "l": "Model Accuracy"
      },
      {
        "v": "5 Models",
        "l": "Regulator-Approved"
      }
    ]
  },
  {
    "slug": "cargo-arrivals-forecast-daily",
    "niche": "domain-native-industry-solutions",
    "kicker": "Logistics · Predictive Visibility",
    "title": "Cargo Arrivals Forecast Daily — 90% of Ships, Globally",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Logistics",
      "Forecasting",
      "AIS Data"
    ],
    "overview": {
      "head": "Not surprises after they cost money. Days of foresight.",
      "paras": [
        "We built a predictive transportation-visibility platform for shippers, forwarders and logistics providers — forecasting cargo arrivals daily across 30,000+ trade routes covering 90%+ of ships globally, with explainable time-series models and live AIS data.",
        "Roughly 80% of manual logistics tracking work is eliminated — delays and reroutes surface before they cost money, not after."
      ]
    },
    "challenge": {
      "head": "Cargo was tracked manually. Delays surfaced only after they'd already cost money.",
      "paras": [
        "Shippers and forwarders were tracking cargo manually — checking carrier portals, calling agents and updating spreadsheets across dozens of shipments simultaneously. Delays, port congestion and reroutes were discovered reactively — after schedules had already been disrupted and costs incurred.",
        "The data to predict these events existed — in carrier feeds, port systems and satellite AIS signals — but no platform was assembling it into a usable predictive layer. Teams were managing logistics by looking backward."
      ]
    },
    "built": {
      "head": "Explainable forecasting. Live AIS data. 370+ carriers. 800+ ports.",
      "features": [
        {
          "t": "Explainable Time-Series Forecasting",
          "d": "Arrival predictions built on explainable time-series models — not black-box outputs — so logistics teams understand why a shipment is flagged as delayed and can act on the reasoning."
        },
        {
          "t": "Live Carrier, Port & AIS Data",
          "d": "Real-time feeds from 370+ carriers, 800+ ports and satellite AIS signals assembled into a unified predictive layer — 5M+ data points processed daily."
        },
        {
          "t": "30,000+ Trade Route Coverage",
          "d": "Arrival forecasts generated daily across 30,000+ trade routes covering 90%+ of the global commercial shipping fleet — not just major corridors."
        },
        {
          "t": "NLP Freight Invoice Auditing",
          "d": "NLP pipelines that read freight invoices and flag discrepancies automatically — reducing the manual audit work that typically follows every shipment."
        },
        {
          "t": "Shipping Document Digitization",
          "d": "Automated digitization of shipping documents — bills of lading, packing lists, certificates — converting paper and PDF inputs into structured data without manual entry."
        }
      ]
    },
    "impact": {
      "head": "~80% of manual tracking work, gone. Days of arrival foresight.",
      "cards": [
        {
          "stat": "90%+",
          "label": "of Ships, Globally",
          "desc": "Coverage across 30,000+ trade routes — the majority of the global commercial fleet tracked and forecast daily."
        },
        {
          "stat": "~80%",
          "label": "Manual Tracking Work Eliminated",
          "desc": "The spreadsheet updates, carrier portal checks and agent calls that consumed logistics teams — automated end-to-end."
        },
        {
          "stat": "5M+",
          "label": "Data Points Processed Daily",
          "desc": "Carrier feeds, port systems and satellite AIS signals — assembled and processed into predictive outputs every 24 hours."
        }
      ]
    },
    "numbers": [
      {
        "v": "90%+",
        "l": "Ships Globally"
      },
      {
        "v": "30,000+",
        "l": "Trade Routes"
      },
      {
        "v": "~80%",
        "l": "Manual Work Eliminated"
      },
      {
        "v": "5M+",
        "l": "Data Points Daily"
      }
    ]
  },
  {
    "slug": "every-physician-call-becomes-billable-emr",
    "niche": "domain-native-industry-solutions",
    "kicker": "Healthcare · AI Documentation",
    "title": "Every Physician Call Becomes a Billable EMR Record",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Healthcare",
      "HIPAA",
      "Clinical AI"
    ],
    "overview": {
      "head": "Notes. Codes. Zero extra clicks. Automatically.",
      "paras": [
        "We built a HIPAA-compliant AI documentation platform exclusively for physicians — turning every doctor-patient phone call into a structured SOAP note with auto-generated ICD-10 and CPT codes, delivered into existing EMR workflows with zero additional steps.",
        "Calls that previously generated no documentation and no billing now produce complete, billable medical records."
      ]
    },
    "challenge": {
      "head": "Physicians lost hours to documentation. After-hours calls generated nothing at all.",
      "paras": [
        "Physicians were spending hours per day on manual documentation — writing notes, looking up codes and entering data into EMR systems that weren't built to receive conversational input. The documentation burden was consuming clinical time that should have been patient time.",
        "After-hours patient calls were the worst case: the physician took the call, made clinical decisions, and then had to manually document everything — or the call generated no record and no billing code at all."
      ]
    },
    "built": {
      "head": "Medical-grade speech-to-text. Fine-tuned LLMs. SOAP notes. ICD-10. CPT. Zero clicks.",
      "features": [
        {
          "t": "Medical-Grade Speech-to-Text",
          "d": "ASR tuned specifically for clinical conversations — handling medical terminology, physician speech patterns and background noise without degradation in transcription accuracy."
        },
        {
          "t": "Clinically Fine-Tuned LLMs",
          "d": "Language models fine-tuned on clinical documentation — generating SOAP notes that follow clinical structure and language, not generic summarization."
        },
        {
          "t": "RAG-Based Clinical Summarization",
          "d": "Retrieval-augmented generation draws on the patient's prior records to produce contextually accurate summaries — not just transcripts of what was said, but clinically meaningful notes."
        },
        {
          "t": "Auto-Generated ICD-10 & CPT Codes",
          "d": "Diagnostic and procedure codes generated automatically from the clinical content of the call — no code lookup, no manual entry, no missed billing opportunities."
        },
        {
          "t": "Zero-Click EMR Delivery",
          "d": "Completed notes and codes delivered directly into existing EMR workflows with zero extra steps for the physician — the call ends and the record appears."
        }
      ]
    },
    "impact": {
      "head": "Every call documented. Every call billed. Zero extra work for the physician.",
      "cards": [
        {
          "stat": "100%",
          "label": "of Calls Converted to Notes",
          "desc": "Every physician call — including after-hours — becomes a structured SOAP note with billing codes. No call goes undocumented."
        },
        {
          "stat": "0",
          "label": "Extra Clicks for the Physician",
          "desc": "The documentation appears in the EMR automatically — the physician's only job is to make the call."
        },
        {
          "stat": "Auto",
          "label": "ICD-10 & CPT Generated",
          "desc": "Diagnostic and procedure codes generated from call content — billing captured on calls that previously generated nothing."
        }
      ]
    },
    "numbers": [
      {
        "v": "100%",
        "l": "Calls → EMR Records"
      },
      {
        "v": "0",
        "l": "Extra Physician Clicks"
      },
      {
        "v": "Auto",
        "l": "ICD-10 + CPT Codes"
      },
      {
        "v": "HIPAA",
        "l": "Compliant E2E"
      }
    ]
  },
  {
    "slug": "clinic-front-desk-80-percent-automated",
    "niche": "domain-native-industry-solutions",
    "kicker": "Healthcare · Clinic Operations",
    "title": "Clinic Front-Desk Operations — 80% Automated",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Healthcare",
      "AI Agents",
      "Automation"
    ],
    "overview": {
      "head": "One platform. Six tools replaced.",
      "paras": [
        "We built an AI-native operating system for medical spas, wellness clinics and elective-care facilities — replacing a fragmented stack of scheduling, billing, prescription, lab and communication tools with a single coordinated platform.",
        "Roughly 80% of front-desk and administrative work is automated — clinical teams spend their time on patients, not switching between six disconnected tools."
      ]
    },
    "challenge": {
      "head": "Six tools. None of them talking to each other. Front-desk staff drowning in admin.",
      "paras": [
        "Clinics were running separate tools for appointment scheduling, billing, digital prescriptions, lab orders and patient communication — each requiring manual input and none sharing data with the others. Every patient interaction required navigating multiple systems to complete what should have been a single workflow.",
        "Front-desk staff spent the majority of their time on administrative coordination rather than patient-facing work. Clinical teams were doing the same. The tools that promised efficiency were the source of the inefficiency."
      ]
    },
    "built": {
      "head": "Coordinated AI agents. One platform. Multilingual. HIPAA-compliant.",
      "features": [
        {
          "t": "AI Call Answering",
          "d": "An AI agent handles inbound calls — answering patient questions, booking appointments and routing clinical inquiries — with natural, multilingual voice support."
        },
        {
          "t": "Automated Note-Taking & Calendar Management",
          "d": "Clinical notes captured automatically during patient interactions; appointment calendars filled and managed without manual scheduling intervention."
        },
        {
          "t": "Automated Follow-Up Sequences",
          "d": "Post-appointment follow-ups, prescription reminders and treatment plan check-ins triggered automatically — running without front-desk management."
        },
        {
          "t": "Multilingual AI Voice Support",
          "d": "Voice interactions handled in multiple languages — serving diverse patient populations without requiring multilingual staff."
        },
        {
          "t": "Per-Clinic Migration Tooling",
          "d": "Custom migration tooling built for each clinic's existing stack — replacing fragmented tools without disrupting ongoing operations or requiring a hard cutover."
        }
      ]
    },
    "impact": {
      "head": "~80% of admin automated. Clinical teams back on patients.",
      "cards": [
        {
          "stat": "~80%",
          "label": "Front-Desk Tasks Automated",
          "desc": "Calls, notes, scheduling, follow-ups and billing — the majority of what consumed front-desk time, now handled by coordinated AI agents."
        },
        {
          "stat": "1 Platform",
          "label": "Replacing Six Tools",
          "desc": "A single coordinated system where every clinical and administrative workflow shares data — no switching, no manual synchronization."
        },
        {
          "stat": "Multilingual",
          "label": "AI Voice Support",
          "desc": "Patient calls handled in multiple languages — expanding the clinic's accessible patient base without adding multilingual staff."
        }
      ]
    },
    "numbers": [
      {
        "v": "~80%",
        "l": "Admin Automated"
      },
      {
        "v": "1 Platform",
        "l": "6 Tools Replaced"
      },
      {
        "v": "Multilingual",
        "l": "AI Voice"
      },
      {
        "v": "HIPAA",
        "l": "Compliant"
      }
    ]
  },
  {
    "slug": "clinic-management-ai-health-tools",
    "niche": "domain-native-industry-solutions",
    "kicker": "Healthcare · Patient Platform",
    "title": "Clinic Management & AI Health Tools in One Platform",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Healthcare",
      "Platform",
      "AI Tools"
    ],
    "overview": {
      "head": "Book. Diagnose. Prescribe. Track. All in one system.",
      "paras": [
        "We built an integrated healthcare platform for clinics, hospitals and patients — combining online appointment booking, multi-role clinic management, hospital department operations, AI symptom analysis and digital prescriptions into a single system.",
        "Clinics of all sizes — from single-doctor practices to multi-department hospitals — run on the same platform with the same data."
      ]
    },
    "challenge": {
      "head": "Healthcare providers ran on disconnected tools. Patients had no single place to find and book verified doctors.",
      "paras": [
        "Clinics managed appointments in one system, patient records in another, prescriptions in a third — and patients had no reliable way to find verified doctors, check availability or book online. Every workflow required manual handoffs between systems that didn't share data.",
        "AI health tools existed as standalone consumer apps, completely disconnected from the clinical systems that could make them useful. The gap between what patients needed and what clinics could offer was a workflow problem, not a knowledge problem."
      ]
    },
    "built": {
      "head": "Appointment booking. Clinic dashboards. AI symptom checker. Digital prescriptions.",
      "features": [
        {
          "t": "Online Doctor Appointment System",
          "d": "Patients find and book verified doctors instantly — searchable by specialty, location and availability, with real-time slot management."
        },
        {
          "t": "Multi-Role Clinic Management Dashboard",
          "d": "Separate dashboard views for doctors, physician assistants and administrators — each seeing the data and actions relevant to their role, from a single shared system."
        },
        {
          "t": "Hospital Multi-Department Support",
          "d": "Multi-doctor, multi-department hospital operations managed from one platform — patient flows, department scheduling and records unified across the organization."
        },
        {
          "t": "AI Symptom Checker & Diet Planner",
          "d": "An AI-powered symptom analysis tool and personalized diet planner available to patients — integrated with clinic records so AI outputs are clinically contextualised, not generic."
        },
        {
          "t": "Digital Prescriptions & Patient Reviews",
          "d": "Digital prescription issuance built into the clinical workflow, with a patient review and rating system that gives future patients verified information about doctor quality."
        }
      ]
    },
    "impact": {
      "head": "One platform. Clinic to patient. Appointment to prescription.",
      "cards": [
        {
          "stat": "1 Platform",
          "label": "Clinic to Patient",
          "desc": "Every interaction — booking, consultation, prescription, follow-up — managed from a single system shared by clinic and patient."
        },
        {
          "stat": "Multi-Role",
          "label": "Doctor · PA · Admin",
          "desc": "Role-specific dashboard views from one shared data layer — no duplicate entry, no system switching."
        },
        {
          "stat": "AI-Powered",
          "label": "Symptom & Diet Tools",
          "desc": "Patient-facing AI health tools integrated with clinical records — contextualised, not generic."
        }
      ]
    },
    "numbers": [
      {
        "v": "1 Platform",
        "l": "Clinic + Patient"
      },
      {
        "v": "Multi-Role",
        "l": "Dashboards"
      },
      {
        "v": "AI",
        "l": "Symptom + Diet"
      },
      {
        "v": "Digital",
        "l": "Prescriptions"
      }
    ]
  },
  {
    "slug": "preconstruction-in-seconds-clash-free",
    "niche": "domain-native-industry-solutions",
    "kicker": "Construction · AI Document Intelligence",
    "title": "Preconstruction in Seconds — Clash-Free by Default",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Construction",
      "RAG",
      "Computer Vision"
    ],
    "overview": {
      "head": "Thousands of pages per bid. One missed clause erases the margin.",
      "paras": [
        "We built an AI platform for MEP trade contractors that automates the most time-consuming preconstruction tasks — specification analysis, submittal preparation and routing — replacing days of skilled engineering work with outputs delivered in seconds.",
        "Single-line MEP diagrams are converted to clash-free double-line routing automatically, matching each firm's own standards, with zero changes to their existing tooling."
      ]
    },
    "challenge": {
      "head": "Trade contractors lost their margins in preconstruction. One missed clause could cost the job.",
      "paras": [
        "Estimation, spec analysis and submittal preparation required reading thousands of pages of drawings, specifications, contracts, schedules and addendums for every bid — a process that took skilled engineers days and left significant room for error. One missed clause in a spec could erase an entire job's margin.",
        "Routing was the other time sink: converting single-line MEP diagrams to double-line, clash-free routing that met each firm's drafting standards took skilled engineers days per drawing — work that happened before a single dollar was billed."
      ]
    },
    "built": {
      "head": "RAG over five document classes. Single-line to clash-free, instantly.",
      "features": [
        {
          "t": "RAG Retrieval over Five Document Classes",
          "d": "Retrieval-augmented generation across drawings, specifications, contracts, schedules and addendums simultaneously — so every query draws from the complete bid package, not a single document at a time."
        },
        {
          "t": "Computer Vision for Floor Plans",
          "d": "Computer vision reads floor plan drawings — interpreting spatial relationships, dimensions and existing infrastructure — feeding this context into the generation pipeline."
        },
        {
          "t": "Single-Line to Double-Line Routing",
          "d": "Generative AI with path-planning converts single-line MEP diagrams into clash-free double-line routing automatically — matching each firm's own drafting standards."
        },
        {
          "t": "Firm-Standard Compliance",
          "d": "Routing outputs conform to each contractor's individual drafting standards — not a generic style — without requiring any changes to existing tooling or workflows."
        }
      ]
    },
    "impact": {
      "head": "Days of engineering work. Delivered in seconds.",
      "cards": [
        {
          "stat": "Seconds",
          "label": "vs Days of Engineering Work",
          "desc": "Single-line to clash-free double-line routing — a task that took skilled engineers days per drawing — completed in seconds."
        },
        {
          "stat": "5 Classes",
          "label": "Documents Read Simultaneously",
          "desc": "Drawings, specs, contracts, schedules and addendums — all queried together, so nothing is missed in a bid package."
        },
        {
          "stat": "0 Changes",
          "label": "to Existing Tooling",
          "desc": "The platform integrates into existing contractor workflows — no new software to learn, no process changes required."
        }
      ]
    },
    "numbers": [
      {
        "v": "5 Doc Classes",
        "l": "RAG Retrieval"
      },
      {
        "v": "Seconds",
        "l": "vs Days of Work"
      },
      {
        "v": "Clash-Free",
        "l": "Auto-Routing"
      },
      {
        "v": "0 Tooling",
        "l": "Changes Required"
      }
    ]
  },
  {
    "slug": "ai-hairline-analysis-no-clinic-required",
    "niche": "domain-native-industry-solutions",
    "kicker": "AI · Consumer Health",
    "title": "AI Hairline Analysis — Clinical Accuracy, No Clinic Required",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "AI Diagnostics",
      "Computer Vision",
      "Health Tech",
      "Multimodal LLM",
      "Face Mesh"
    ],
    "overview": {
      "head": "Three photos. A private AI analysis. Your numbers before the sales pitch.",
      "paras": [
        "We built an AI hair loss analysis platform that gives users a clinical-grade assessment of their hair loss — Norwood stage, graft estimate and regional cost breakdown — from three photos, privately, before they ever sit across from a clinic's sales consultant.",
        "A free scan powered by 468 facial landmarks and clinical vision AI. An optional deep-analysis report with after-photo simulation. A completely independent clinic directory with no paid placement."
      ]
    },
    "challenge": {
      "head": "Clinics charged $100–$250 for consultations that mostly served the clinic's sales agenda.",
      "paras": [
        "Anyone considering a hair transplant faced a system designed against them: the only way to get a meaningful assessment was to sit through a clinic consultation that was primarily a sales process. The numbers provided — graft estimates, cost ranges — were given in the context of a transaction, not an independent analysis.",
        "No tool existed that could give a patient the same information independently, accurately, and privately — before they ever entered a sales environment."
      ]
    },
    "built": {
      "head": "468 facial landmarks. Clinical vision AI. After-photo simulation. Independent directory.",
      "features": [
        {
          "t": "468-Landmark Facial Mapping",
          "d": "Facial landmark mapping tracks 468 reference points across three photos — measuring hairline recession against established Norwood criteria with clinical repeatability."
        },
        {
          "t": "Norwood Stage + Graft Estimate",
          "d": "AI analysis produces a Norwood stage classification, a graft range estimate and regional cost breakdowns — the same outputs a clinic consultation provides, available independently and privately."
        },
        {
          "t": "After-Photo Simulation",
          "d": "The paid Full Analysis Report includes an after-photo simulation built from the user's own photos — showing a realistic projection of post-restoration appearance before any financial commitment."
        },
        {
          "t": "Trichoscopy-Style Density Analysis",
          "d": "Detailed scalp density analysis modeled on trichoscopy methodology — giving users a clinical-grade understanding of their donor area and loss pattern."
        },
        {
          "t": "Independent Clinic Directory",
          "d": "A clinic directory covering thousands of providers by country, with local pricing context and no paid placement — so the information serves the user, not the clinic."
        }
      ]
    },
    "impact": {
      "head": "Clinical-grade assessment. Free. Independent. Private. No sales pressure.",
      "cards": [
        {
          "stat": "468",
          "label": "Facial Landmarks Mapped",
          "desc": "Per scan — measuring recession against clinical Norwood criteria with machine repeatability, not visual estimation."
        },
        {
          "stat": "Free",
          "label": "Norwood Stage + Cost Estimate",
          "desc": "The core clinical outputs — stage, graft range, cost — available at no cost, before any clinic engagement."
        },
        {
          "stat": "Independent",
          "label": "Clinic Directory",
          "desc": "No clinic pays for placement. Directory information serves the user's decision, not the clinic's sales pipeline."
        }
      ]
    },
    "numbers": [
      {
        "v": "468",
        "l": "Landmarks per Scan"
      },
      {
        "v": "Free Scan",
        "l": "Stage + Graft + Cost"
      },
      {
        "v": "After-Photo",
        "l": "Simulation"
      },
      {
        "v": "0 Paid",
        "l": "Clinic Placement"
      }
    ]
  },
  {
    "slug": "predictive-site-logistics",
    "niche": "domain-native-industry-solutions",
    "kicker": "Construction · Site Logistics",
    "title": "Predictive Site Logistics — Every Delivery Booked and Reconciled",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Construction",
      "IoT",
      "LLM Reconciliation"
    ],
    "overview": {
      "head": "Paper notes eliminated. Invoices matched automatically.",
      "paras": [
        "We built a site-logistics platform for major construction contractors that digitizes material flow from supplier to subcontractor — replacing paper delivery notes with predictive slot scheduling, IoT monitoring, LLM-powered invoice reconciliation and built-in environmental reporting.",
        "Thousands of delivery data points tracked daily across multiple major contractors, in four languages."
      ]
    },
    "challenge": {
      "head": "Complex sites lost materials and hours to chaotic deliveries nobody could reconcile.",
      "paras": [
        "Large construction sites were operating with paper delivery notes, unbooked vehicles arriving at random, blocked bays and no systematic way to match what arrived against what was invoiced. Disputes happened at reconciliation — weeks after the delivery, when evidence was gone.",
        "Environmental reporting — CO2 tracking, waste segregation — was either not happening or assembled manually from delivery records at the end of a project. Neither approach satisfied the requirements of contractors with sustainability reporting obligations."
      ]
    },
    "built": {
      "head": "Predictive slot scheduling. IoT monitoring. LLM reconciliation. CO2 reporting. Four languages.",
      "features": [
        {
          "t": "Predictive Slot Scheduling",
          "d": "Deliveries booked into pre-assigned time slots and bays before vehicles arrive on site — eliminating random arrivals, blocked bays and the queuing that consumes site time."
        },
        {
          "t": "IoT Container & Equipment Monitoring",
          "d": "Real-time IoT tracking of containers and equipment across the site — with location, status and movement data feeding the logistics dashboard continuously."
        },
        {
          "t": "LLM Delivery-to-Invoice Reconciliation",
          "d": "An LLM reads delivery records and invoices simultaneously, flagging discrepancies before they become disputes — at the point of delivery, not weeks later at month end."
        },
        {
          "t": "CO2 & Waste-Segregation Reporting",
          "d": "Environmental reporting built into the delivery workflow — CO2 per delivery and waste classification captured automatically, producing audit-ready sustainability reports."
        },
        {
          "t": "Four-Language Support",
          "d": "The platform operates in English, Polish, German and Japanese — supporting international contractor workforces and supplier networks without translation overhead."
        }
      ]
    },
    "impact": {
      "head": "Thousands of deliveries. Every one reconciled. Environmental reporting built in.",
      "cards": [
        {
          "stat": "1,000s",
          "label": "Delivery Data Points Daily",
          "desc": "Every delivery — slot, bay, arrival time, contents, driver — tracked and reconciled automatically across multiple major contractors."
        },
        {
          "stat": "0",
          "label": "Manual Delivery Notes",
          "desc": "Paper notes replaced by digital records generated at the point of delivery — no manual input, no lost paperwork."
        },
        {
          "stat": "Built-In",
          "label": "CO2 & Waste Reporting",
          "desc": "Environmental data captured as a byproduct of normal delivery operations — audit-ready sustainability reports with no additional effort."
        }
      ]
    },
    "numbers": [
      {
        "v": "1,000s",
        "l": "Deliveries Daily"
      },
      {
        "v": "0",
        "l": "Paper Notes"
      },
      {
        "v": "LLM",
        "l": "Invoice Reconciliation"
      },
      {
        "v": "4 Languages",
        "l": "EN · PL · DE · JP"
      }
    ]
  },
  {
    "slug": "course-creation-in-minutes-900-languages",
    "niche": "adaptive-learning-consumer-platforms",
    "kicker": "EdTech · AI Course Generation",
    "title": "Course Creation in Minutes — 900+ Languages",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "EdTech",
      "LMS",
      "Multimodal AI"
    ],
    "overview": {
      "head": "Raw material in. Complete course out. In any language.",
      "paras": [
        "We built an AI-powered learning management system that transforms raw source material — PDFs, videos, slides, URLs — into complete, structured courses with lessons, quizzes, grading and an AI video avatar tutor, in any of 900+ languages.",
        "A per-course RAG tutor answers student questions cited directly from the course material — not from hallucination. Everything exports via SCORM/LTI and deploys white-label for enterprise."
      ]
    },
    "challenge": {
      "head": "Turning source material into courses took weeks. Every language multiplied the cost.",
      "paras": [
        "Institutions and training teams needed to convert raw source material into structured e-learning courses — a process that required instructional designers, weeks of production time, and a separate translation effort for every language their workforce spoke.",
        "The bottleneck wasn't content — organizations had plenty of it. The bottleneck was production. And for global workforces, the cost of multilingual course creation meant most employees went undertrained in their own language."
      ]
    },
    "built": {
      "head": "Multimodal LLM pipelines. RAG tutor per course. Source-cited. SCORM/LTI. White-label.",
      "features": [
        {
          "t": "Multimodal Ingestion Pipeline",
          "d": "Accepts PDFs, videos, slide decks and URLs as raw input — processing all formats through a unified multimodal LLM pipeline that extracts structure, concepts and assessable content."
        },
        {
          "t": "Automated Lesson & Quiz Generation",
          "d": "Generates complete course structure — lessons, learning objectives, quizzes and grading rubrics — from source material, with source citations so every output is verifiable."
        },
        {
          "t": "Per-Course RAG Tutor",
          "d": "Every course includes a dedicated RAG tutor that answers student questions using retrieval from the course material itself — not from general model knowledge, and always cited."
        },
        {
          "t": "AI Video Avatars",
          "d": "AI-generated video presenters deliver course content in the learner's language — providing a human-facing presentation layer without video production costs."
        },
        {
          "t": "900+ Languages + SCORM/LTI + White-Label",
          "d": "Course output available in 900+ languages; exports via SCORM and LTI for integration into any existing LMS; deployable white-label for enterprise training programs."
        }
      ]
    },
    "impact": {
      "head": "Weeks → minutes. 900+ languages. RAG tutor included with every course.",
      "cards": [
        {
          "stat": "Weeks → Min",
          "label": "Per Course Created",
          "desc": "Complete structured courses — lessons, quizzes, grading, tutor — generated in minutes from raw source material."
        },
        {
          "stat": "900+",
          "label": "Languages Generated",
          "desc": "Any course producible in any of 900+ languages — at no additional production cost per language."
        },
        {
          "stat": "RAG Tutor",
          "label": "Included per Course",
          "desc": "A source-cited AI tutor bundled with every course — answering student questions from course content, never hallucinating."
        }
      ]
    },
    "numbers": [
      {
        "v": "Weeks → Min",
        "l": "Per Course"
      },
      {
        "v": "900+",
        "l": "Languages"
      },
      {
        "v": "RAG Tutor",
        "l": "per Course"
      },
      {
        "v": "SCORM/LTI",
        "l": "Standard Export"
      }
    ]
  },
  {
    "slug": "professional-learning-by-educators-for-educators",
    "niche": "adaptive-learning-consumer-platforms",
    "kicker": "EdTech · Professional Learning",
    "title": "Professional Learning Built by Educators, for Educators",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "EdTech",
      "K-12",
      "Professional Development"
    ],
    "overview": {
      "head": "High-impact courses. Real classroom transfer.",
      "paras": [
        "We built a professional learning platform designed exclusively for educators — combining expert-led courses, evidence-based portfolios, personal learning goals and school-wide progress analytics into a single platform that school leaders can administer and teachers actually use.",
        "The platform has been recognized with a leading regional EdTech award for K-12 deployment excellence."
      ]
    },
    "challenge": {
      "head": "Generic LMS tools weren't built for teachers. Professional development didn't transfer to the classroom.",
      "paras": [
        "Educators needed professional development that was practical, evidence-based and led by practitioners who understood classrooms — not generic e-learning courses repurposed for the education sector. Existing LMS platforms served the administrator's tracking needs, not the teacher's learning needs.",
        "Schools also struggled to release staff for multi-day training programs. The format mattered: development needed to happen in short, focused bursts that fit around teaching schedules — and the learning needed to visibly transfer to classroom practice."
      ]
    },
    "built": {
      "head": "Expert practitioners. Evidence portfolios. Built for how teachers actually learn.",
      "features": [
        {
          "t": "Expert Practitioner-Led Courses",
          "d": "Courses designed and delivered by recognized leaders in education — instructional coaches, curriculum specialists and academic researchers with proven classroom track records."
        },
        {
          "t": "Evidence-Based Learning Portfolios",
          "d": "Educators document and share their professional growth with verifiable evidence — building a portfolio that demonstrates development to school leaders and future employers."
        },
        {
          "t": "Personal Learning Goals & Monthly Challenges",
          "d": "Learners set individual goals and track progress through monthly challenges — giving structure to ongoing development without requiring scheduled release time."
        },
        {
          "t": "School-Wide Analytics Dashboard",
          "d": "Administrators see time spent, courses completed and achievement rankings across their entire staff — tracking professional learning impact at the school level."
        },
        {
          "t": "Three Pricing Tiers",
          "d": "Free courses for entry-level access; a subscription tier for premium content; pay-per-course for specialized training — making the platform accessible across school budget sizes."
        }
      ]
    },
    "impact": {
      "head": "Award-recognized. Trusted globally. Learning that transfers to the classroom.",
      "cards": [
        {
          "stat": "Award",
          "label": "Regional EdTech Recognition (K-12)",
          "desc": "Recognised at a leading EdTech industry event for deployment excellence in K-12 professional learning."
        },
        {
          "stat": "3 Tiers",
          "label": "Free · Subscription · Per-Course",
          "desc": "Accessible across school budget sizes — from free introductory courses to specialized per-course training for advanced development."
        },
        {
          "stat": "School-Wide",
          "label": "Analytics & Portfolio Tracking",
          "desc": "Administrators track professional learning progress across all staff from a single dashboard — with verifiable evidence portfolios per educator."
        }
      ]
    },
    "numbers": [
      {
        "v": "Award",
        "l": "K-12 EdTech Recognition"
      },
      {
        "v": "3 Tiers",
        "l": "Flexible Pricing"
      },
      {
        "v": "Evidence",
        "l": "Portfolios"
      },
      {
        "v": "School-Wide",
        "l": "Analytics"
      }
    ]
  },
  {
    "slug": "screen-time-earned-through-chores",
    "niche": "adaptive-learning-consumer-platforms",
    "kicker": "Consumer · Parental Controls",
    "title": "Screen Time Earned Through Chores — Enforced at OS Level",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Consumer",
      "iOS",
      "Parental Controls"
    ],
    "overview": {
      "head": "No VPN tricks. No workarounds. OS-enforced.",
      "paras": [
        "We built a parental-control iOS app that ties device access directly to verified chore completion — enforced natively at the iOS operating system level using Screen Time and Family Sharing APIs, with no VPN profiles or network tricks that children can bypass.",
        "Photo verification, three-tier parental trust and OS-level enforcement make this a parental control mechanism that works because of how the OS works, not in spite of it."
      ]
    },
    "challenge": {
      "head": "Parental control apps relied on VPN tricks. Kids bypassed them within days.",
      "paras": [
        "Third-party parental control apps used VPN profiles or network-level filtering to enforce their restrictions — mechanisms that technically-curious children found ways around within days of setup. The tools parents trusted were being defeated by the children they were designed to protect.",
        "The deeper problem was conceptual: existing apps just blocked or allowed. None of them connected screen time to responsibility — creating a system where children had no agency, and parents had no mechanism to reward it."
      ]
    },
    "built": {
      "head": "Native iOS APIs. Photo-verified chores. Three-tier parental trust. OS-level enforcement.",
      "features": [
        {
          "t": "Native iOS Screen Time APIs",
          "d": "Built entirely on the OS's own Screen Time and Family Sharing frameworks in Swift — so the restrictions are enforced by the operating system itself, with no separate app or VPN profile that can be removed."
        },
        {
          "t": "Photo-Verified Chore Completion",
          "d": "Children submit photo proof of completed chores for parental review — providing a concrete, verifiable record rather than a self-report."
        },
        {
          "t": "Three-Tier Parental Trust System",
          "d": "Parents configure trust levels for each child — controlling which apps unlock for which chore completions, with graduated independence as children demonstrate responsibility."
        },
        {
          "t": "App Blocking & Web Protection",
          "d": "Full app-level blocking and web content protection managed through the OS — with no separate filter to install, no profile to delete and no VPN to bypass."
        }
      ]
    },
    "impact": {
      "head": "OS-enforced. Zero workarounds. Screen time becomes earned, not given.",
      "cards": [
        {
          "stat": "0 VPN",
          "label": "Profiles or Network Tricks",
          "desc": "Enforcement is native to the operating system — there is no separate mechanism for children to find and remove."
        },
        {
          "stat": "Photo",
          "label": "Verification on Every Chore",
          "desc": "Visual proof of completion required before any screen time unlocks — parent-reviewed, not self-reported."
        },
        {
          "stat": "OS-Level",
          "label": "Enforcement",
          "desc": "Restrictions enforced by the OS's own Screen Time APIs — the same mechanism the platform uses for its own family controls."
        }
      ]
    },
    "numbers": [
      {
        "v": "0 VPN",
        "l": "Profiles"
      },
      {
        "v": "Photo",
        "l": "Verified Chores"
      },
      {
        "v": "OS-Level",
        "l": "Enforcement"
      },
      {
        "v": "3-Tier",
        "l": "Parental Trust"
      }
    ]
  },
  {
    "slug": "dinner-parties-with-friends-of-friends",
    "niche": "adaptive-learning-consumer-platforms",
    "kicker": "Consumer · Social Dining",
    "title": "Dinner Parties With Friends of Friends",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Role-Based Access",
      "Payments",
      "Apple Pay",
      "SMS Notifications",
      "Product Analytics"
    ],
    "overview": {
      "head": "Trusted tables. Curated hosts. Invitation only.",
      "paras": [
        "We built an invitation-only social dining platform that connects hosts and guests for intimate dinner parties through a friends-of-friends trust network — making it easy for new people to meet in the best possible setting: around a dinner table.",
        "The platform is built to inspire hosting as a social act, not just dining as consumption."
      ]
    },
    "challenge": {
      "head": "Social apps optimized for scale. Nobody built for the quality of the table.",
      "paras": [
        "Existing social platforms were designed for reach — maximizing connections, followers and engagement. None of them were built for the opposite: a small, trusted gathering of interesting people who happen to have a friend in common.",
        "The dinner party as a format for meaningful social connection had no digital infrastructure. Hosts had no way to reach beyond their immediate circle. Guests had no way to find curated experiences. And trust — the essential ingredient — had no mechanism."
      ]
    },
    "built": {
      "head": "Invitation-only access. Friends-of-friends graph. Host tools. Member login.",
      "features": [
        {
          "t": "Invitation-Only Access Model",
          "d": "New members join by requesting an invitation — creating a trust filter at entry that maintains the quality of the network as it grows."
        },
        {
          "t": "Friends-of-Friends Social Graph",
          "d": "Dinner party discovery is powered by social proximity — guests find events hosted by people one degree from their existing network, preserving the trust dynamic of a real introduction."
        },
        {
          "t": "Host Tools & Listing Flow",
          "d": "Hosts list dinner parties with date, size, style and any relevant context — with tools designed to make hosting feel approachable for people who want to try it for the first time."
        },
        {
          "t": "Member Login & Request Flow",
          "d": "Members log in to browse upcoming dinners and request a spot — with hosts controlling the guest list and maintaining the intimacy of each event."
        }
      ]
    },
    "impact": {
      "head": "Trusted connections. Around the best kind of table.",
      "cards": [
        {
          "stat": "Invite-Only",
          "label": "Access Model",
          "desc": "Trust maintained at the entry point — every member arrives through the network, not a signup form."
        },
        {
          "stat": "Friends of",
          "label": "Friends Discovery",
          "desc": "Social proximity powers event discovery — guests find dinners hosted by people one degree from their existing connections."
        },
        {
          "stat": "Host-First",
          "label": "Platform Design",
          "desc": "Built to inspire hosting as a social act — tools and flows designed for people who want to host but need a reason and a mechanism."
        }
      ]
    },
    "numbers": [
      {
        "v": "Invite-Only",
        "l": "Trust at Entry"
      },
      {
        "v": "Trusted",
        "l": "Friends-of-Friends Graph"
      },
      {
        "v": "Host-First",
        "l": "Design"
      },
      {
        "v": "Intimate",
        "l": "Dining Format"
      }
    ]
  },
  {
    "slug": "structured-competition-amateur-esports",
    "niche": "adaptive-learning-consumer-platforms",
    "kicker": "Consumer · Esports Platform",
    "title": "Structured Competition for Amateur and Semi-Pro Gamers",
    "client": {
      "type": "confidential"
    },
    "tags": [
      "Consumer",
      "Esports",
      "Gaming"
    ],
    "overview": {
      "head": "Real-time stats. Zero manual scoring. A competitive CV that follows you.",
      "paras": [
        "We built a gamified esports tournament hub for amateur and semi-pro gamers — with real-time stat integration that eliminates manual score submission, automated bracket management and a persistent gamer profile that acts as a competitive CV across multiple titles.",
        "Structured, credible competition — accessible from first-time competitor to semi-professional level."
      ]
    },
    "challenge": {
      "head": "Amateur players had no accessible platform. Manual scoring and disputes made existing options unworkable.",
      "paras": [
        "Amateur and semi-pro gamers who wanted organized competition faced poor options: expensive leagues with high entry bars, informal brackets where score disputes were endemic, or fragmented community events with no persistent record of performance.",
        "The credibility problem was structural — without objective, automated score reporting, every result was contestable. Without a persistent profile, every tournament was a fresh start. The format rewarded the loudest dispute, not the best player."
      ]
    },
    "built": {
      "head": "Real-time game integration. Automated brackets. Gamer profile as competitive CV.",
      "features": [
        {
          "t": "Real-Time In-Game Stat Integration",
          "d": "Game stats pulled directly from the game client via a real-time overlay integration — score submission is automated, objective and tamper-proof. No manual entry, no disputes."
        },
        {
          "t": "Tournaments, Arenas & Proving Grounds",
          "d": "Multiple competition formats — from open tournaments to structured arenas and skill-proving brackets — covering different levels of competitive intensity."
        },
        {
          "t": "Persistent Gamer Profile",
          "d": "A competitive profile that accumulates results, stats and achievements across titles — acting as a verifiable competitive CV that follows the player regardless of which game or event they enter."
        },
        {
          "t": "Automated Moderation, Scoring & Brackets",
          "d": "Tournament administration — bracket generation, match progression, score recording and moderation — fully automated, removing the operational burden from organizers and eliminating human error."
        }
      ]
    },
    "impact": {
      "head": "Zero score disputes. A real competitive record. For everyone.",
      "cards": [
        {
          "stat": "0",
          "label": "Manual Score Submissions",
          "desc": "Every result pulled directly from the game via real-time integration — objective, automated and dispute-proof."
        },
        {
          "stat": "Persistent",
          "label": "Competitive CV",
          "desc": "A gamer profile that accumulates results across titles and events — a verifiable record of competitive history."
        },
        {
          "stat": "Automated",
          "label": "Moderation & Brackets",
          "desc": "Full tournament administration automated — from bracket generation to final result recording — with no manual intervention."
        }
      ]
    },
    "numbers": [
      {
        "v": "0",
        "l": "Manual Score Entry"
      },
      {
        "v": "Real-Time",
        "l": "In-Game Stats"
      },
      {
        "v": "Persistent",
        "l": "Competitive CV"
      },
      {
        "v": "Auto",
        "l": "Brackets & Moderation"
      }
    ]
  },
  {
    "slug": "property-marketplace-for-homefind",
    "niche": "real-estate-proptech-marketplaces",
    "kicker": "Real Estate · AI Marketplace",
    "title": "Property Marketplace for HomeFind",
    "client": {
      "type": "named",
      "name": "HomeFind"
    },
    "tags": [
      "Web Development",
      "Data & AI",
      "Marketing"
    ],
    "overview": {
      "head": "A modern marketplace. AI-powered recommendations. +180% engagement.",
      "paras": [
        "We created a modern property marketplace for HomeFind with AI-powered recommendations that increased user engagement by 180%."
      ]
    },
    "built": {
      "head": "What the platform delivers.",
      "features": [
        {
          "t": "AI-Powered Recommendations",
          "d": "Property suggestions matched to each user — the engine behind the platform's engagement growth."
        },
        {
          "t": "Modern Marketplace Experience",
          "d": "A ground-up modern web build for browsing, searching and discovering property listings."
        },
        {
          "t": "Data & AI Foundation",
          "d": "A data-driven core powering the recommendation engine and platform insights."
        },
        {
          "t": "Growth & Marketing Integration",
          "d": "Built with growth in mind — marketing and engagement tooling integrated into the platform."
        }
      ]
    },
    "impact": {
      "head": "Engagement up 180%.",
      "cards": [
        {
          "stat": "+180%",
          "label": "User Engagement",
          "desc": "AI-powered recommendations drove a 180% increase in user engagement on the platform."
        }
      ]
    },
    "numbers": [
      {
        "v": "+180%",
        "l": "User Engagement"
      },
      {
        "v": "AI",
        "l": "Recommendations"
      },
      {
        "v": "Web",
        "l": "Platform"
      },
      {
        "v": "Data & AI",
        "l": "Foundation"
      }
    ]
  },
  {
    "slug": "learning-platform-for-eduspark",
    "niche": "adaptive-learning-consumer-platforms",
    "kicker": "EdTech · Learning Platform",
    "title": "Learning Platform for EduSpark",
    "client": {
      "type": "named",
      "name": "EduSpark"
    },
    "tags": [
      "Web Development",
      "Mobile Development",
      "Cloud"
    ],
    "overview": {
      "head": "A comprehensive LMS. 100K+ students.",
      "paras": [
        "We developed a comprehensive LMS platform for EduSpark serving 100K+ students with interactive courses, live sessions, and AI-powered assessments."
      ]
    },
    "built": {
      "head": "What the platform delivers.",
      "features": [
        {
          "t": "Interactive Courses",
          "d": "Structured, interactive course content students work through at their own pace."
        },
        {
          "t": "Live Sessions",
          "d": "Real-time live teaching sessions built into the platform alongside self-paced material."
        },
        {
          "t": "AI-Powered Assessments",
          "d": "Assessments powered by AI — supporting evaluation at the scale of 100K+ students."
        },
        {
          "t": "Web + Mobile on Cloud Infrastructure",
          "d": "Delivered across web and mobile, running on cloud infrastructure built for scale."
        }
      ]
    },
    "impact": {
      "head": "Serving 100K+ students.",
      "cards": [
        {
          "stat": "100K+",
          "label": "Students Served",
          "desc": "A comprehensive learning platform operating at six-figure student scale."
        }
      ]
    },
    "numbers": [
      {
        "v": "100K+",
        "l": "Students Served"
      },
      {
        "v": "Web + Mobile",
        "l": "Delivery"
      },
      {
        "v": "AI",
        "l": "Assessments"
      },
      {
        "v": "Cloud",
        "l": "Infrastructure"
      }
    ]
  }
];

export const nicheBySlug = (slug) => NICHES.find((n) => n.slug === slug) || null;
export const storiesByNiche = (slug) => STORIES.filter((s) => s.niche === slug);
export const findStory = (nicheSlug, storySlug) =>
  STORIES.find((s) => s.niche === nicheSlug && s.slug === storySlug) || null;

export function clientLabel(c = {}) {
  if (c.type === "product") return `${c.name} — a TAGS product`;
  if (c.type === "named") return c.name;
  return "Confidential Client";
}

export const nicheStats = {
  stories: STORIES.length,
  niches: NICHES.length,
  products: STORIES.filter((s) => (s.client || {}).type === "product").length,
};
