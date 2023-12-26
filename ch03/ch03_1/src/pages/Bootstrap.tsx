export default function Bootstrap() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="htmlform-label">
          Email address
        </label>
        <input
          type="email"
          className="htmlform-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="htmlform-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="htmlform-label">
          Password
        </label>
        <input type="password" className="htmlform-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 htmlform-check">
        <input type="checkbox" className="htmlform-check-input" id="exampleCheck1" />
        <label className="htmlform-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
