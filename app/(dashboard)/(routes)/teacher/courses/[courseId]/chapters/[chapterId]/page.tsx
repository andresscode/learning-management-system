export default function ChapterPage({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) {
  return (
    <>
      <p>Course: {params.courseId}</p>
      <p>Chapter: {params.chapterId}</p>
    </>
  );
}
