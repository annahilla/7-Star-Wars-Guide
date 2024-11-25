import '@testing-library/jest-dom/'
import { fireEvent, render } from "@testing-library/react";
import Button from '../components/ui/Button';
import { BrowserRouter } from 'react-router-dom';

test("Renders button on the page", () => {
    const component = render(<Button as="button">Click Me</Button>);
    
    const button = component.container.querySelector("button");
    expect(button).toBeInTheDocument();
    expect(button?.tagName).toBe("BUTTON");
})

test("Renders button as 'link'", () => {
    const { getByRole } = render(
        <BrowserRouter>
            <Button as="link" to="/">Click Me</Button>
        </BrowserRouter>
    );

    const link = getByRole("link", { name: "Click Me" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
})

test("Renders button as 'button'", () => {
    const mockHandler = jest.fn();
    const { getByRole } = render(<Button as="button" onClick={mockHandler}>Click Me</Button>);

    const button = getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    
    if(button) {
        fireEvent.click(button);
    }

    expect(mockHandler).toHaveBeenCalledTimes(1);
})

test("Throws error when onClick is passed with 'link'", () => {
    expect(() => {
        render(
            <BrowserRouter>
                <Button as="link" to="/" onClick={() => {}}>Click Me</Button>
            </BrowserRouter>
        );
    }).toThrowError("onClick can't be used in a link (as='link')");
});

test("Throws error when to is passed with 'button'", () => {
    expect(() => {
        render(<Button as="button" to="/" onClick={() => {}}>Click Me</Button>);
    }).toThrowError("to can't be used in a button (as='button')");
});