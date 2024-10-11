module.exports = {
    default: {
      require: ['tests/steps/*.js'], // Path to your step definitions
      format: ['progress'],
      paths: ['tests/features/*.feature'], // Path to your feature files
      parallel: 1, // Number of parallel scenarios to run, set to 1 for simplicity
    }
  };