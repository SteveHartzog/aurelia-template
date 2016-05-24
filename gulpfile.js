// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory

// Setup gulp help
require('gulp-help')(require('gulp'));

// Add the TypeScript require hook for TypeScript Support
// require('ts-node').register({});

// Require all tasks
require('require-dir')('build/tasks');