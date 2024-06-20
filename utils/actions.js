"use server"
import { revalidatePath } from "next/cache"
import prisma from "./db"

export const createTask = async (formData) => {
  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content
    }
  })

  revalidatePath('/todo-list') 
}

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const deleteTask = async (formData) => {
  const id = formData.get('id')
  await prisma.task.delete({
    where: { id }
  })

  revalidatePath('/todo-list')
}

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: { id }
  })
}

export const editTask = async (formData) => {
  await prisma.task.update({
    where: { id },
    data: {
      content: formData.get('content')
    }
  })
}