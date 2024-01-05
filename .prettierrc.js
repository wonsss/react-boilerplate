module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'auto',
  importOrder: [
    '^(@|hooks)(.*|$)',
    '^(@|pages)(.*|$)',
    '^(@|components/@shared)(.*|$)',
    '^(@|components)(.*|$)',
    '^(@|constants)(.*|$)',
    '^(@|styles)(.*|$)',
  ],
  importOrderSeparation: true,
};
