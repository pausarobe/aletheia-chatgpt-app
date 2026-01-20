import { createRoot } from 'react-dom/client';
import { useOpenAiGlobal } from '../lib/hooks';
import { defineCustomElements } from '@aletheia2/core/loader';
defineCustomElements();

export default function ComponentDashboard() {
  const toolOutput = useOpenAiGlobal('toolOutput');
  const component = toolOutput?.name || null;
  console.log('ComponentDashboard toolOutput:', component);
  const componentDisplay = component ? `<${component}>` : '-';
  return (
    <div style={{ padding: '20px' }}>
      <p>
        Documentación del componente: <strong>{componentDisplay}</strong>
      </p>
      <ath-button>Click Me</ath-button>
    </div>
  );
}

if (typeof window !== 'undefined' && document.getElementById('root')) {
  const root = createRoot(document.getElementById('root')!);
  root.render(<ComponentDashboard />);
}
