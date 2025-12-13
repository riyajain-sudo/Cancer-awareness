import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // just for demo
    setSuccess(true);
    reset();

    // hide success after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div id="contact" className="max-w-fit mx-auto mt-30 p-6 bg-white rounded-lg shadow-2xl">
      <h3 className="text-3xl text-center font-semibold">Contact Us</h3>
       <p className="mt-2 text-sm text-gray-600">Have questions or need support? Drop us a message and we'll respond as soon as we can.</p>

       <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-4 shadow-2xl">
         <div>
           <label className="block text-sm font-medium">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Your name"
          />
           {errors.name && (
            <p className="mt-1 text-xs text-pink-600">{errors.name.message}</p>
            )}
         </div>

         <div>
           <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email"
              }
            })}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="you@example.com"
            />
           {errors.email && (<p className="mt-1 text-xs text-pink-600">{errors.email.message}</p>
          )}
         </div>
         <div>
           <label className="block text-sm font-medium">Message</label>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters"
              }
            })}
            rows={5}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Tell us what's on your mind"
          />
           {errors.message && (<p className="mt-1 text-xs text-pink-600">{errors.message.message}</p>
          )}
         </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 bg-pink-500 text-white rounded-md"
        >
          {/* e.preventDefault() */}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

         <div className="flex items-center gap-3">
           {/* <button type="submit" className="px-5 py-2 rounded-md bg-pink-500 text-white font-medium hover:brightness-95">Send Message</button> */}
           <span className="text-sm text-gray-500">This form doesn't send data to any server (demo).</span>
         </div>
         {success && (
          <div className="p-3 bg-green-50 text-green-800 text-sm rounded-md">
            Thanks — your message was recorded (demo only).
          </div>
        )}
       </form>
     </div>
  );
}
