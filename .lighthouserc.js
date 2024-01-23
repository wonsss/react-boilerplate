module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      collect: {
        numberOfRuns: 5,
      },
    },
    upload: {
      startServerCommand: 'yarn run start:dev',
      target: 'filesystem',
      outputDir: './lhci_reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
