import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Add your email service integration here (e.g. Nodemailer, Resend, SendGrid)
    // Example using Resend:
    // await resend.emails.send({
    //   from: 'Consulto <onboarding@resend.dev>',
    //   to: ['your-email@example.com'],
    //   subject: subject || `New contact form submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });

    console.log('Received contact form submission:', { name, email, subject, message });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred.' },
      { status: 500 }
    );
  }
}
