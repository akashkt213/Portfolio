import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for reaching out! I'll get back to you soon.");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-md">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-6">
          Contact Me
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Have a project in mind or just want to say hi? Feel free to drop me a
          message below 👇
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-border rounded-md px-4 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border border-border rounded-md px-4 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="border border-border rounded-md px-4 py-2 bg-background text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
