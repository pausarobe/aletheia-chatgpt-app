import type { Story } from '@ladle/react';
import ComponentDashboard from './component-dashboard';
import { useEffect } from 'react';

function MockToolOutput({ name, children }: { name: any; children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openai = {
        toolOutput: { name },
      } as any;

      window.dispatchEvent(new Event('openai:set_globals'));
    }
  }, [name]);

  return <>{children}</>;
}

export const ComponentDashboardStory: Story = () => {
  return (
    <MockToolOutput name="ath-button">
      <ComponentDashboard />
    </MockToolOutput>
  );
};
