import MeetingRequestCard from "@/components/MeetingRequestCard";
import TodoCard from "@/components/TodoCard";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <MeetingRequestCard />
      <TodoCard />
    </div>
  );
}
