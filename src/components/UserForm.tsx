import Button from "./ui/Button";
import { IoIosAlert } from "react-icons/io";

interface UserFormProps {
  title: string;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  error?: string | null;
  onSubmit: () => void;
}

const UserForm = ({
  title,
  email,
  password,
  setEmail,
  setPassword,
  error,
  onSubmit,
}: UserFormProps) => {
  return (
    <div className="flex items-center justify-center m-auto mt-4 text-black lg:h-[40rem]">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg py-14 px-8 w-[22rem] h-[32rem]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          noValidate
          className="flex flex-col gap-10 items-center justify-center p-4"
        >
          <h5 className="text-xl">{title}</h5>
          <input
            className="p-3 rounded border border-neutral-300 w-full"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 rounded border border-neutral-300  w-full"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button as="button">Continue</Button>
        </form>
        {error && (
          <p className="flex items-center justify-center gap-2 text-sm text-red-500 p-3 pb-8">
            <IoIosAlert />
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserForm;
