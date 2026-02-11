/**
 * Feature #3: useFormStatus (React 19)
 *
 * - Reads parent <form>'s pending state
 * - No prop drilling needed
 * - Must be used INSIDE a <form> — reads nearest parent form
 * - Great for design system submit buttons
 */
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

// This button automatically knows if parent form is submitting
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit Form"}
      </button>
      {pending && (
        <p style={{ color: "blue", fontSize: "12px" }}>
          Submitting: {data?.get("username")} via {method?.toUpperCase()}
        </p>
      )}
    </div>
  );
}

async function submitAction(prevState, formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  await new Promise((res) => setTimeout(res, 2000));
  return { success: true, message: `User "${username}" (${email}) registered!` };
}

export default function UseFormStatusDemo() {
  const [state, formAction] = useActionState(submitAction, { success: null, message: "" });

  return (
    <div>
      <h2>3. useFormStatus</h2>
      <p>Read parent form's pending state — no prop drilling. SubmitButton automatically knows.</p>

      <form action={formAction}>
        <input name="username" placeholder="Username" required />
        <br />
        <input name="email" type="email" placeholder="Email" required />
        <br />
        {/* SubmitButton reads form state without any props */}
        <SubmitButton />
      </form>

      {state.message && (
        <p style={{ color: "green" }}>{state.message}</p>
      )}
    </div>
  );
}
