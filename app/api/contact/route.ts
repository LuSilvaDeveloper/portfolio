import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com",
    port: 587,
    secure: false, // use STARTTLS
    auth: {
      user: process.env.ICLOUD_USER,
      pass: process.env.ICLOUD_PASS,
    },
  });

  const mailOptions = {
    from: process.env.ICLOUD_USER, // MUST be your own iCloud email
    to: process.env.ICLOUD_USER, // Sending to yourself
    subject: `Portfolio Message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
