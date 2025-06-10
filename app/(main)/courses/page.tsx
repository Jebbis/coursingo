import { GetCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const coursesData = GetCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  console.log("Current active course:", userProgress?.activeCourseId);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-3xl font-extrabold text-selected">Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
