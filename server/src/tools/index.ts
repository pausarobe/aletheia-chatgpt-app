import type { RegisterToolFn } from '../utils/types.js';
import { componentDashboardTool } from './component-dashboard.js';

export function registerTools(registerTool: RegisterToolFn) {
  componentDashboardTool(registerTool);
}
