interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  readonly [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (
  firstName: string,
  lastName: string,
): string => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

interface ClassConstructor {
  readonly firstName: string;
  readonly lastName: string;
}

interface ClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements ClassConstructor, ClassInterface {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
