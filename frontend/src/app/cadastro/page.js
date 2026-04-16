import { SignupForm } from "@/components/ui/signup-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[url('https://i.pinimg.com/1200x/64/6a/2f/646a2f3cbb5283f0486e84175a050b80.jpg')] bg-cover bg-center bg-no-repeat p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
