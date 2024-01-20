import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    const { url } = await req.json();
    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });
    if (!courseOwner) return new NextResponse("Unauthorized", { status: 401 });
    const attachment = await db.attachment.create({
      data: { url: url, name: url.split("/").pop(), courseId: params.courseId },
    });
    return NextResponse.json(attachment);
  } catch (err) {
    console.log("[COURSE_ID_ATTACHMENTS]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
