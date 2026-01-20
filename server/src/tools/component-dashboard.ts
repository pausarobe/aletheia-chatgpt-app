import { z } from 'zod';
import type { RegisterToolFn } from '../utils/types';
import { errorMessage } from '../utils/helpers.js';
import fs from 'fs';
import path from 'path';

export function componentDashboardTool(registerTool: RegisterToolFn) {
  registerTool(
    'component-dashboard',
    {
      title: 'Component Dashboard',
      description: 'Display the documentation for a Aletheia component.',
      _meta: {
        'openai/outputTemplate': 'ui://widget/component-dashboard.html',
        'openai/toolInvocation/invoking': 'Displaying the board',
        'openai/toolInvocation/invoked': 'Displayed the board',
      },
      inputSchema: {
        name: z.coerce.string().describe('The name of the component to document'),
      },
    },
    async ({ name }: { name: string }) => {
      console.error('Component Dashboard tool invoked', name);

      if (!name) {
        return errorMessage('No se proporcionó ningún nombre de componente');
      }

      const normalizedName = name.trim().toLowerCase();
      const docsPath = path.resolve(process.cwd(), 'src/docs', `${normalizedName}.md`);

      if (!fs.existsSync(docsPath)) {
        return errorMessage(`No se encontró documentación para el componente "${name} (${normalizedName})"`);
      }

      const markdown = fs.readFileSync(docsPath, 'utf8');

      return {
        content: [{ type: 'text' as const, text: markdown }],
        structuredContent: { name: normalizedName },
      };
    },
  );
}
