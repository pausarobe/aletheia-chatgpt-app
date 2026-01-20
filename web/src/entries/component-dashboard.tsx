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
      <div>Color</div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <ath-button>Primary</ath-button>
        <ath-button color="secondary">Secondary</ath-button>
      </div>
      <br />
      <br />
      <div>Estado</div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <ath-button disabled>Disabled</ath-button>
      </div>
      <br />
      <br />
      <div>Size</div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <ath-button size="xs">Extra small</ath-button>
        <ath-button size="sm">Small</ath-button>
        <ath-button size="md">Medium</ath-button>
        <ath-button size="lg">Large</ath-button>
      </div>
    </div>
  );
}

if (typeof window !== 'undefined' && document.getElementById('root')) {
  const root = createRoot(document.getElementById('root')!);
  root.render(<ComponentDashboard />);
}
