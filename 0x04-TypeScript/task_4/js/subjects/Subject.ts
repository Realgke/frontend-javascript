// task_4/js/subjects/Subject.ts
namespace Subjects {
  // Make sure Teacher interface exists before using it
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Interface defining the Subject
  export interface Subject {
    teacher?: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  // Class implementing the Subject interface
  export class SubjectClass implements Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
