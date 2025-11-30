import React from 'react';
import { useOutletContext } from 'react-router-dom';
import WhatIsMarkdown from '../components/WhatIsMarkdown';

interface LayoutContext {
  isDark: boolean;
}

const WhatIsMarkdownPage: React.FC = () => {
  const { isDark } = useOutletContext<LayoutContext>();

  return <WhatIsMarkdown isDark={isDark} isFullscreen={false} />;
};

export default WhatIsMarkdownPage;