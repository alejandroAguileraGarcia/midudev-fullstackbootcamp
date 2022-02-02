export const Note = ({note}) => (
  <div >
    <li>
      {note.important ? <strong>{note.content}</strong> : note.content}
    </li>
  </div>
)