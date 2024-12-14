import nodemailer from 'nodemailer';

export class EmailService {
    private transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.email",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.APP_MAIL_USER,
        pass: process.env.APP_MAIL_PASSWORD
      }
    });

    public sendMail(subject: string, body: string, to: string) {
      return this.transporter.sendMail({
        from: {
          address: process.env.APP_MAIL_USER as string,
          name: process.env.APP_MAIL_NAME as string
        },
        to: to,
        subject: subject,
        html: body
      });
    }
}