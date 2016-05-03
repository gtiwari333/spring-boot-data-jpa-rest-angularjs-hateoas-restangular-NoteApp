package g.t.note.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import g.t.note.entity.Person;

@RepositoryRestResource(path = "person")
public interface PersonRepository extends JpaRepository<Person, Long> {

    @Query(value = "SELECT p.*  FROM person p , note n WHERE p.id = n.person_id GROUP BY n.person_id ORDER BY COUNT(n.id) DESC LIMIT 5", nativeQuery = true)
    List<Person> findTop3PosterBasedOnPostCount();

    @Query(value = "SELECT p.*  FROM person p , note n WHERE p.id = n.person_id and n.view_count > 0 GROUP BY n.person_id ORDER BY SUM(n.view_count) DESC LIMIT 5", nativeQuery = true)
    List<Person> findTop3PosterBasedOnPostViewCount();

}
