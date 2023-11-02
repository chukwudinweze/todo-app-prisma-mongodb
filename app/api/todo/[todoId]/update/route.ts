import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { todoId: string } }
) {
  try {
    // destructure todo from params
    const { todoId } = params;

    // detsrtucture isCompleted from the request body
    const { isCompleted } = await req.json();

    if (!todoId) {
      return new NextResponse("Not found", { status: 404 });
    }

    if (!isCompleted) {
      return new NextResponse("Not allowed", { status: 405 });
    }

    // update todo
    const updatedTodo = await db.todo.update({
      where: {
        id: todoId,
      },
      data: {
        isCompleted: true,
      },
    });

    // Respond with the updated todo
    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.log("[UPDATE TODO]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
