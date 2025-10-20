
import React from 'react';
import { Subject } from './types';

export const SYLLABUS: Subject[] = [
  {
    id: 'dbms',
    name: 'DBMS',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    topics: [
      { id: 'rdbms-concepts', name: 'RDBMS Concepts' },
      { id: 'normalization', name: 'Normalization' },
      { id: 'sql-queries', name: 'SQL Queries' },
      { id: 'transactions', name: 'Transactions & Concurrency' },
      { id: 'indexing', name: 'Indexing and B-Trees' },
    ],
  },
  {
    id: 'networking',
    name: 'Networking',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>,
    topics: [
      { id: 'osi-model', name: 'OSI Model' },
      { id: 'tcp-ip-suite', name: 'TCP/IP Suite' },
      { id: 'network-topologies', name: 'Network Topologies' },
      { id: 'network-security', name: 'Network Security' },
      { id: 'ip-addressing', name: 'IP Addressing & Subnetting' },
    ],
  },
  {
    id: 'os',
    name: 'Operating System',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    topics: [
      { id: 'process-management', name: 'Process Management' },
      { id: 'memory-management', name: 'Memory Management' },
      { id: 'file-systems', name: 'File Systems' },
      { id: 'cpu-scheduling', name: 'CPU Scheduling' },
      { id: 'deadlocks', name: 'Deadlocks' },
    ],
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    topics: [
      { id: 'arrays-linked-lists', name: 'Arrays & Linked Lists' },
      { id: 'stacks-queues', name: 'Stacks & Queues' },
      { id: 'trees-graphs', name: 'Trees & Graphs' },
      { id: 'searching-sorting', name: 'Searching & Sorting Algorithms' },
      { id: 'hash-tables', name: 'Hash Tables' },
    ],
  },
  {
    id: 'oops',
    name: 'OOPs Concepts',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    topics: [
      { id: 'classes-objects', name: 'Classes & Objects' },
      { id: 'inheritance', name: 'Inheritance' },
      { id: 'polymorphism', name: 'Polymorphism' },
      { id: 'encapsulation-abstraction', name: 'Encapsulation & Abstraction' },
    ],
  },
   {
    id: 'software-engineering',
    name: 'Software Engineering',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m12 0a2 2 0 100-4m0 4a2 2 0 110-4m-6 4a2 2 0 100-4m0 4a2 2 0 110-4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-4-4m0 0l-4 4m4-4v12" /></svg>,
    topics: [
      { id: 'sdlc-models', name: 'SDLC Models' },
      { id: 'agile-methodology', name: 'Agile Methodology' },
      { id: 'software-testing', name: 'Software Testing' },
    ],
  },
  {
    id: 'web-tech',
    name: 'Web Technology',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>,
    topics: [
      { id: 'html-basics', name: 'HTML Basics' },
      { id: 'css-fundamentals', name: 'CSS Fundamentals' },
      { id: 'javascript-core', name: 'JavaScript Core Concepts' },
      { id: 'http-protocol', name: 'HTTP/HTTPS Protocol' },
      { id: 'web-servers', name: 'Web Servers' },
    ],
  },
  {
    id: 'compiler-design',
    name: 'Compiler Design',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    topics: [
      { id: 'phases-of-compiler', name: 'Phases of a Compiler' },
      { id: 'lexical-analysis', name: 'Lexical Analysis' },
      { id: 'parsing-techniques', name: 'Parsing Techniques' },
      { id: 'code-optimization', name: 'Code Optimization' },
    ],
  },
  {
    id: 'digital-logic',
    name: 'Digital Logic',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z" /></svg>,
    topics: [
      { id: 'logic-gates', name: 'Logic Gates' },
      { id: 'boolean-algebra', name: 'Boolean Algebra & K-Maps' },
      { id: 'combinational-circuits', name: 'Combinational Circuits' },
      { id: 'sequential-circuits', name: 'Sequential Circuits' },
      { id: 'number-systems', name: 'Number Systems' },
    ],
  },
  {
    id: 'coa',
    name: 'Computer Org. & Arch.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H4a1 1 0 00-1 1v16a1 1 0 001 1h5m0-18v18m0-18h8a1 1 0 011 1v2a1 1 0 01-1 1h-1m-7 4h8m-8 4h8m-8 4h8" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h5a1 1 0 011 1v16a1 1 0 01-1 1h-5m0-18v18" /></svg>,
    topics: [
      { id: 'memory-hierarchy', name: 'Memory Hierarchy' },
      { id: 'instruction-formats', name: 'Instruction Formats' },
      { id: 'pipelining', name: 'Pipelining & Hazards' },
      { id: 'cache-memory', name: 'Cache Memory' },
      { id: 'i-o-organization', name: 'I/O Organization' },
    ],
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    topics: [
      { id: 'cryptography-basics', name: 'Cryptography Basics' },
      { id: 'network-threats', name: 'Common Network Threats' },
      { id: 'firewalls-ids', name: 'Firewalls & IDS/IPS' },
      { id: 'cyber-laws', name: 'Cyber Laws & IT Act' },
      { id: 'malware', name: 'Types of Malware' },
    ],
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    topics: [
      { id: 'cloud-computing', name: 'Cloud Computing' },
      { id: 'ai-ml-basics', name: 'AI & ML Basics' },
      { id: 'big-data', name: 'Big Data Concepts' },
      { id: 'iot', name: 'Internet of Things (IoT)' },
      { id: 'blockchain', name: 'Blockchain Fundamentals' },
    ],
  },
];
