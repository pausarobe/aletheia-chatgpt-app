import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { componentDashboardWidgetResource } from './component-dashboard-widget.js';

export function registerResources(server: McpServer, assets: { CSS: string; JS_COMPONENT_DASHBOARD: string }) {
  componentDashboardWidgetResource(server, assets.JS_COMPONENT_DASHBOARD, assets.CSS);
}
