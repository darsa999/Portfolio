import type { IconName } from '../components/icons';

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
  icon: IconName;
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

interface IconCard {
  title: string;
  desc: string;
  icon: IconName;
}

export interface LocaleContent {
  seo: {
    title: string;
    description: string;
  };
  meta: {
    name: string;
    title: string;
    location: string;
    city: string;
    timezone: string;
    status: string;
  };
  common: {
    available: string;
    skipToContent: string;
    githubProfile: string;
    linkedinProfile: string;
    upworkProfile: string;
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
    brandTagline: string;
    mainNavLabel: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  theme: {
    dark: string;
    light: string;
    switchToLight: string;
    switchToDark: string;
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
    trustBadge: string;
    photoAlt: string;
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
    perks: IconCard[];
    ctaButton: string;
    secondaryCta: string;
    guaranteeText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bioParagraphs: string[];
    highlights: string[];
    overviewTitle: string;
    overview: {
      label: string;
      value: string;
      /** renders the value with the green "live" dot */
      live?: boolean;
    }[];
    coreValues: IconCard[];
    hobbiesTitle: string;
    hobbies: IconCard[];
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    coreTag: string;
    categories: SkillCategory[];
    aiCallout: {
      badge: string;
      title: string;
      desc: string;
    };
    velocity: {
      title: string;
      primary: string;
      secondary: string;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    presentTag: string;
    currentTag: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
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
    closeCaseStudy: string;
    items: ProjectCaseStudy[];
  };
  education: {
    eyebrow: string;
    title: string;
    subtitle: string;
    degreesTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    items: EducationItem[];
    languages: LanguageItem[];
    stepVerificationBadge: string;
    stepTitle: string;
    credentialVerified: string;
    verifiedYear: string;
    commsTitle: string;
    commsText: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    availabilityText: string;
    upworkCtaText: string;
    emailMe: string;
    callMe: string;
    copySuccess: string;
    copyFailed: string;
    copyEmail: string;
    directContact: string;
    hireDirectly: string;
    orDirectMessage: string;
    sendBrief: string;
    primaryBadge: string;
    upworkBullets: string[];
    responseTime: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    locationNote: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    topRatedBadge: string;
    backToTop: string;
  };
}
