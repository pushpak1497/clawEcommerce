import { Session } from "../models/session.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find();
  if (!sessions) {
    throw new ApiError(404, "no sessions found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, sessions, "sessions fetched successfully"));
});
export { getSessions };
