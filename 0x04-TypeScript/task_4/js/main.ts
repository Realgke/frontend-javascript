/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
