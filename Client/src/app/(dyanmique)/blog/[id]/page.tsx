
import images from '@/components/Card/data';
import Card from '@/components/Card/Card';

interface PageProps {
  params: any; 
}

const Page: React.FC<PageProps> = ({ params }) => {
  console.log('params.id:', params.id); 
  console.log('images:', images); 

  const matchingItem = images.find((item) => item.id == params.id);

  console.log('matchingItem:', matchingItem); 

  return (
    <div>
      {matchingItem ? (
        <Card id={matchingItem.id} title={matchingItem.title} imageUrl={matchingItem.imageUrl} />
      ) : (
        <p>No matching item found.</p>
      )}
    </div>
  );
};

export default Page;
