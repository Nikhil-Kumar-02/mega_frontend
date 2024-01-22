import {dotenv} from '../dotenv' 

const baseUrl = dotenv.Backend_Base_Url;
const courseRoute = dotenv.Courses_route

const courseBaseUrl = baseUrl + courseRoute;

export const courseAllRoutes = {
    getAllCategories : `${courseBaseUrl}${dotenv.Show_All_Categories}`,
}
