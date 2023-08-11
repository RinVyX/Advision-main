import { EmailTemplate } from "../../Components/pages/Contact/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log("i'm in2");

const resend = new Resend(process.env.RESEND_API_KEY)
console.log("in",JSON.stringify(data));

export default async (req, res) => {

  try {
    const body = await request.json();
    console.log("body : ", body);
    const { name, email, subject, message } = body;
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: subject,
      react: EmailTemplate({ firstName: name })
    });

    if (data.status === "success") {
      return NextResponse.json({ message: "Email Successfully Sent!" });
    }
    return NextResponse.json(data);

  } catch (error) {
    console.log('error', error);
  }
}
