const { rules } = require('stylelint-config-clean-order');

const [propertiesOrder, options] = rules['order/properties-order'];

const propertiesOrderWithEmptyLineBefore = propertiesOrder.map(
  (properties) => ({
    ...properties,
    emptyLineBefore: 'never',
  }),
);

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  plugins: ['stylelint-no-unsupported-browser-features'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      { ignorePartialSupport: true, severity: 'warning' },
    ],
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'declarations',
      'rules',
      'at-rules',
      'less-mixins',
    ],
    'order/properties-order': [
      propertiesOrderWithEmptyLineBefore,
      {
        ...options,
        severity: 'warning',
      },
    ],
  },
};
