import Button from "./ui/Button";
import { IoIosAlert } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center m-auto mt-4 text-black lg:h-[40rem]">
      <div className="bg-white rounded-lg p-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            navigate("/");
          }}
          className="flex flex-col gap-8 items-center justify-center py-12"
        >
          <h5 className="text-xl">{title}</h5>
          <input
            className="p-3 rounded border border-neutral-300"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 rounded border border-neutral-300"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button as="button">Continue</Button>
        </form>
        {error && (
          <p className="flex items-center justify-center gap-2 text-red-500 px-3 pb-8">
            <IoIosAlert />
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserForm;
