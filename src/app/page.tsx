

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      home

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
