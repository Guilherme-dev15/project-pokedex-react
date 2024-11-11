import { useState, useEffect } from 'react';

function useDelayedLoading(delay) {
  const [isDelayedLoading, setIsDelayedLoading] = useState(false);

  const triggerLoading = () => {
    setIsDelayedLoading(true);
    setTimeout(() => setIsDelayedLoading(false), delay);
  };

  return [isDelayedLoading, triggerLoading];
}

export default useDelayedLoading