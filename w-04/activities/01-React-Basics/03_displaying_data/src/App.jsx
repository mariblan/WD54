// You can work here or download the template
import Student from './components/Student';
const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

// Your components go here

const App = () => {
  return (
    <div>
      {/* Your UI goes here */}
      <Student student={studentData} hello="hello" />
    </div>
  );
};

export default App;
