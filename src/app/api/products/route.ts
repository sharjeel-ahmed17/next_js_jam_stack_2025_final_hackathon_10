import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({
            data : "some things",
        })
    } catch (error) {
        console.log(error);
        
        
    }
}