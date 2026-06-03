export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-breaker-keeps-tripping",
    title: "Why Your Breaker Keeps Tripping",
    excerpt: "Common reasons breakers trip, when it is safe to reset them, and when to call an electrician.",
    category: "Electrical Repair",
    readingTime: "4 min read",
    date: "2026-06-01"
  },
  {
    slug: "signs-your-electrical-wiring-needs-replacement",
    title: "Signs Your Electrical Wiring Needs Replacement",
    excerpt: "Warning signs of aging or unsafe wiring in apartments, homes, and commercial spaces.",
    category: "Wiring",
    readingTime: "5 min read",
    date: "2026-06-01"
  },
  {
    slug: "generator-installation-guide",
    title: "Generator Installation Guide",
    excerpt: "What to know before installing a generator, including load planning and safe transfer switching.",
    category: "Generators",
    readingTime: "6 min read",
    date: "2026-06-01"
  },
  {
    slug: "how-to-choose-the-right-electrician",
    title: "How To Choose The Right Electrician",
    excerpt: "How to compare electricians by safety, communication, pricing, and local response time.",
    category: "Hiring Tips",
    readingTime: "4 min read",
    date: "2026-06-01"
  }
];
