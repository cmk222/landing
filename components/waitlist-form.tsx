"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setMessage("웨이트리스트 등록이 완료되었습니다!")
        setName("")
        setEmail("")
      } else {
        throw new Error(data.error || "Failed to add to waitlist")
      }
    } catch (error) {
      setStatus("error")
      setMessage("오류가 발생했습니다. 다시 시도해주세요.")
      console.error("Error:", error)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {status !== "success" ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600" disabled={status === "loading"}>
            {status === "loading" ? "처리 중..." : "웨이트리스트 등록하기"}
          </Button>
          {status === "error" && (
            <p className="text-red-500 text-sm text-center mt-2">{message}</p>
          )}
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">웨이팅 리스트 등록 완료!</h3>
          <p className="text-gray-600">{message}</p>
        </div>
      )}
    </div>
  )
}
