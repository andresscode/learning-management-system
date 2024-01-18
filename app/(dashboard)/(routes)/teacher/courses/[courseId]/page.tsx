export default function CoursePage({
  params,
}: {
  params: { courseId: string };
}) {
  return <p>Course: {params.courseId}</p>;
}
