import '@testing-library/jest-dom/'
import { fireEvent, render, screen } from "@testing-library/react";
import UserForm from "../components/UserForm";
import { Provider } from 'react-redux';
import { createMockStore, mockState } from '../../test/__mocks__/mockStore';

const mockSetEmail = jest.fn();
const mockSetPassword = jest.fn();
const mockOnSubmit = jest.fn();

const store = createMockStore({ 
    auth: { email: "", isAuthenticated: false, error: null }, 
    starships: mockState.starships 
});

describe("UserForm Component", () => {
    test("Render form on the page", () => {
        render(
            <Provider store={ store }>
                <UserForm
                title="Test Form"
                email="test@test.com"
                password="12345"
                setEmail={mockSetEmail}
                setPassword={mockSetPassword}
                onSubmit={mockOnSubmit}
            />
            </Provider>
        )
    
        expect(screen.getByText("Test Form")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /continue/i })).toBeInTheDocument();
    })
    
    test("Submits form with valid data and triggers onSubmit handler", () => {
        render(
            <Provider store={ store }>
                <UserForm
                title="Test Form"
                email="test@test.com"
                password="12345"
                setEmail={mockSetEmail}
                setPassword={mockSetPassword}
                onSubmit={mockOnSubmit}
            />
            </Provider>
        );
    
        const emailInput = screen.getByPlaceholderText("Email");
        fireEvent.change(emailInput, { target: { value: 'newemail@test.com' } });
    
        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.change(passwordInput, { target: { value: 'newpassword' } });
    
        const button = screen.getByRole("button", { name: /continue/i })
        fireEvent.click(button);
    
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    })
    
    test("Displays error message when error is present in Redux state", () => {
        const mockStore = createMockStore({
            auth: { email: "", isAuthenticated: false, error: "Email is required" },
            starships: mockState.starships,
        });

        render(
            <Provider store={ mockStore }>
                <UserForm
                title="Test Form"
                email=""
                password="12345"
                setEmail={mockSetEmail}
                setPassword={mockSetPassword}
                onSubmit={mockOnSubmit}
            />                         
            </Provider>
        );
    
        expect(screen.getByRole('alert')).toBeInTheDocument();
    })
    
    test("Calls setEmail and setPassword when input changes", () => {
        render(
            <Provider store={ store }>
                <UserForm
                title="Test Form"
                email="test@test.com"
                password="12345"
                setEmail={mockSetEmail}
                setPassword={mockSetPassword}
                onSubmit={mockOnSubmit}
            />
            </Provider>
        );
    
        const emailInput = screen.getByPlaceholderText("Email");
        fireEvent.change(emailInput, { target: { value: 'newemail@test.com' } });
    
        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.change(passwordInput, { target: { value: 'newpassword' } });
    
        expect(mockSetEmail).toHaveBeenCalledWith('newemail@test.com');
        expect(mockSetPassword).toHaveBeenCalledWith('newpassword');
    })
})



