package library.crud.Library.service;


import library.crud.Library.model.Book;
import library.crud.Library.repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;


import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
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
        if (newBook.getBase64Image() != null) {
            byte[] image = Base64.getDecoder().decode(newBook.getBase64Image());

            // Resize the image (e.g., to 200x200 pixels) using Thumbnails
            try {
                ByteArrayInputStream imageStream = new ByteArrayInputStream(image);
                ByteArrayOutputStream resizedImageStream = new ByteArrayOutputStream();

                Thumbnails.of(imageStream)
                        .size(200, 200)
                        .toOutputStream(resizedImageStream);

                newBook.setImage(resizedImageStream.toByteArray());
            } catch (IOException e) {
                // Handle exceptions
                e.printStackTrace();
            }
        }

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
