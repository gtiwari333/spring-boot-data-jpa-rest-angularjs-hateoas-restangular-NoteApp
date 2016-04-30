package g.t.note.contoller;

import g.t.note.entity.Note;
import g.t.note.entity.Person;
import g.t.note.repo.NoteRepository;
import g.t.note.repo.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by gtiwari on 4/30/2016.
 */

@Controller
@RequestMapping("/api/person")
public class PersonController extends RESTController<Person, Long> {

    @Autowired
    public PersonController(PersonRepository repo) {
        super(repo);
    }
}