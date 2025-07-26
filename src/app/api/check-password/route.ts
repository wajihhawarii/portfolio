import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { password } = body;

    const correctPassword = process.env.ADMIN_PASSWORD;

    if (password === correctPassword) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false, message: 'Incorrect password' }, { status: 401 });
    }
}