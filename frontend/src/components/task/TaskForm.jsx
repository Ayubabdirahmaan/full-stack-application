import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api/apiClient";

export const TaskForm = ({ open = true, onOpenChange }) => {
  const [formValues, setFormValue] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValues,
      [name]: value,
    });
  };
  const handleStatusChange = (value) => {
      setFormValue({
        ...formValues,
        status: value
      })
  }

  const TASK_STATUS = [
    { value: "pending", label: "pending" },
    { value: "in progress", label: "in progress" },
    { value: "completed", label: "completed" },
  ];
    const handleCencel = () => {
    onOpenChange?.(false)
  }

  // create task mutation 

  const createTaskMutation = useMutation({
    mutationFn: async (taskData) => {
        const response = await api.post()
    },
    onSuccess: (data) => {

    },
    onError: (error) => {

    }

  })






  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"sm:max-w-[500px"}>
        <DialogHeader>
          <DialogTitle className={"text-lg font-semibold"}>
            Create New Task
          </DialogTitle>
          <DialogDescription className={"text-sm text-muted-foreground"}>
            Fill in the details below to create a new task
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Description *</Label>
            <Textarea
              id="description"
              name="description"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="space-y-2">
            <Select
            value={formValues.status}
            onValueChange={handleStatusChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {TASK_STATUS.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
              <Label>Due Date</Label>
              <Input
              id="dueDate"
              name="dueDate"
              type='date'
              value={formValues.dueDate}
              onChange={handleInputChange}
               />
          </div>
          <DialogFooter className={'flex justify-end space-x-2'}>
            <Button type="button" variant="outline" onChange={handleCencel}>Cancel</Button>
                <Button type="submit">Create Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
