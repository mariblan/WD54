import { useParams } from 'react-router-dom';

function OneStudent({ students }) {
  const { id } = useParams();
  console.log(typeof id);
  console.log(typeof students[0].id);

  //toString()
  //parseInt()
  // ==
  const student = students.find((student) => student.id === parseInt(id));
  console.log(student);
  return (
    <div>
      <h2>{student.name}</h2>
    </div>
  );
}

export default OneStudent;
