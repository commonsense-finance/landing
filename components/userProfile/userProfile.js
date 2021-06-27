

const title = "User Profile";
const description = "";


export default function UserProfile() {
  return (
    <div className="container-flex bg-soft-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-7 text-center py-5">
            <div>
              <h1 className="py-4">{title}</h1>
            </div>
            <div>
              <p >{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}