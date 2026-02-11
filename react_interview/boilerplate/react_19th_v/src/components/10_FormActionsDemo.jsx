/**
 * Feature #10: Form Actions — action={fn} (React 19)
 *
 * - Pass function directly to <form action={fn}>
 * - <button formAction={fn}> for per-button actions
 * - requestFormReset() for manual reset
 * - Auto form reset on successful action
 * - Works with Server Components too
 */
import { useActionState } from "react";
import { requestFormReset } from "react-dom";

async function handleSave(prevState, formData) {
  const title = formData.get("title");
  const body = formData.get("body");
  await new Promise((res) => setTimeout(res, 1000));
  return { type: "save", message: `Saved: "${title}"`, data: { title, body } };
}

async function handleDraft(prevState, formData) {
  const title = formData.get("title");
  await new Promise((res) => setTimeout(res, 500));
  return { type: "draft", message: `Drafted: "${title}"` };
}

export default function FormActionsDemo() {
  const [saveState, saveAction, savePending] = useActionState(handleSave, {});
  const [draftState, draftAction, draftPending] = useActionState(handleDraft, {});

  const pending = savePending || draftPending;

  return (
    <div>
      <h2>10. Form Actions</h2>
      <p>
        <code>{"<form action={fn}>"}</code> + <code>{"<button formAction={fn}>"}</code> +{" "}
        <code>requestFormReset()</code>
      </p>

      <form action={saveAction}>
        <input name="title" placeholder="Post title" required style={{ width: "100%", padding: "8px" }} />
        <br />
        <textarea name="body" placeholder="Post body..." rows={3} style={{ width: "100%", padding: "8px" }} />
        <br />
        {/* Default form action = save */}
        <button type="submit" disabled={pending}>
          {savePending ? "Saving..." : "Save Post"}
        </button>

        {/* Per-button formAction = draft */}
        <button type="submit" formAction={draftAction} disabled={pending} style={{ marginLeft: "5px" }}>
          {draftPending ? "Drafting..." : "Save as Draft"}
        </button>

        {/* Manual reset using requestFormReset */}
        <button
          type="button"
          onClick={(e) => requestFormReset(e.target.closest("form"))}
          style={{ marginLeft: "5px" }}
        >
          Reset
        </button>
      </form>

      {saveState.message && <p style={{ color: "green" }}>{saveState.message}</p>}
      {draftState.message && <p style={{ color: "blue" }}>{draftState.message}</p>}

      <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
{`// Form with function action
<form action={saveAction}>
  <input name="title" />
  <button type="submit">Save</button>

  {/* Different action per button */}
  <button formAction={draftAction}>Draft</button>
</form>

// Manual form reset
requestFormReset(formElement);`}
      </pre>
    </div>
  );
}
