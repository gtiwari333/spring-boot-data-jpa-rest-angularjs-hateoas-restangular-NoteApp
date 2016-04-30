package g.t.note.repo;

import g.t.note.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface NoteRepository extends JpaRepository< Note, Long > {

}
