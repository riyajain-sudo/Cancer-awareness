import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const [demoNotice, setDemoNotice] = useState(false);

  const onSubmit = () => {
    setDemoNotice(true);
  };

  return (
    <div id="contact" className="max-w-fit mx-auto mt-30 p-6 bg-white rounded-lg shadow-2xl">
      <h3 className="text-3xl text-center font-semibold">Contact Us</h3>
       <p className="mt-2 text-sm text-gray-600">Demonstration only: this form does not send or retain messages. For urgent concerns, contact a qualified local health professional.</p>

       <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-4 shadow-2xl">
         <div>
           <label htmlFor="contact-name" className="block text-sm font-medium">Name</label>
          <input
            id="contact-name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full rounded-md border px-3 py-2"
            maxLength={80}
            placeholder="Your name"
          />
           {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1 text-xs text-pink-600">{errors.name.message}</p>
            )}
         </div>

         <div>
           <label htmlFor="contact-email" className="block text-sm font-medium">Email</label>
          <input
            id="contact-email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/i,
                message: "Enter a valid email"
              }
            })}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="you@example.com"
            maxLength={254}
            />
           {errors.email && (<p id="contact-email-error" role="alert" className="mt-1 text-xs text-pink-600">{errors.email.message}</p>
          )}
         </div>
         <div>
           <label htmlFor="contact-message" className="block text-sm font-medium">Message</label>
          <textarea
            id="contact-message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters"
              }
            })}
            rows={5}
            className="mt-1 w-full rounded-md border px-3 py-2"
            maxLength={1000}
            placeholder="Tell us what's on your mind"
          />
           {errors.message && (<p id="contact-message-error" role="alert" className="mt-1 text-xs text-pink-600">{errors.message.message}</p>
          )}
         </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 bg-pink-500 text-white rounded-md"
        >
          {/* e.preventDefault() */}
          {isSubmitting ? "Showing demo…" : "Try demo form"}
        </button>

         <div className="flex items-center gap-3">
           {/* <button type="submit" className="px-5 py-2 rounded-md bg-pink-500 text-white font-medium hover:brightness-95">Send Message</button> */}
           <span className="text-sm text-gray-500">This form doesn't send data to any server (demo).</span>
         </div>
         {demoNotice && (
          <div role="status" className="p-3 bg-amber-50 text-amber-900 text-sm rounded-md">
            Demo only: your message was not sent or stored. Your text remains in the form.
          </div>
        )}
       </form>
     </div>
  );
}
