package g.t.note.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "note")
@Data
public class Note {

    public enum Status {
        DRAFT, NOT_COMPLETED, COMPLETED, ARCHIVED;

        @Override
        public String toString() {
            return name();
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    @Column(unique = true)
    @NotNull
    private String url;

    private String description;

    private Date createdDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @NotNull
    private Person person;

    @Enumerated(EnumType.STRING)
    private Status status;

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
