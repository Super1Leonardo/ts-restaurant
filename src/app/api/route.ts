import { NextResponse } from "next/server";
import dishes from "./prisma";

export async function GET() {
    return Response.json(dishes)
}