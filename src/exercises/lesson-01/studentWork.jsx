//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Lisa';
  const age = 51;
  const hobbies = ['coding', 'gaming', 'crochet', 'photography'];

  return (
    <div>
      {/* add JSX here */}
      <h1>About me</h1>
      <p>
        {' '}
        Hi! My name is {name}. I am {age} years old and I am learning React.
      </p>
      <p> My hobbies </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
