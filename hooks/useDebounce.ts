const useDebounce = (cb: () => void, delay = 100) => {
  let timer: NodeJS.Timeout | null = null;

  const handleTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(cb, delay);
  };

  return handleTimer;
};

export default useDebounce;
