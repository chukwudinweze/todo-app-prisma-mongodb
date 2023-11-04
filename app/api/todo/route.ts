import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    //fetch all todos in the db and order by createdAt in desc order
    const todos = await db.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(todos, { status: 200 }); // Respond with the todos
  } catch (error) {
    console.log("[GET TODO]", error);

    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
