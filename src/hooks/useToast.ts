import { toast as sonner } from 'sonner';

function useToast() {
  const toast = (
    type: 'success' | 'info' | 'error' | 'warning',
    title: string,
    description?: string,
    action?: { label: string; onClick: () => void },
    duration = 5000
  ) => {
    const toastId = sonner[type](title, {
      description,
      action,
    });
    setTimeout(() => {
      sonner.dismiss(toastId);
    }, duration);
  };

  return { toast };
}

export default useToast;
