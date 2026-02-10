import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Calendar, CloudFog, Edit2, MoreVertical, Trash, Trash2 } from "lucide-react";

const STATUS_CONFIG = {
  pending: {
    variant: "secondary",
    label: "Pending",
    color: "text-yellow-600",
  },
  "in progress": {
    variant: "default",
    label: "in progress",
    color: "text-blue-600",
  },
  completed: {
    variant: "outline",
    label: "Completed",
    color: "text-gray-600",
  },
};

export const TaskCard = ({ task, onEdite, onDelete, isLoading = false }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const statusConfig = STATUS_CONFIG[task.status] || STATUS_CONFIG["padding"];

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isOverdue = (dueDate) => {
    if(!dueDate || task.status === "Completed") return false
    return new Date(dueDate) < new Date()
  }

  const dueDate = formatDate(task.dueDate)
  const overdue = isOverdue(task.dueDate)

  return (
    <>
      <Card className={"w-full transition-shadow hover:shadow-md"}>
        <CardHeader className={"pb-3"}>
          <div className="flex items-start justify-between">
            <CardTitle className={"text-lg leading-tight"}>
              {task.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>

              {/* Dropdown  */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="sm" className={"h-8 w-8 p-0"}>
                    <span className="sr-only">Open Menu</span>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent className={"space-y-3"}>
          {/* description */}
          {task.description && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {task.description}
            </p>
          )}

          {/* due date */}
          {
            dueDate && (
              <div className="flex  items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Due:</span>
                  <Badge
                  variant={overdue ? "destructive" : "outline"}
                  className="text-xs"
                  >
                        {dueDate}
                        {overdue && ' (Overdue) '}
                  </Badge>
              </div>
            )
          }

          {/* Simple status indicator */}

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
            <span>Create: {formatDate(task.createdAt)}</span>
            <span className={statusConfig.color}>
              {
                statusConfig.label
              }
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
