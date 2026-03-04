
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Criterion {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StakeholderValue {
  title: string;
  description: string;
  role: string;
}
