package library.crud.Library.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;

@Entity
@Table(name = "Books")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long id;

    @Column(name = "book_title")
    private String title;

    @Column(name = "book_author")
    private String author;

    @Column(name = "book_genre")
    private String genre;

    @Column(name = "publication_year")
    private String year;

    @Column(name = "book_price")
    private double price;

    @Lob
    @Column(name = "book_image")
    private byte[] image;
    public String getBase64Image() {
        return Base64.encodeBase64String(image);
    }

}
