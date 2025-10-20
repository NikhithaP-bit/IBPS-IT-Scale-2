// Fix: Import React types and use React.ReactElement to resolve "Cannot find namespace 'JSX'".
import type React from 'react';

export interface Topic {
  id: string;
  name: string;
}

export interface Subject {
  id:string;
  name: string;
  icon: React.ReactElement;
  topics: Topic[];
}