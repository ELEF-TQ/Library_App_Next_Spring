'use client';
import { useDispatch } from 'react-redux';
import {  useState } from 'react'; 
import { addBook } from '@/context/features/BookSlice';


interface PageProps {
  params: any;
}

const Page: React.FC<PageProps> = () => {
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    id: 0, 
    title: '',
    author: '',
    genre: '',
    price: 0,
    year: '',
    image: '',
  });
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form data:', formData);
    dispatch(addBook(formData) as any);
  };


  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target as HTMLInputElement;
  
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        const target = event.target as FileReader;
        let base64String = target.result as string;
  
        const prefix = "data:image/jpeg;base64,";
        if (base64String.startsWith(prefix)) {
          base64String = base64String.substring(prefix.length);
        }
  
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: base64String, // Set the image in the formData
        }));
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  return (
    <div className="p-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Year of Publication</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image up</label>
          <input
            type="file"
            accept="image/*" 
            id="image"
            name="image"
            onChange={(e) => handleImageChange(e)}
            className="mb-4"
          />
        </div>


        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
};

export default Page;
