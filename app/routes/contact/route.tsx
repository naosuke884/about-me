import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { Resend } from "resend";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: formSchema });
  if (submission.status !== "success") {
    return json(submission.reply());
  }
  const { firstName, lastName, email, affiliation, message } = submission.value;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.RESEND_TO;
  if (!to) {
    console.error("RESEND_TO is not set");
    return json(
      submission.reply({
        formErrors: ["Failed to send email"],
      }),
    );
  }
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: to,
    subject: "Contact Form Submission",
    html: `<p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Affiliation: ${affiliation}</p>
    <p>Message: <br />${message}</p>`,
  });

  if (error) {
    console.error(error);
    return json(
      submission.reply({
        formErrors: ["Failed to send email"],
      }),
    );
  }

  return redirect("/contact/thanks", 303);
}

export default function Contact() {
  const actionData = useActionData<typeof action | undefined>();
  const navigation = useNavigation();
  const XLink = "https://x.com/Naoki89372444";
  const [form, fields] = useForm({
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    lastResult: actionData,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: formSchema });
    },
  });
  const FormMessage = ({ message }: { message: string[] | undefined }) => {
    return (
      message && (
        <div className="text-[0.8rem] font-medium text-destructive">
          {message}
        </div>
      )
    );
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <Form
        action="/contact"
        method="post"
        id={form.id}
        onSubmit={form.onSubmit}
        autoComplete="off"
        noValidate
        className="mx-auto flex max-w-screen-md flex-col gap-5 rounded-lg border-2 border-solid border-border bg-background p-10"
      >
        <FormMessage message={form.errors} />
        <div className="flex w-full flex-col gap-5 sm:flex-row">
          <div className="flex-grow">
            <label htmlFor="firstName">First Name</label>
            <Input
              id="firstName"
              type="text"
              key={fields.firstName.key}
              name={fields.firstName.name}
              defaultValue={fields.firstName.initialValue}
              placeholder="First Name"
            />
            <FormMessage message={fields.firstName.errors} />
          </div>
          <div className="flex-grow">
            <label htmlFor="lastName">Last Name</label>
            <Input
              id="lastName"
              type="text"
              key={fields.lastName.key}
              name={fields.lastName.name}
              defaultValue={fields.lastName.initialValue}
              placeholder="Last Name"
            />
            <FormMessage message={fields.lastName.errors} />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            key={fields.email.key}
            name={fields.email.name}
            defaultValue={fields.email.initialValue}
            placeholder="sample@example.com"
          />
          <FormMessage message={fields.email.errors} />
        </div>
        <div className="w-full">
          <label htmlFor="affiliation">{"Affiliation (optional)"}</label>
          <Input
            id="affiliation"
            type="text"
            key={fields.affiliation.key}
            name={fields.affiliation.name}
            defaultValue={fields.affiliation.initialValue}
            placeholder="Company Inc."
          />
          <FormMessage message={fields.affiliation.errors} />
        </div>
        <div className="w-full">
          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            key={fields.message.key}
            name={fields.message.name}
            defaultValue={fields.message.initialValue}
            placeholder="I love you :)"
          />
          <FormMessage message={fields.message.errors} />
        </div>
        <Button disabled={navigation.state !== "idle"}>{"Submit"}</Button>
      </Form>
      <div className="m-5 flex items-center justify-center">
        <p className="text-muted-foreground">OR</p>
      </div>
      <div className="m-5 flex items-center justify-center">
        <p>
          <Link
            to={XLink}
            className="font-medium text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="direct message me on X"
          >
            {"direct message me on X"}
          </Link>
        </p>
      </div>
    </div>
  );
}
