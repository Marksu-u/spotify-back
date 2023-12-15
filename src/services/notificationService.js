import { toast } from 'react-toastify';

export const notificationService = {
  notify: (message, type = 'info', options = {}) => {
    // Définir les options de la notification
    const defaultOptions = {
      position: 'top-right',
      autoClose: 3000,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    switch (type) {
      case 'success':
        toast.success(message, mergedOptions);
        break;
      case 'error':
        toast.error(message, mergedOptions);
        break;
      case 'warning':
        toast.warning(message, mergedOptions);
        break;
      default:
        toast.info(message, mergedOptions);
        break;
    }
  },
};
