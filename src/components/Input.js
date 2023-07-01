
export default function Input({label , name , register , error,type,constraints}) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>{label}</label>
        <input
        className="form-control"
        type={type}
        id={name}
        {...register(name,constraints)}
        />
        {error && (<small className="error-msg text-danger">{error.message}</small>)}
    </div>
  )
}
