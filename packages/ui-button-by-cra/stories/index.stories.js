import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button as RMWCButton} from '@rmwc/button';
import '@material/button/dist/mdc.button.css';
import { RCButton } from '../src/index'
import { Button } from '@storybook/react/demo';
storiesOf('Button', module)
  .add('Button', () => <Button label="Button" >hello</Button>)
  .add('RMWCButton', () => <RMWCButton label="Button" >hello</RMWCButton>)
  .add('RCButton', () => <RCButton label="Button" >hello</RCButton>)

