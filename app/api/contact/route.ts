import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject: rawSubject, message } = body;
    const subject = typeof rawSubject === 'string' ? rawSubject.trim() : '';

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Message content is required.' },
        { status: 400 }
      );
    }

    // Optional subject handling
    const formattedSubject = subject ? subject : 'General Inquiry';

    // TODO: Connect email provider (e.g. Resend, SendGrid, Nodemailer) in production
    // await sendEmail({ to: process.env.CONTACT_EMAIL, subject: formattedSubject, message });

    return NextResponse.json(
      {
        success: true,
        message: `Thank you! Your message regarding "${formattedSubject}" has been received.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Internal Error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { success: false, message: 'An internal error occurred.' },
      { status: 500 }
    );
  }
}
