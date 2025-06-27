import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#0a0a0a]">
      <SignUp
        appearance={{
          elements: {
            card:
              "bg-[#1a0b1f]/90 border border-purple-700 shadow-lg backdrop-blur-md text-white rounded-xl",
            headerTitle: "text-white text-3xl font-extrabold tracking-wide",
            headerSubtitle: "text-purple-400",
            socialButtonsBlockButton:
              "bg-[#2b1a3f] text-white border border-purple-700 hover:bg-purple-800 transition",
            dividerLine: "bg-purple-800",
            dividerText: "text-purple-500",
            formFieldLabel: "text-white",
            formFieldInput:
              "bg-[#100617] text-white placeholder-purple-400 border border-purple-700 focus:ring-2 focus:ring-purple-600",
            formButtonPrimary:
              "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold shadow-md",
            footerActionText: "text-white",
            footerActionLink: "text-purple-400 hover:text-purple-200 underline",
          },
        }}
      />
    </main>
  );
};

export default SignUpPage;
