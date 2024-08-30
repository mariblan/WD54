import { Link } from 'react-router-dom';
function Students({ students }) {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
