import mongoDB from '@/config/mongoDB';
import Student from '@/model/Student';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await mongoDB();
    const student = await Student.find({ trash: false }).sort({
      createdAt: -1,
    });
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.error(error.message);
  }
};

export const POST = async (request) => {
  try {
    await mongoDB();
    const data = await request.json();
    const student = await Student.create(data);
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.error(error.message);
  }
};

export const DELETE = async (request) => {
  try {
    await mongoDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const student = await Student.findByIdAndDelete(id);
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.error(error.message);
  }
};
