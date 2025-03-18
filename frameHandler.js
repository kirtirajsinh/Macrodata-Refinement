async function initFrame() {
  try {
    // Ensure FrameSDK is ready
    await frame.sdk.actions.ready();
    const context = await frame.sdk.context;

    // Accessing client.added property
    if (!context.client.added) {
      console.log("Client added:", context.client.added);
      await frame.sdk.actions.addFrame();
    } else {
      console.log("Client is already added");
    }
  } catch (error) {
    console.error("Error initializing FrameSDK:", error);
  }
}

// Run the function after the script loads
initFrame();
