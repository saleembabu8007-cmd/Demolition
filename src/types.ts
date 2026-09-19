export interface ServiceItem {
  id: string;
  titleEn: string;
  titleMl: string;
  shortDesc: string;
  tasks: string[];
  iconName: string;
  badge?: string;
}

export interface MaterialCategory {
  categoryTitleEn: string;
  categoryTitleMl: string;
  items: string[];
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  titleEn: string;
  titleMl: string;
  description: string;
  highlight: string;
}

export interface WorkingStandard {
  id: string;
  titleEn: string;
  titleMl: string;
  description: string;
  detail: string;
}

export interface FaqItem {
  questionEn: string;
  questionMl: string;
  answerEn: string;
  answerMl?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  location: string;
  serviceType: string;
  details: string;
  photos?: string[];
}
