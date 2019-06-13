import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { RCButton } from '../src/index'
storiesOf('Button', module)
  .add('RCButton', () => <RCButton label="Button" >hello</RCButton>)

