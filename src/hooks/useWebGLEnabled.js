const isWeakDevice = () => {
  const memory = navigator.deviceMemory;
  const cores = navigator.hardwareConcurrency;
  const memoryLow = typeof memory === "number" && memory <= 4;
  const coresLow = typeof cores === "number" && cores <= 2;
  return memoryLow || coresLow;
};

export default function useWebGLEnabled() {
  return typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !isWeakDevice();
}
