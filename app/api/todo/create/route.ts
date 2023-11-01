import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { todoTitle } = await req.json();

    if (!todoTitle) {
      return new NextResponse("Title required", { status: 401 });
    }

    const todo = await db.todo.create({
      data: {
        title: todoTitle,
      },
    });

    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    console.log("[POST TODO", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
