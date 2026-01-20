import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { makeWidgetHtml } from '../utils/helpers.js';

export function componentDashboardWidgetResource(server: McpServer, js: string, css: string) {
  server.registerResource(
    'component-dashboard-widget',
    'ui://widget/component-dashboard.html',
    {
      title: 'Component Dashboard',
      description: 'Get a documentation for a component.',
    },
    async () => ({
      contents: [
        {
          uri: 'ui://widget/component-dashboard.html',
          mimeType: 'text/html+skybridge',
          text: makeWidgetHtml(js, css),
          _meta: {
            'openai/widgetPrefersBorder': true,
            'openai/widgetDomain': 'https://chatgpt.com',
            'openai/widgetCSP': {
              connect_domains: ['https://chatgpt.com', 'https://fonts.googleapis.com'],
              resource_domains: ['https://*.oaistatic.com'],
            },
          },
        },
      ],
    }),
  );
}
