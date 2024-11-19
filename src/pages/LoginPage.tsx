import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const LoginPage = () => {
  return (
    <div className="m-auto mt-4 w-96 text-black">
      <Card bg="white" rounded="rounded-lg">
        <div className="flex flex-col gap-8 items-center justify-center py-12">
          <h5 className="text-xl">Enter your email to continue</h5>
          <input
            className="p-3 rounded border border-neutral-300"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-3 rounded border border-neutral-300"
            type="password"
            placeholder="Password"
          />
          <Button as="button">Continue</Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
