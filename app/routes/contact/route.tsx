import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation, Link } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/schema";
import { Resend } from "resend";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: formSchema });
  if (submission.status !== "success") {
    return json(submission.reply());
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "delivered@resend.dev",
    subject: "Contact Form Submission",
    html: `<p>First Name: ${submission.value.firstName}</p>
    <p>Last Name: ${submission.value.lastName}</p>
    <p>Email: ${submission.value.email}</p>
    <p>Affiliation: ${submission.value.affiliation}</p>
    <p>Message: <br />${submission.value.message}</p>`,
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
    <div>
      <Form
        action="/contact"
        method="post"
        id={form.id}
        onSubmit={form.onSubmit}
        autoComplete="off"
        noValidate
        className="flex flex-col gap-5 max-w-screen-md mx-auto mt-10 bg-background rounded-lg border-solid border-2 border-border p-10"
      >
        <FormMessage message={form.errors} />
        <div className="flex gap-5 w-full">
          <div className="flex-grow">
            <label>First Name</label>
            <Input
              type="text"
              key={fields.firstName.key}
              name={fields.firstName.name}
              defaultValue={fields.firstName.initialValue}
              placeholder="First Name"
            />
            <FormMessage message={fields.firstName.errors} />
          </div>
          <div className="flex-grow">
            <label>Last Name</label>
            <Input
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
          <label>Email</label>
          <Input
            type="email"
            key={fields.email.key}
            name={fields.email.name}
            defaultValue={fields.email.initialValue}
            placeholder="sample@example.com"
          />
          <FormMessage message={fields.email.errors} />
        </div>
        <div className="w-full">
          <label>{"Affiliation (optional)"}</label>
          <Input
            type="text"
            key={fields.affiliation.key}
            name={fields.affiliation.name}
            defaultValue={fields.affiliation.initialValue}
            placeholder="Company Inc."
          />
          <FormMessage message={fields.affiliation.errors} />
        </div>
        <div className="w-full">
          <label>Message</label>
          <Textarea
            key={fields.message.key}
            name={fields.message.name}
            defaultValue={fields.message.initialValue}
            placeholder="I love you :)"
          />
          <FormMessage message={fields.message.errors} />
        </div>
        <Button disabled={navigation.state !== "idle"}>
          {navigation.state === "submitting" ? "Submitting..." : "Submit"}
        </Button>
      </Form>
      <div className="flex justify-center items-center mt-5">
        <p className="text-muted-foreground">OR</p>
      </div>
      <div className="flex justify-center items-center mt-5">
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
