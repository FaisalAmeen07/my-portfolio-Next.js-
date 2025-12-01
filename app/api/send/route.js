import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,     
        pass: process.env.MAIL_PASS      
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,         
      subject: `New Portfolio Message from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true, msg: "Email sent successfully" });

  } catch (error) {
    return Response.json({ success: false, msg: "Email failed", error });
  }
}
