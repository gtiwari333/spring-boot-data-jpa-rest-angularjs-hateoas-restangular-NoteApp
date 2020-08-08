package g.t.note.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "note")
@Data
public class Note {

    @Transient
    @JsonSerialize
    Long personId;
    @Transient
    @JsonSerialize
    String personName;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    @CreatedDate
    private Date createdDate = new Date();
    @ManyToOne(fetch = FetchType.EAGER)
    private Person person;
    private Long viewCount = 0l;

    public Long getPersonId() {
        if (person == null) {
            return null;
        }

        return person.getId();
    }

    public String getPersonName() {
        if (person == null) {
            return null;
        }

        if (StringUtils.isEmpty(person.getMidName())) {
            return person.getFirstName() + "" + person.getLastName();
        } else {
            return person.getFirstName() + " " + person.getMidName() + " " + person.getLastName();
        }

    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Note other = (Note) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

}
