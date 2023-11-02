import { axiosClient } from '@/api/index';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2'

interface Book {
  id: number;
  title: string;
  author: string;
  year:string;
  genre:string;
  price:number;
}
interface BookState {
    books: Book[];
    currentBook: Book | null;
    loading: boolean;
    error: string | null;
}

// Async action to get a book by ID from the API
export const getBookById = createAsyncThunk<Book, number, { rejectValue: string }>(
  'books/getBookById',
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get<Book>(`/${bookId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('An error occurred while fetching the book by ID.');
    }
  }
);


// Async action to get books from the API
export const getBooks = createAsyncThunk<Book[], void, { rejectValue: string }>(
  'books/getBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get<Book[]>('/'); 
      return response.data;
    } catch (error) {
      return rejectWithValue('An error occurred while fetching books.');
    }
  }
);


// Async action to add a book to the API
export const addBook = createAsyncThunk<Book, Book, { rejectValue: string }>('books/addBook', async (bookData, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post<Book>('/', bookData);
    return response.data;
  } catch (error) {
    return rejectWithValue('An error occurred while adding the book.');
  }
});

// Async action to remove a book from the API
export const removeBook = createAsyncThunk<number, number, { rejectValue: string }>('books/removeBook', async (bookId, { rejectWithValue }) => {
  try {
    await axiosClient.delete(`/${bookId}`);
    return bookId;
  } catch (error) {
    return rejectWithValue('An error occurred while removing the book.');
  }
});

// Async action to update a book in the API
export const updateBook = createAsyncThunk<Book, Book, { rejectValue: string }>('books/updateBook', async (bookData, { rejectWithValue }) => {
  try {
    const response = await axiosClient.put<Book>(`/${bookData.id}`, bookData); 
    return response.data;
  } catch (error) {
    return rejectWithValue('An error occurred while updating the book.');
  }
});




const initialState: BookState = {
  books: [],
  currentBook: null, 
  loading: false,
  error: null,
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getBooks.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getBooks.fulfilled, (state, action) => {
          state.loading = false;
          state.books = action.payload;
          state.error = null;
        })
        .addCase(getBooks.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message as string | null;
        })
        .addCase(getBookById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getBookById.fulfilled, (state, action) => {
          state.loading = false;
          state.currentBook = action.payload; 
          state.error = null;
        })
        .addCase(getBookById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message as string | null;
        })
        .addCase(addBook.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addBook.fulfilled, (state, action) => {
          state.loading = false;
          state.books.push(action.payload);
          state.error = null;
          Swal.fire('Success!','Your operation was successful!','success');  
        })
        .addCase(addBook.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message as string | null;
        })
        .addCase(removeBook.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(removeBook.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          Swal.fire('Success!','Your operation was successful!','success');
        })
        .addCase(removeBook.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message as string | null;
        })
        .addCase(updateBook.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateBook.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          Swal.fire('Success!','Your operation was successful!','success');
        })
        .addCase(updateBook.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message as string | null;
        });
    },
  });
  

export default bookSlice.reducer;
