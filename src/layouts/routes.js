import ExamHistory from '../views/ExamHistory/ExamHistoryContainer';
import Course from '../views/Course/CourseContainer';


const routes = [
  {
    url: '/dashboard',
    name: 'Dashboard',
    component: ExamHistory,
  },
  {
    url: '/course',
    name: 'Course',
    component: Course,
  },
  {
    url: '/exam-history',
    name: 'Exam History',
    component: ExamHistory,
  },
  {
    url: '/edit-profile',
    name: 'Edit Profile',
    component: ExamHistory,
  },
  {
    url: '/change-password',
    name: 'Change Password',
    component: ExamHistory,
  },
  
];

export default routes;
