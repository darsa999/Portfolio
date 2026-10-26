export type Locale = 'ka' | 'en' | 'ru';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  problem: string;
  solution: string;
  myContribution: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  isCurrent?: boolean;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  details: string;
  badge?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  code: string;
}

export interface UpworkValueProp {
  headline: string;
  subheadline: string;
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];
  clientBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface LocaleContent {
  meta: {
    name: string;
    title: string;
    location: string;
    status: string;
    upworkProfileUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    phone: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    hireUpwork: string;
    viewWork: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    roleHeadline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaGithub: string;
    ctaContact: string;
    availableBadge: string;
    quickStats: {
      value: string;
      label: string;
    }[];
  };
  upworkSection: {
    badge: string;
    title: string;
    description: string;
    perksTitle: string;
    perks: {
      title: string;
      desc: string;
      icon: string;
    }[];
    ctaButton: string;
    secondaryCta: string;
    guaranteeText: string;
  };
  about: {
    title: string;
    subtitle: string;
    bioParagraphs: string[];
    coreValues: {
      title: string;
      desc: string;
      icon: string;
    }[];
    hobbiesTitle: string;
    hobbies: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
    aiCallout: {
      badge: string;
      title: string;
      desc: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    presentTag: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    liveDemo: string;
    sourceCode: string;
    keyImpact: string;
    technologiesUsed: string;
    challengeTitle: string;
    solutionTitle: string;
    contributionsTitle: string;
    items: ProjectCaseStudy[];
  };
  education: {
    title: string;
    subtitle: string;
    degreesTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    items: EducationItem[];
    languages: LanguageItem[];
    stepVerificationBadge: string;
  };
  contact: {
    title: string;
    subtitle: string;
    availabilityText: string;
    upworkCtaText: string;
    emailMe: string;
    callMe: string;
    copySuccess: string;
    directContact: string;
    hireDirectly: string;
    orDirectMessage: string;
    sendBrief: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    topRatedBadge: string;
  };
}
