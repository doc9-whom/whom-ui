import { addons } from 'storybook/internal/manager-api';
import { create } from 'storybook/internal/theming';

import pkg from '../package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `@whomlabs/ui v${pkg.version}`,
  }),
});
