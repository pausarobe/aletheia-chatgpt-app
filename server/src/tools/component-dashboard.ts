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
      description:
        'Display the documentation for a Aletheia component. IMPORTANT: When answering questions about a component, you MUST use ONLY the documentation returned by this tool (structuredContent.markdown). ' +
        'If the answer is not present, reply: "No tengo esa información en la documentación del sistema de diseño." ' +
        'Always call this tool before answering component questions.',
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
      const RULES =
        'REGLAS (obligatorio): Responde SOLO usando structuredContent.markdown. ' +
        'Si no está en la documentación, responde exactamente: "No tengo esa información en la documentación del sistema de diseño."';

      return {
        content: [
          { type: 'text' as const, text: RULES },
          { type: 'text' as const, text: markdown },
        ],
        structuredContent: { name: normalizedName, markdown, rules: RULES },
      };
    },
  );
}
