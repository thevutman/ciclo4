package interfaces;

import entities.Movie;
import org.springframework.data.repository.CrudRepository;

public interface IMovieRepository extends CrudRepository<Movie, String> {
}
