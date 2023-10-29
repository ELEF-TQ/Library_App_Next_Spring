import Card from '@/components/Card/Card';
import data from '@/components/Card/data';

interface ImageInfo {
  id: number;
  title: string;
  imageUrl: string;
}

export default function Home() {
  return (
    <div className='flex justify-around align-middle gap-4 p-10'>
      {data.map((item: ImageInfo) => (
        <Card key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}
