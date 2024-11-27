import '@testing-library/jest-dom/'
import { fireEvent, render, screen } from "@testing-library/react";
import Button from '../components/ui/Button';
import { BrowserRouter } from 'react-router-dom';

describe("Button Component", () => {
    test("Renders button on the page", () => {
        const component = render(<Button onClick={jest.fn()} as="button">Click Me</Button>);
        
        const button = component.container.querySelector("button");
        expect(button).toBeInTheDocument();
        expect(button?.tagName).toBe("BUTTON");
    })
    
    test("Renders button as 'link'", () => {
        render(
            <BrowserRouter>
                <Button as="link" to="/">Click Me</Button>
            </BrowserRouter>
        );
    
        const link = screen.getByRole("link", { name: "Click Me" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/");
    })
    
    test("Renders button as 'button' and handles click", () => {
        const mockHandler = jest.fn();
        render(<Button as="button" onClick={mockHandler}>Click Me</Button>);
    
        const button = screen.getByRole("button", { name: "Click Me" });
        expect(button).toBeInTheDocument();
        
        if(button) {
            fireEvent.click(button);
        }
    
        expect(mockHandler).toHaveBeenCalledTimes(1);
    })

})