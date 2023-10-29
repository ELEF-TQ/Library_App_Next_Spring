import image1 from '../../../public/images/1.svg';
import image2 from '../../../public/images/2.svg';
import image3 from '../../../public/images/3.svg';

interface ImageInfo {
    id: number;
    title: string;
    imageUrl: string;
  }
  
  const images: ImageInfo[] = [
    {
      id: 1,
      title: "Image 1",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "Image 2",
      imageUrl: image2,
    },
    {
      id: 3,
      title: "Image 3",
      imageUrl: image3,
    },
  ];
  
  export default images;
  