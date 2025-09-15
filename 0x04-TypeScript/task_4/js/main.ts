/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;

const cpp = new Cpp();
const java = new Java();
const react = new React();

const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};

cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
