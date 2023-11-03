// blobToBase64.js

const blobToBase64 = (blob: Blob) => {
    if (!blob) return '';
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  
  export default blobToBase64;
  