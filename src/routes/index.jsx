import { Route, Routes } from "react-router-dom"
import Sidebar from "../layout/Sidebar"
import { ROUTES } from "../constants"
import All from "../pages/All"
import Completed from "../pages/Completed"
import Pending from "../pages/Pending"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Sidebar />}>
                    <Route path={ROUTES.ALL_TASK.path} element={<All />} />
                    <Route path={ROUTES.COMPLETED.path} element={<Completed />} />
                    <Route path={ROUTES.PENDING.path} element={<Pending />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;