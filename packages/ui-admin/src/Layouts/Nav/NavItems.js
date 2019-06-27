/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Racoon-UI, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export const MainNav = [
  {
    icon: 'pe-7s-rocket',
    label: 'Dashboard Example',
    to: '#/dashboards/basic',
  },
]
export const ComponentsNav = [
  {
    icon: 'pe-7s-diamond',
    label: 'Elements',
    content: [
      {
        label: 'Standard Buttons',
        to: '#/elements/buttons-standard',
      },
      {
        label: 'Dropdowns',
        to: '#/elements/dropdowns',

      },
      {
        label: 'Icons',
        to: '#/elements/icons',
      },
      {
        label: 'Badges',
        to: '#/elements/badges-labels',
      },
      {
        label: 'Cards',
        to: '#/elements/cards',
      },
      {
        label: 'List Groups',
        to: '#/elements/list-group',
      },
      {
        label: 'Navigation Menus',
        to: '#/elements/navigation',
      },
      {
        label: 'Utilities',
        to: '#/elements/utilities',
      },
    ],
  },
  {
    icon: 'pe-7s-car',
    label: 'Components',
    content: [
      {
        label: 'Tabs',
        to: '#/components/tabs',
      },
      {
        label: 'Notifications',
        to: '#/components/notifications',
      },
      {
        label: 'Modals',
        to: '#/components/modals',
      },
      {
        label: 'Progress Bar',
        to: '#/components/progress-bar',
      },
      {
        label: 'Tooltips & Popovers',
        to: '#/components/tooltips-popovers',
      },
      {
        label: 'Carousel',
        to: '#/components/carousel',
      },
      {
        label: 'Maps',
        to: '#/components/maps',
      },
    ],
  },
  {
    icon: 'pe-7s-display2',
    label: 'Regular Tables',
    to: '#/tables/regular-tables',
  },
]
export const FormsNav = [
  {
    icon: 'pe-7s-light',
    label: 'Controls',
    to: '#/forms/controls',
  },
  {
    icon: 'pe-7s-eyedropper',
    label: 'Layouts',
    to: '#/forms/layouts',
  },
  {
    icon: 'pe-7s-pendrive',
    label: 'Validation',
    to: '#/forms/validation',
  },
]
export const WidgetsNav = [
  {
    icon: 'pe-7s-graph2',
    label: 'Dashboard Boxes',
    to: '#/widgets/dashboard-boxes',
  },
]
export const ChartsNav = [
  {
    icon: 'pe-7s-graph2',
    label: 'ChartJS',
    to: '#/charts/chartjs',
  },
]
