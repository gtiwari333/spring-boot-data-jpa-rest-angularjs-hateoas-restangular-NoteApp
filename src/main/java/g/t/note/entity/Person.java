package g.t.note.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.PersistenceConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table( name = "person" )
@Data
public class Person {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private Long		id;

	private String		firstName;

	private String		lastName;

	private String		midName;

	private String		email;

	@Column( nullable = false, columnDefinition = "TINYINT", length = 1 )
	private boolean		active;

	@OneToMany( fetch = FetchType.EAGER, mappedBy = "person" )
	@JsonIgnore
	private Set< Note >	notes;

	public Person( ) {
	}

	@PersistenceConstructor
	public Person( String firstName, String lastName, String midName, Date dateOfBirth, String email ) {
		super( );
		this.firstName = firstName;
		this.lastName = lastName;
		this.midName = midName;
		this.email = email;
	}

	@Override
	public int hashCode( ) {
		final int prime = 31;
		int result = 1;
		result = prime * result + ( ( id == null ) ? 0 : id.hashCode( ) );
		return result;
	}

	@Override
	public boolean equals( Object obj ) {
		if ( this == obj )
			return true;
		if ( obj == null )
			return false;
		if ( getClass( ) != obj.getClass( ) )
			return false;
		Person other = ( Person ) obj;
		if ( id == null ) {
			if ( other.id != null )
				return false;
		} else if ( !id.equals( other.id ) )
			return false;
		return true;
	}

	@Override
	public String toString( ) {
		return "Author [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", midName=" + midName + ", email=" + email + ", active=" + active + "]";
	}

}
