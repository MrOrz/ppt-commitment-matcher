// Catch all unhandled promise rejections and print error.
// Ref: https://iojs.org/api/process.html#process_event_unhandledrejection
//

process.on('unhandledRejection', function(reason, promise) {
  if (reason.stack) {
    // Error object, has stack info
    console.error(reason.stack);
  } else {
    console.error('Reason:', reason);
  }
  console.error('Promise:', promise);
});
