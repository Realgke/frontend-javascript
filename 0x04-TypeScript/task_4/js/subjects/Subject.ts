// task_4/js/subjects/Subject.ts
namespace Subjects {
  export class Subject {
    teacher!: Teacher;

    // Explicit type annotation for the parameter
    setTeacher(teacher: Subjects.Teacher): void {
      this.teacher = teacher;
    }
  }
}
