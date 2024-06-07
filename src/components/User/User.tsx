import { UserProps } from "../../types/user";
import { MdLocationCity } from "react-icons/md";

import classes from './User.module.css'

const User = ({ login, avatar_url, followers, following, location }: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />

            <h2>{login}</h2>


            <p className={classes.user_location}> <MdLocationCity /> <span>{location}</span></p>

            <div className={classes.user_status}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.user_number}>{followers}</p>
                </div>

                <div>
                    <p>Seguindo:</p>
                    <p className={classes.user_number}>{following}</p>
                </div>
            </div>
        </div>
    )
}

export default User