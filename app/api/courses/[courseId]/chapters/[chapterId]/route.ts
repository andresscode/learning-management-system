import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });
    if (!course) return new NextResponse("Unauthorized", { status: 401 });
    const { isPublished, ...values } = await req.json();
    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: { ...values },
    });
    return NextResponse.json(chapter);
  } catch (err) {
    console.log("[CHAPTERS]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
