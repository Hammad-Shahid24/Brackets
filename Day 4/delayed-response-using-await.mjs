async function simulateDelayedResponse() {
  console.log("Starting delay...");

  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay

  console.log("Delay complete!");
}

simulateDelayedResponse();
