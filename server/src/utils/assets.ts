import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export function loadWebAssets(WEB_DIST: string) {
  return {
    CSS: readFileSync(join(WEB_DIST, 'styles.css'), 'utf8'),
    JS_COMPONENT_DASHBOARD: readFileSync(join(WEB_DIST, 'component-dashboard.js'), 'utf8'),
  };
}
