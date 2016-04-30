package g.t.note.repo;

import g.t.note.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface PersonRepository extends JpaRepository< Person, Long > {

}
