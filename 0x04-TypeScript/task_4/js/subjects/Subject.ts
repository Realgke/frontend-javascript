// task_4/js/subjects/Subject.ts
namespace Subjects {
  export interface Subject {
    teacher?: Teacher; // optional attribute
    setTeacher(teacher: Teacher): void;
  }
}
