package g.t.note.repo;

import g.t.note.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource( path = "note" )
public interface NoteRESTRepository extends JpaRepository< Note, Long > {

}
