export const siteConfig = {
  logoName: "TSAI",
  name: "The School Of AI - Chat",
  url: "https://thesatyajit.com",
  ogImage: "https://thesatyajit.com/og.jpg",
  description: "Chat!",
  links: {
    twitter: "https://twitter.com/thesudoer_",
    github: "https://github.com/satyajitghana/next-openai-llama-chat",
  },
  // modelBackend: "https://rnhzc-49-207-249-85.a.free.pinggy.online/v1",
  // modelBackend: "https://api.theschoolof.ai/v1",
  modelBackend: "http://13.200.17.32:8080/v1"
};

export type SiteConfig = typeof siteConfig;
