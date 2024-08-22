const Student = ({
  hello,
  student: { firstName, lastName, age, city, course, picture },
}) => {
  //   console.log(props);
  //   const {
  //     student: { firstName, lastName },
  //   } = props;

  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
      <img src={picture} />
    </div>
  );
};
export default Student;
