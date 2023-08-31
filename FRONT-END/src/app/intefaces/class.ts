export interface Department {
  name: string;
}

export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface Class {
  _id: string;
  title: string;
  year: string;
  department: Department;
  students: Student[];
  info: ClassInfo[];
}

export interface Teacher {
  firstName: string;
  lastName: string;
  _id: string;
}

export interface Subject {
  title: string;
  code: string;
  _id: string;
}

export interface ClassInfo {
  teacher: Teacher;
  subject: Subject;
  _id: string;
}

export interface ApiResponse {
  messageType: string;
  message: string;
  allDepartments?: Department[];
  allStudents?: Student[];
  classes?: Class[];
  teachers?: Teacher[];
  allSubjects?: Subject[];
}
