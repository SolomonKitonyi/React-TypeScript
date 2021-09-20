export type profileProps = {
    name: string
}
export const Profile = ({name}: profileProps) => {
    return <div>Your profile name is {name}</div>
}