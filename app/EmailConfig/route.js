import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, msg: "All fields are required!" },
        { status: 400 }
      );
    }

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,   // Your Gmail
        pass: process.env.MAIL_PASS    // Your App Password
      }
    });

    // Send Mail
    await transporter.sendMail({
      from: `"Portfolio Message" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true, msg: "Email sent successfully!" });

  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { success: false, msg: "Email sending failed!", error: error.message },
      { status: 500 }
    );
  }
}
