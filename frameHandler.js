async function initFrame() {
  try {
    // Ensure FrameSDK is ready
    await frame.sdk.actions.ready();
    console.log("FrameSDK is ready!", await frame.sdk.context);
    // const user = await frame.Context;

    // // Get user context
    // const frameUser = await frame.sdk.context();

    // console.log("FrameSDK User Context:", frameUser);
  } catch (error) {
    console.error("Error initializing FrameSDK:", error);
  }
}

// Run the function after the script loads
initFrame();
