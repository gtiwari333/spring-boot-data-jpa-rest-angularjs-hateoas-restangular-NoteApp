package g.t.note.contoller;

import g.t.note.entity.Note;
import g.t.note.repo.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by gtiwari on 4/30/2016.
 */

@Controller
@RequestMapping("/api/note")
public class NoteController extends RESTController<Note, Long> {

    @Autowired
    public NoteController(NoteRepository repo) {
        super(repo);
    }
}