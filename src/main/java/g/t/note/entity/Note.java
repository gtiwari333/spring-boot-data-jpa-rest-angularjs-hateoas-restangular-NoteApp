package g.t.note.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table( name = "note" )
@Data
public class Note {

	public enum Status {
		DRAFT, NOT_COMPLETED, COMPLETED, ARCHIVED;

		@Override
		public String toString( ) {
			return name( );
		}
	}

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO )
	private Long	id;

	private String	title;

	@Column( unique = true )
	@NotNull
	private String	url;

	private String	description;

	private Date	createdDate;

	@ManyToOne( fetch = FetchType.EAGER )
	@JsonIgnore
	private Person	person;

	@Enumerated( EnumType.STRING )
	private Status	type;

	@Override
	public boolean equals( Object obj ) {
		if ( this == obj )
			return true;
		if ( obj == null )
			return false;
		if ( getClass( ) != obj.getClass( ) )
			return false;
		Note other = ( Note ) obj;
		if ( id == null ) {
			if ( other.id != null )
				return false;
		} else if ( !id.equals( other.id ) )
			return false;
		return true;
	}

	@Override
	public int hashCode( ) {
		final int prime = 31;
		int result = 1;
		result = prime * result + ( ( id == null ) ? 0 : id.hashCode( ) );
		return result;
	}

}
