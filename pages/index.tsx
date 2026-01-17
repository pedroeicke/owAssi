import React from 'react';
import Home from './Home';

interface PageProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function HomePage({ onNavigate }: PageProps) {
  return <Home onNavigate={onNavigate} />;
}