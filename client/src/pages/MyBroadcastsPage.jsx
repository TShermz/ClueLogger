import PageContent from "../components/UI/PageContent";
import MyBroadcasts from "../components/Broadcasts/MyBroadcasts";
import { useSelector } from "react-redux";

export default function MyBroadcastsPage () {
    // const selectedLog = useSelector((state) => state.clueLog.currentTier);

    return (
        <PageContent title='My Broadcasts'>
            <MyBroadcasts />
        </PageContent>
    )
}