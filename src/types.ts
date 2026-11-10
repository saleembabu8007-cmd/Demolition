export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  details: string;
}

export interface ProcessStep {
  stepNumber: string;
  stageName: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  location: string;
  description: string;
}
