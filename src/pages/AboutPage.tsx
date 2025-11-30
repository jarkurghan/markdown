import React from 'react';
import { useOutletContext } from 'react-router-dom';
import About from '../components/About';

interface LayoutContext {
  isDark: boolean;
}

const AboutPage: React.FC = () => {
  const { isDark } = useOutletContext<LayoutContext>();

  return <About isDark={isDark} isFullscreen={false} />;
};

export default AboutPage;