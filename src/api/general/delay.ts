async function delay(timeMs: number) {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
}

export async function delayHelper(startTime: number, timeMs: number) {
  const now = new Date();
  if (timeMs == 0 || +now - startTime >= timeMs) return Promise.resolve();
  else {
    await delay(timeMs - (+now - startTime));
    return Promise.resolve();
  }
}
