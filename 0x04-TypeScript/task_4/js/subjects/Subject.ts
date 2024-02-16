namespace Subjects {
  export class Subject {
    private _teacher: Teacher | undefined;

    public get teacher(): Teacher | undefined {
      return this._teacher;
    }

    public setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
