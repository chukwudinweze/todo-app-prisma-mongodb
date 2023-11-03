import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { todoId: string } }
) {
  try {
    if (!params.todoId) {
      return new NextResponse("Not found", { status: 404 });
    }

    // delete todo
    const deletedTodo = await db.todo.delete({
      where: {
        id: params.todoId,
      },
    });

    // Respond with the updated todo
    return NextResponse.json(deletedTodo, { status: 200 });
  } catch (error) {
    console.log("[DELETE TODO]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
