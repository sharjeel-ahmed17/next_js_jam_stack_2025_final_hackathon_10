import { GET_ALL_PRODUCTS } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = client.fetch(`*[_type == "products"]`);
        return NextResponse.json({
            data : response,
            err : false ,
            message : "data fetch successfully" 

        })
    } catch (error) {
        console.log(error);
        
        
    }
}