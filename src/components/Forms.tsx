
export interface FormType {
  id?: string
  name?: string
  field_schema?: Record<string, unknown>
  [k: string]: unknown
  data: {
    name?: string
  }
}

function Forms({ form }: { form: FormType }) {
  return (
    <div>
      <div>
        <button>{form.data.name ?? 'Unnamed'}</button>
      </div>
    </div>
  );
}

export default Forms;