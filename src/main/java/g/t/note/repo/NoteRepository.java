package g.t.note.repo;

import g.t.note.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "note")
public interface NoteRepository extends JpaRepository<Note, Long> {

    List<Note> findTop6ByOrderByIdDesc();

    List<Note> findTop6ByOrderByViewCountDesc();

}
