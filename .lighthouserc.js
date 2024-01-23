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
      target: 'temporary-public-storage',
    },
  },
};
