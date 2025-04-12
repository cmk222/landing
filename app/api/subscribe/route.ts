import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        이름: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        이메일: {
          email: email,
        },
      },
    })

    return NextResponse.json({ success: true, data: response })
  } catch (error) {
    console.error("Error adding subscriber to Notion:", error)
    return NextResponse.json(
      { success: false, error: "Failed to add subscriber" },
      { status: 500 }
    )
  }
} 