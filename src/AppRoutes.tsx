import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layouts showHero><HomePage /></Layouts>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />\
            <Route
                path="/search/:city"
                element={
                    <Layouts showHero={false}>
                        <SearchPage />
                    </Layouts>
                }
            />
            <Route
                path="/detail/:restaurantId"
                element={
                    <Layouts showHero={false}>
                        <DetailPage />
                    </Layouts>
                }
            />
            <Route
                path="/user-profile"
                element={
                    <ProtectedRoute>
                        <Layouts>
                            <UserProfilePage />
                        </Layouts>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/manage-restaurant"
                element={
                    <ProtectedRoute>
                        <Layouts>
                            <ManageRestaurantPage />
                        </Layouts>
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
