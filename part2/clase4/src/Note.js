export const Note = ({...note}) => (
  <div >
    <li>
      <p>{note.title}</p>
      <p><small>{note.body}</small></p>
    </li> 
  </div>
)