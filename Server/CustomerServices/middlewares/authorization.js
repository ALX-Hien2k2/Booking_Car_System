import createError from "http-errors";
const Authorization = {
    async isCustomer(req, res, next) {
        const role = req.headers['x-user-role'] || null;
        if (role != null) {
            if (role == "Customer") {
                next();
            } else {
                next(createError.Unauthorized("You are not authorized to access this page"));
            }
        }
    },
}

export default Authorization;