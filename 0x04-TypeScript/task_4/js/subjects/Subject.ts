namespace Subjects {
  export class Subject {
    public constructor(private _teacher?: Teacher) {}

    public get teacher(): Teacher {
      return this._teacher;
    }

    public setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
