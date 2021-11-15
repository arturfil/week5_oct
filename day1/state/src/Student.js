function Student(random) {
  console.log(random);

  return (
    <div>
      <h2>Student Name: {random.props.name} </h2>
      <h4>Backpack: {random.props.backpack} </h4>
      <h4>
        Book:{random.props.active ? random.props.book : "This student has no book"}
      </h4>
      <h4>Course: {random.props.active ? random.props.course : 'Student in not in an active course'} </h4>
    </div>
  );
}

export default Student;
