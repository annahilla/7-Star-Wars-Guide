import '@testing-library/jest-dom/'
import { fireEvent, render } from "@testing-library/react";
import UserForm from "../components/UserForm";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import { Provider } from 'react-redux';

const mockSetEmail = jest.fn();
const mockSetPassword = jest.fn();
const mockOnSubmit = jest.fn();

const createMockStore = (error: string | null) => {
    return configureStore({
      reducer: {
        auth: authReducer,
      },
      preloadedState: {
        auth: {
            email: "",      
            isAuthenticated: false, 
            error: error,
        },
      },
    });
  };

test("Render form on the page", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
        <UserForm
            title="Test Form"
            email="test@test.com"
            password="12345"
            setEmail={mockSetEmail}
            setPassword={mockSetPassword}
            error={null}
            onSubmit={mockOnSubmit}
        />
    )

    expect(getByText("Test Form")).toBeInTheDocument();
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByRole("button", { name: "Continue" })).toBeInTheDocument();
})

test("Calls onSubmit when form is submitted and the data is valid", () => {
    const { getByRole, getByPlaceholderText } = render(
        <UserForm
            title="Test Form"
            email="test@test.com"
            password="12345"
            setEmail={mockSetEmail}
            setPassword={mockSetPassword}
            error={null}
            onSubmit={mockOnSubmit}
        />
    );

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: 'newemail@test.com' } });

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: 'newpassword' } });

    const button = getByRole("button", { name: "Continue" });
    fireEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
})

test("Renders form and shows error message from Redux state", () => {
    const mockStore = createMockStore("Email is required");

    const { getByRole } = render(
        <Provider store={ mockStore }>
            <UserForm
            title="Test Form"
            email=""
            password="12345"
            setEmail={mockSetEmail}
            setPassword={mockSetPassword}
            error="Email is required"
            onSubmit={mockOnSubmit}
        />                         
        </Provider>
    );

    expect(getByRole('alert')).toHaveTextContent("Email is required");
})

test("Calls setEmail and setPassword when input changes", () => {
    const {getByPlaceholderText} = render(
        <UserForm
            title="Test Form"
            email="test@test.com"
            password="12345"
            setEmail={mockSetEmail}
            setPassword={mockSetPassword}
            error={null}
            onSubmit={mockOnSubmit}
        />
    );

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: 'newemail@test.com' } });

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: 'newpassword' } });

    expect(mockSetEmail).toHaveBeenCalledWith('newemail@test.com');
    expect(mockSetPassword).toHaveBeenCalledWith('newpassword');
})