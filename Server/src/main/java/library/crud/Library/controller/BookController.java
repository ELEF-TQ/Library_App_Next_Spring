package library.crud.Library.controller;


import library.crud.Library.model.Book;
import library.crud.Library.service.BookService;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // Create a new book
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    // Get a list of all books
    @GetMapping
    public Iterable<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    // Get a specific book by its ID
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookService.getBook(id);
    }

    // Get books by their title
    @GetMapping("/byTitle")
    public List<Book> getBookByTitle(@RequestParam("title") String title) {
        return bookService.getBookByTitle(title);
    }

    // Update an existing book
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        return bookService.updateBook(id, updatedBook);
    }

    // Delete a book by its ID
    @DeleteMapping("/{id}")
    public boolean deleteBook(@PathVariable Long id) {
        return bookService.deleteBook(id);
    }
}
