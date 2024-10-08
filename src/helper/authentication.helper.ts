import { verifyToken } from "./../util/crypto.util";

class AuthenticationHelper {
  async verifyRequest(
    request: Request | any,
    required_permission?: any,
    unProtected?: boolean
  ) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return {
        status: 401,
        message: "Authorization token is missing",
        success: false,
      };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return {
        status: 401,
        message: "Authorization token is missing",
        success: false,
      };
    }

    const result = await verifyToken(token, required_permission, unProtected);
    if (!result) {
      return {
        status: 401,
        message: "Authorization token is invalid",
        success: false,
      };
    }

    return {
      status: 200,
      success: true,
    };
  }
}

export default new AuthenticationHelper() as AuthenticationHelper;
