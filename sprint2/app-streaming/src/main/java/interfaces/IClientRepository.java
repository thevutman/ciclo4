package interfaces;

import entities.Client;
import org.springframework.data.repository.CrudRepository;

public interface IClientRepository extends CrudRepository<Client, String> {
}
