"use client"

import { useState, useRef, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Send, User, Bot } from "lucide-react"
import axios from "axios"

const UserChat = () => {
  const { username } = useParams()
  const [messages, setMessages] = useState([]) // chat messages
  const [inputMessage, setInputMessage] = useState("")
  const messagesEndRef = useRef(null)

  const loadmsg = async () => {
    try {
      const res = await axios.get("http://localhost:5000/allmessage")
      setMessages(res.data.data)
    } catch (error) {
      console.error("Messages load failed:", error)
      alert("Failed to load messages")
    }
  }

  const handleSend = async () => {
    if (!inputMessage.trim()) return
    try {
      await axios.post("http://localhost:5000/message", {
        role: "user",
        content: inputMessage,
      })
      setInputMessage("")
      loadmsg()
    } catch (error) {
      console.error("Message send failed:", error)
      alert("Failed to send message")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Auto-scroll messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    loadmsg()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="flex flex-col h-screen bg-background dark">
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <img  src={"/hitesh.png"}className="w-full h-full rounded-full" />
          </div>
          <div>
            <h1 className="font-semibold text-lg text-card-foreground"> {username || "Assistant"}</h1>
            <p className="text-sm text-muted-foreground">Founder chai code</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                         <img  src={"/hitesh.png"}className="w-5 h-5 text-primary-foreground" />


            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Start a conversation</h3>
            <p className="text-muted-foreground max-w-sm">
              Send a message to begin chatting with {username || "the assistant"}.
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start gap-3 max-w-[80%] ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-amber-500 text-secondary-foreground"
                  }`}
                >
                  {message.role === "user" ? <User className="w-4 h-4" /> : <img  src={"/hitesh.png"}className="h-full w-full rounded-full" />
}
                </div>

                <div className="flex flex-col">
                  <Card
                    className={`p-3 shadow-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-card-foreground border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </Card>

                  {message.timestamp && (
                    <span
                      className={`text-xs text-muted-foreground mt-1 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-center gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-input border-border focus:ring-2 focus:ring-ring"
          />
          <Button
            onClick={handleSend}
            disabled={!inputMessage.trim()}
            size="icon"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Press Enter to send, Shift + Enter for new line
        </p>
      </div>
    </div>
  )
}

export default UserChat
