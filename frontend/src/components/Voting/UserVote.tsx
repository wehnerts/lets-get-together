import {MemberForWork} from "../../model/MemberForWork";
type votingProps = {
    member: MemberForWork

}
export default function UserVote({member}:votingProps){


    return(
        <div>
            Hallo {member.username} Welt
        </div>
    )
}