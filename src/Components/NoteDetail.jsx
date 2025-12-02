function NoteDetail({ note }) {
  return (
    <div>
      <p>ID unique : {note.unique_id}</p>
      <p>Cours : {note.course}</p>
      <p>Étudiant : {note.student.firstname} {note.student.lastname}</p>
      <p>ID étudiant : {note.student.id}</p>
      <p>Date : {note.date}</p>
      <p>Note : {note.grade}</p>
    </div>
  );
}
export default NoteDetail;