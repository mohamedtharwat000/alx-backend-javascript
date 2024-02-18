// to get the code working do not use webpack, just use the tsc command to compile the code.

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
  const teacher: Teacher = {
    firstName: 'mohamed',
    lastName: 'mohamed',
    experienceTeachingC: 5,
    experienceTeachingJava: 7,
    experienceTeachingReact: 9,
  };

  const cpp = new Cpp();
  const java = new Java();
  const react = new React();

  const subject = new Subject(teacher);
  console.log(subject);

  console.log('C++');
  cpp.setTeacher(teacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  console.log('Java');
  java.setTeacher(teacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  console.log('React');
  react.setTeacher(teacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
