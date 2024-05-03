import PageContent from "../components/UI/PageContent";
import BroadcastForm from "../components/Broadcasts/BroadcastForm";
import { useSelector } from "react-redux";

export default function EditCommonsPage () {
    // const selectedLog = useSelector((state) => state.clueLog.currentTier);

    return (
        <PageContent title='My Broadcasts'>
            <BroadcastForm />
        </PageContent>
    )
}