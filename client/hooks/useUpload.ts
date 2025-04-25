import { useCallback } from 'react';

export function useUpload() {
  const upload = useCallback(async (file: Blob) => {
    if (!file) {
      throw new Error('Missing file');
    }

    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsDataURL(file);
    });
  }, []);

  return {
    upload,
  };
}