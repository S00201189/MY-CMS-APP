export interface Teacher {
  _id: string;
  name: string;
  firstName: string;
}

export interface Attendance {
  _id: string;
  lessonName: string;
  topicName: string;
  studentName: string;
  isPresent: boolean;
  year: string;
  month: string;
  day: string;
  subject: {
    title: string;
  };
  class: {
    title: string;
  };
  department: {
    name: string;
  };
  attendance: {
    _id: string;
    day: string;
    month: string;
    year: string;
  }
}

export interface StudentDetails {
  _id: string;
  firstName: string;
  lastName: string;
  className: string;
  classYear: number;
  departmentName: string;
  studentAttendances: Attendance[];
}

export interface Parent {
  _id: string;
  students: StudentDetails[];
}
