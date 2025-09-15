// task_4/js/subjects/Subject.ts
namespace Subjects {
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
