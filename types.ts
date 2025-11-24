import React from 'react';

export enum AppColors {
  Black = '#000000',
  Anthracite = '#0C0C0D',
  Cyan = '#3CEFFF',
  Lilac = '#A16EFF',
  White = '#FFFFFF'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PlanItem {
  name: string;
  minDuration: string;
  features: string[];
  recommended?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  description: string;
  imageUrl?: string; // Generated URL
  prompt: string; // Prompt to generate
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  imagePrompt: string;
}