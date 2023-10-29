package library.crud.Library.service;

import library.crud.Library.model.Book;
import library.crud.Library.repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepo bookRepo;

    public Book getBook(Long id) {
        Optional<Book> book = bookRepo.findById(id);
        return book.orElse(null);
    }

    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    public List<Book> getBookByTitle(String title){
      return bookRepo.findByTitle(title);
    }

    public Book createBook(Book newBook) {
        return bookRepo.save(newBook);
    }

    public Book updateBook(Long id, Book updatedBook) {
        if (bookRepo.existsById(id)) {
            updatedBook.setId(id);
            return bookRepo.save(updatedBook);
        }
        return null;
    }

    public boolean deleteBook(Long id) {
        if (bookRepo.existsById(id)) {
            bookRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
