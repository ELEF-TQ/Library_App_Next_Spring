declare module 'image-compression' {
    function imageCompression(
      file: File | Blob | string,
      options: { maxSizeMB: number; maxWidthOrHeight: number; useWebWorker: boolean }
    ): Promise<File | Blob>;
  
    export = imageCompression;
  }