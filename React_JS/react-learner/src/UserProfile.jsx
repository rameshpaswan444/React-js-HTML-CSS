import style from "./CSS/UserProfile.module.css";
function UserProfile() {

    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
          <img className={style.imgstyle} src="https://www.w3schools.com/howto/img_avatar.png"/>
            <div>
                <h2>Ramesh Paswan</h2>
                <p>Software Engineer</p>
            </div>
        </div>
    )


}
export default UserProfile;