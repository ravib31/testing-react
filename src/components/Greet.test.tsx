import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test("Greet renders successfully",()=>{
    render(<Greet/>)
    const greetElement = screen.getByText(/ravi/i);
    expect(greetElement).toBeInTheDocument();
})